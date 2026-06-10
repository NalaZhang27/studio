/**
 * Central branding configuration.
 * Update studio name, contact info, and social links here.
 */
export const branding = {
  studio: {
    name: "Aurora Sound Studio",
    nameShort: "Aurora",
    tagline: {
      en: "Music for Stories That Matter",
      zh: "为值得讲述的故事创作音乐",
    },
    description: {
      en: "A boutique creative studio crafting original music and audio for film, animation, theatre, games, and contemporary media.",
      zh: "一家精品创意音乐工作室，为电影、动画、戏剧、游戏与当代媒体项目创作原创音乐与音频。",
    },
  },
  contact: {
    email: "hello@aurorasound.studio",
    location: {
      en: "Shanghai · Remote Worldwide",
      zh: "上海 · 全球远程合作",
    },
  },
  social: {
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
    spotify: "https://spotify.com",
    linkedin: "https://linkedin.com",
  },
  demoReel: {
    youtubeId: "dQw4w9WgXcQ",
  },
} as const;

export type Branding = typeof branding;
