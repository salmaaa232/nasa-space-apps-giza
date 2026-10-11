import { getTranslations } from "next-intl/server"
import {
  ChevronDown,
  Compass,
  GraduationCap,
  Radio,
  Rocket,
  Users,
} from "lucide-react"
import styles from "./landing.module.css"
import { MissionDeck } from "./mission-deck"

const objectives = [
  { key: "crew", icon: Users },
  { key: "train", icon: GraduationCap },
  { key: "mentors", icon: Compass },
  { key: "build", icon: Rocket },
] as const

export async function MissionCard() {
  const t = await getTranslations("Home")

  return (
    <MissionDeck
      briefing={
        <div className={`${styles.missionCard} ${styles.briefingPanel}`}>
          <div className={styles.cardCorners} aria-hidden="true" />
          <header className={styles.missionHeader}>
            <div className={styles.controlIdentity}>
              <span className={styles.controlEmblem}>
                <Radio size={23} aria-hidden="true" />
              </span>
              <div>
                <p>{t("controlTitle")}</p>
                <span>{t("missionLabel")}</span>
              </div>
            </div>
            <div className={styles.transmissionId}>
              <span className={styles.signal} />
              {t("deck.transmission")}
              <span className={styles.signalBars} aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </span>
            </div>
          </header>

          <div className={styles.missionGrid}>
            <div className={styles.missionCopy}>
              <p className={styles.eyebrow}>
                <span className={styles.missionIndex}>01</span>
                {t("hookLabel")}
              </p>
              <h3 id="briefing-title">
                {t("hookTitle")}
                <br />
                <span>{t("hookAccent")}</span>
              </h3>
              <p className={styles.bodyCopy}>{t("hookDescription")}</p>
              <p className={styles.reassurance}>{t("reassurance")}</p>
            </div>
            <div className={styles.briefingBenefits}>
              <div className={styles.objectivesHeading}>
                <span>{t("missionObjectives")}</span>
                <span>{t("missionSteps")}</span>
              </div>
              <div className={styles.missionObjectives}>
                {objectives.map(({ key, icon: Icon }, index) => (
                  <details
                    className={styles.objective}
                    key={key}
                    data-mission-benefit
                  >
                    <summary>
                      <span className={styles.objectiveIcon}>
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <span className={styles.objectiveNumber}>
                        0{index + 1}
                      </span>
                      <h3>{t(`benefits.${key}.title`)}</h3>
                      <ChevronDown
                        size={14}
                        className={styles.objectiveChevron}
                        aria-hidden="true"
                      />
                    </summary>
                    <p>{t(`benefits.${key}.description`)}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
          <footer className={styles.missionCardFooter}>
            <span>
              <span className={styles.signal} />
              {t("briefReceived")}
            </span>
          </footer>
        </div>
      }
    />
  )
}
