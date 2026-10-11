import assert from "node:assert/strict"
import { createRequire } from "node:module"
import fs from "node:fs"
import path from "node:path"

const require = createRequire(import.meta.url)
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright")
const base = process.env.MISSION_BASE_URL || "http://localhost:3000"
const output = process.env.MISSION_SCREENSHOTS
if (output) fs.mkdirSync(output, { recursive: true })
const browser = await chromium.launch({
  headless: true,
  ...(process.env.CHROME_PATH
    ? { executablePath: process.env.CHROME_PATH }
    : {}),
})
try {
  for (const locale of ["en", "ar"]) {
    for (const width of [320, 390, 768, 1440]) {
      const page = await browser.newPage({
        viewport: { width, height: width >= 1000 ? 800 : 950 },
      })
      const errors = []
      page.on("pageerror", (error) => errors.push(error.message))
      await page.goto(`${base}/${locale}`, { waitUntil: "networkidle" })
      await page.evaluate(() => document.fonts.ready)
      await page.waitForTimeout(2300)
      const hero = page.locator('section[aria-labelledby="landing-title"]')
      const geometry = await hero.evaluate((el) => {
        const rect = el.getBoundingClientRect()
        const title = el.querySelector("h1")
        const fonts = [...document.fonts].map((font) => ({
          family: font.family,
          status: font.status,
        }))
        return {
          overflow: document.documentElement.scrollWidth > window.innerWidth,
          fonts,
          headingFont: getComputedStyle(title).fontFamily,
          subtitleFont: getComputedStyle(title.lastElementChild).fontFamily,
          titleFits: title.scrollWidth <= title.clientWidth,
          imagesLoaded: [...el.querySelectorAll("img")].every(
            (img) => img.complete && img.naturalWidth > 0
          ),
          planets: [...el.querySelectorAll("[data-depth]")].map((planet) => {
            const p = planet.querySelector("img").getBoundingClientRect()
            return {
              node: planet.dataset.nodeId,
              visibleWidth:
                (Math.min(p.right, rect.right) - Math.max(p.left, rect.left)) /
                p.width,
              inHero: p.bottom > rect.top && p.top < rect.bottom,
            }
          }),
        }
      })
      assert(!geometry.overflow, `${locale}/${width}: horizontal overflow`)
      assert(geometry.titleFits, `${locale}/${width}: heading clipped`)
      assert(geometry.imagesLoaded, "All hero assets must load")
      assert.match(geometry.headingFont, /pinnacle/i)
      assert.match(geometry.subtitleFont, /spaceRabbit/i)
      for (const name of [/^pinnacle$/i, /^spaceRabbit$/i]) {
        assert(
          geometry.fonts.some(
            (font) =>
              name.test(font.family.replaceAll('"', "")) &&
              font.status === "loaded"
          ),
          `Font did not load: ${name}`
        )
      }
      assert.equal(geometry.planets.length, 5)
      for (const planet of geometry.planets) {
        assert(
          planet.inHero && planet.visibleWidth > (width <= 700 ? 0.75 : 0.5),
          `${locale}/${width}: planet ${planet.node} clipped`
        )
      }
      if (output)
        await hero.screenshot({
          path: path.join(output, `${locale}-${width}.png`),
        })
      const movingLayer = hero.locator('[data-node-id="31:108"]')
      const floating = movingLayer.locator("div > div").last()
      const transform = () =>
        floating.evaluate((el) => getComputedStyle(el).transform)
      const before = await transform()
      await page.waitForTimeout(550)
      assert.notEqual(
        await transform(),
        before,
        "Planet must animate without scrolling"
      )
      const toggle = hero.locator("button[aria-pressed]")
      await toggle.click()
      await page.waitForTimeout(100)
      const frozen = await transform()
      const frozenDepth = await movingLayer.getAttribute("style")
      await page.evaluate(() => window.scrollBy(0, 80))
      await page.waitForTimeout(300)
      assert.equal(await transform(), frozen, "Pause must freeze floating")
      assert.equal(
        await movingLayer.getAttribute("style"),
        frozenDepth,
        "Pause must freeze parallax"
      )
      await toggle.click()
      await page.evaluate(() => window.scrollTo(0, 160))
      await page.waitForTimeout(700)
      assert.notEqual(
        await movingLayer.getAttribute("style"),
        frozenDepth,
        "Resume must restore parallax"
      )
      await page.emulateMedia({ reducedMotion: "reduce" })
      await page.waitForTimeout(100)
      assert.equal(
        await transform(),
        "none",
        "Reduced motion must disable floating"
      )
      assert.equal(
        await movingLayer.evaluate((el) => getComputedStyle(el).transform),
        "none"
      )
      assert(
        !(await toggle.isVisible()),
        "Reduced motion must hide motion control"
      )
      assert.deepEqual(errors, [])
      console.log(
        `PASS ${locale} ${width}px: fonts, assets, layout, motion, pause, reduced motion`
      )
      await page.close()
    }
  }
} finally {
  await browser.close()
}
