const dictionaries = {
  en: {
    home: {
      title: "Explore the Cosmos",
      description: "Your gateway to the latest discoveries in space exploration, astronomy, and the mysteries of our universe.",
    },
  },
  ja: {
    home: {
      title: "宇宙を探検しよう",
      description: "宇宙探査、天文学、そして私たちの宇宙の神秘に関する最新の発見をお届けします。",
    },
  },
} as const;

export async function getDictionary(locale: string) {
  return dictionaries[locale as keyof typeof dictionaries];
}