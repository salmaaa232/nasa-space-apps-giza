// Phase numbers come from the event brief; the missing 02 is intentional.
export const timelinePhases = [
  { key: "launch", number: "01", accent: "#b9a8f5" },
  { key: "bootcamp", number: "03", accent: "#a6bcff" },
  { key: "training", number: "04", accent: "#8ec8ff" },
  { key: "hackathon", number: "05", accent: "#c2b0ff" },
  { key: "global", number: "06", accent: "#9bdad8" },
] as const

export const timelinePlanets = [
  {
    name: "earth",
    src: "/space/earth.webp",
    width: 300,
    height: 303,
    size: 0.18,
  },
  {
    name: "saturn",
    src: "/space/saturn.png",
    width: 759,
    height: 459,
    size: 0.26,
  },
  {
    name: "jupiter",
    src: "/space/jupiter.webp",
    width: 366,
    height: 369,
    size: 0.21,
  },
  { name: "mars", src: "/space/mars.svg", width: 240, height: 240, size: 0.18 },
  {
    name: "neptune",
    src: "/space/neptune.webp",
    width: 598,
    height: 548,
    size: 0.23,
  },
] as const
