/**
 * Central branding configuration for EON Resonance Lab.
 * Keep all studio naming, positioning, and contact details here.
 */
export const branding = {
  studio: {
    name: "EON Resonance Lab",
    nameShort: "EON",
    tagline: {
      en: "Cinematic music for film, stage, screens, and collaborative worlds.",
      zh: "为电影、舞台、影像与合作型创作世界打造电影感音乐。",
    },
    description: {
      en: "EON Resonance Lab is a boutique creative music studio specializing in film scoring, animation music, musical theatre, contemporary production, arrangement, and cross-cultural music projects.",
      zh: "EON Resonance Lab 是一家精品创意音乐工作室，专注于电影配乐、动画音乐、音乐剧、当代制作、编曲与跨文化音乐项目。",
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
  demoReel: {
    youtubeId: "dQw4w9WgXcQ",
  },
} as const;

export type Branding = typeof branding;
