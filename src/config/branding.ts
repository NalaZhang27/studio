/**
 * Central branding configuration for EON Resonance Lab.
 * Keep all studio naming, positioning, and contact details here.
 */
export const branding = {
  studio: {
    name: "EON Resonance Lab",
    nameShort: "EON",
    tagline: {
      en: "Music for Stories That Matter",
      zh: "为触动人心的故事谱写音乐",
    },
    description: {
      en: "EON Resonance Lab is a creative music studio dedicated to storytelling through sound.\n\nWe create original music for film, animation, games, and contemporary media, combining cinematic composition, orchestral writing, and modern production.\n\nThrough original scoring, arrangement, and collaborative projects, we craft music that brings stories to life and leaves a lasting emotional impact.",
      zh: "EON Resonance Lab 是一家专注于叙事与声音表达的创意音乐工作室。\n\n我们为电影、动画、游戏及当代媒体项目创作原创音乐，融合影视配乐、管弦写作与现代制作理念，以音乐塑造情感、传递故事。\n\n从原创配乐到编曲制作，从个人创作到跨领域合作，我们致力于打造兼具艺术性与感染力的声音体验。",
    },
    positioning: {
      en: [
        "Cinematic",
        "Elegant",
        "Modern",
        "Creative",
        "International",
        "Artist-driven",
      ],
      zh: ["电影感", "优雅", "现代", "创意", "国际化", "艺术家驱动"],
    },
  },
  contact: {
    email: "hello@eonresonance.lab",
    location: {
      en: "New York · Remote Worldwide",
      zh: "纽约 · 全球远程合作",
    },
  },
  social: {
    youtube: "https://www.youtube.com/@eonresonancelab",
    instagram: "https://www.instagram.com/eonresonancelab",
    spotify: "https://open.spotify.com/artist/eonresonancelab",
    linkedin: "https://www.linkedin.com/company/eonresonancelab",
  },
  demoReel: {
    youtubeId: "dQw4w9WgXcQ",
  },
} as const;

export type Branding = typeof branding;
