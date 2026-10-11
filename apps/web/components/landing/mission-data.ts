// Challenge copy and destinations are preserved from the supplied 2026 brief.
export type MissionTheme =
  | "lunar"
  | "earth"
  | "habitat"
  | "landing"
  | "health"
  | "radar"
  | "farms"
  | "flame"
  | "hotspots"
  | "analogs"
  | "mars"
  | "cosmic"
  | "flight"
  | "sound"
export type Mission =
  | {
      kind: "briefing"
      id: "briefing"
      label: string
      title: string
      accent: string
    }
  | {
      kind: "challenge"
      id: MissionTheme
      label: string
      title: string
      summary: string
      difficulty: string[]
      subjects: string[]
      url: string
      accent: string
    }
export const missions: Mission[] = [
  {
    kind: "briefing",
    id: "briefing",
    label: "MISSION BRIEFING",
    title: "Mission Briefing",
    accent: "#b8a5ff",
  },
  {
    kind: "challenge",
    id: "lunar",
    label: "LUNAR ARCHIVES",
    title:
      "Abandoned but Not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars",
    summary:
      "Tell the stories of equipment NASA left on the Moon and Mars, and the discoveries it helped make possible.",
    difficulty: ["Beginner / Youth", "Intermediate"],
    subjects: ["Space Exploration", "Planets & Moons", "Astrophysics"],
    url: "https://www.spaceappschallenge.org/2026/challenges/abandoned-but-not-forgotten-storytelling-about-nasas-discarded-equipment-on-the-moon-and-mars//?tab=teams",
    accent: "#d4c8ff",
  },
  {
    kind: "challenge",
    id: "earth",
    label: "EARTH WATCH",
    title: "Be An Earth System Trend Detective!",
    summary:
      "Use NASA data to investigate how Earth's environment changes over time, where changes happen, and whether those changes are scientifically significant.",
    difficulty: ["Advanced"],
    subjects: ["Earth Science", "Software"],
    url: "https://www.spaceappschallenge.org/2026/challenges/be-an-earth-system-trend-detective//?tab=teams",
    accent: "#7cdacb",
  },
  {
    kind: "challenge",
    id: "habitat",
    label: "JUNIOR ASTRONAUTS",
    title: "Build a Junior Astronaut Mission Trainer",
    summary:
      "Create a game where students manage a Moon or Mars base, balancing life support, radiation protection, power, and food to keep their crew alive.",
    difficulty: ["Beginner / Youth", "Intermediate"],
    subjects: ["Games", "Planets & Moons", "Software", "Space Exploration"],
    url: "https://www.spaceappschallenge.org/2026/challenges/build-a-junior-astronaut-mission-trainer//?tab=teams",
    accent: "#f1bf8d",
  },
  {
    kind: "challenge",
    id: "landing",
    label: "LUNAR NAVIGATION",
    title: "CLPS Lunar Mission Browser",
    summary:
      "Build a tool to compare Moon landing sites and dates, showing sunlight and Earth visibility to help evaluate power generation and communication opportunities.",
    difficulty: ["Intermediate", "Advanced"],
    subjects: ["Human Exploration", "Moon", "Software"],
    url: "https://www.spaceappschallenge.org/2026/challenges/clps-lunar-mission-browser//?tab=teams",
    accent: "#d2d6ed",
  },
  {
    kind: "challenge",
    id: "health",
    label: "CREW HEALTH",
    title: "Create Health Monitoring Software for Astronauts on Space Missions",
    summary:
      "Build software that tracks astronauts' health indicators and helps them monitor their condition during long-duration space missions.",
    difficulty: ["Intermediate"],
    subjects: ["Human Exploration", "Software", "Space Exploration"],
    url: "https://www.spaceappschallenge.org/2026/challenges/create-health-monitoring-software-for-astronauts-on-space-missions//?tab=teams",
    accent: "#f6a5c6",
  },
  {
    kind: "challenge",
    id: "radar",
    label: "RADAR DETECTIVE",
    title: "Dancing with the SARs",
    summary:
      "Use radar satellite data from the NASA-ISRO NISAR mission to build an interactive tool that reveals changes to Earth's surface, from wildfires to earthquakes.",
    difficulty: ["Intermediate", "Advanced"],
    subjects: ["Earth Science"],
    url: "https://www.spaceappschallenge.org/2026/challenges/dancing-with-the-sars//?tab=teams",
    accent: "#7bd4e8",
  },
  {
    kind: "challenge",
    id: "farms",
    label: "SMART AGRICULTURE",
    title: "Field Shift: Adapting Farms with NASA Data",
    summary:
      "Create a decision-support tool that combines NASA Earth observations, soil conditions, and farming needs to help farmers explore resilient crop-rotation strategies.",
    difficulty: ["Intermediate", "Advanced"],
    subjects: ["Arts & Multimedia", "Earth Science", "Software"],
    url: "https://www.spaceappschallenge.org/2026/challenges/field-shift-adapting-farms-with-nasa-data//?tab=teams",
    accent: "#b4d98b",
  },
  {
    kind: "challenge",
    id: "flame",
    label: "ZERO-G FIRE LAB",
    title:
      "Flame in Freefall: AI-Powered Fire Safety Insights from Microgravity Combustion Data",
    summary:
      "Build an AI-powered dashboard that organizes NASA's microgravity fire experiments and reveals insights that could improve fire safety on future space missions.",
    difficulty: ["Intermediate", "Advanced"],
    subjects: ["Space Exploration"],
    url: "https://www.spaceappschallenge.org/2026/challenges/flame-in-freefall-ai-powered-fire-safety-insights-from-microgravity-combustion-data//?tab=teams",
    accent: "#ffa77f",
  },
  {
    kind: "challenge",
    id: "hotspots",
    label: "FIRE TRACKER",
    title: "Harmonization of MODIS and VIIRS Hot Spots",
    summary:
      "Combine fire records from two satellite systems into one consistent calendar to help identify wildfire patterns, unusual burning activity, and critical periods.",
    difficulty: ["Intermediate", "Advanced"],
    subjects: ["Earth Science", "Software"],
    url: "https://www.spaceappschallenge.org/2026/challenges/harmonization-of-modis-and-viirs-hot-spots//?tab=teams",
    accent: "#ffb98c",
  },
  {
    kind: "challenge",
    id: "analogs",
    label: "EARTH ANALOGS",
    title:
      "Identify Earth Locations that Analog the Permanent Moon Base Locations and Mars",
    summary:
      "Use Earth, Moon, and Mars data to discover places on Earth that resemble potential lunar or Martian base locations and help prepare for future exploration.",
    difficulty: ["Beginner / Youth", "Intermediate", "Advanced"],
    subjects: [
      "Earth Science",
      "Planets & Moons",
      "Software",
      "Space Exploration",
    ],
    url: "https://www.spaceappschallenge.org/2026/challenges/identify-earth-locations-that-analog-the-permanent-moon-base-locations-and-mars//?tab=teams",
    accent: "#dcc3a0",
  },
  {
    kind: "challenge",
    id: "mars",
    label: "MARTIAN EXPLORER",
    title: "Interplanetary Survival Guide: Martian Map",
    summary:
      "Create an interactive Mars map combining NASA datasets to help future astronauts navigate terrain, plan routes, and conduct scientific exploration safely.",
    difficulty: ["Intermediate"],
    subjects: [
      "Human Exploration",
      "Mars",
      "Planets & Moons",
      "Software",
      "Space Exploration",
    ],
    url: "https://www.spaceappschallenge.org/2026/challenges/interplanetary-survival-guide-martian-map//?tab=teams",
    accent: "#f3a184",
  },
  {
    kind: "challenge",
    id: "cosmic",
    label: "COSMIC DETECTIVE",
    title: "Planet X and SPHEREx",
    summary:
      "Build a public-friendly tool for exploring SPHEREx sky images and spotting how celestial objects change position over time.",
    difficulty: ["Advanced"],
    subjects: ["Astrophysics", "Planets & Moons", "Software"],
    url: "https://www.spaceappschallenge.org/2026/challenges/planet-x-and-spherex//?tab=teams",
    accent: "#aab4ff",
  },
  {
    kind: "challenge",
    id: "flight",
    label: "FLIGHT SIMULATOR",
    title: "Space Mission Design Game",
    summary:
      "Create a game where players design and manage a space mission, balance limited resources, make engineering decisions, and discover how those choices affect mission success.",
    difficulty: ["Beginner / Youth", "Intermediate"],
    subjects: ["Games", "Space Exploration"],
    url: "https://www.spaceappschallenge.org/2026/challenges/space-mission-design-game//?tab=teams",
    accent: "#95ccf5",
  },
  {
    kind: "challenge",
    id: "sound",
    label: "EARTH IN SOUND",
    title: "The Earth Information Jukebox",
    summary:
      "Turn NASA's visualizations of Earth into sound by creating an interactive experience that makes our changing planet accessible through both sight and hearing.",
    difficulty: ["Beginner / Youth", "Intermediate"],
    subjects: ["Arts & Multimedia", "Earth Science", "Software"],
    url: "https://www.spaceappschallenge.org/2026/challenges/the-earth-information-jukebox//?tab=teams",
    accent: "#b7a1f5",
  },
]
