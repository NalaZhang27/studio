import type { PortfolioProject } from "@/types";

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "echoes-of-dawn",
    slug: "echoes-of-dawn",
    category: "film",
    title: { en: "Echoes of Dawn", zh: "黎明回响" },
    description: {
      en: "An orchestral film score for an independent drama exploring memory, loss, and redemption across three generations. Features live strings, piano, and subtle electronic textures.",
      zh: "一部独立剧情片的管弦乐配乐，探索三代人之间的记忆、失去与救赎。采用现场弦乐、钢琴与细腻的电子质感。",
    },
    credits: {
      en: "Composer & Orchestrator: Enshun Zhang · Director: Li Wei · Production: Dawnlight Films",
      zh: "作曲与编配：Enshun Zhang · 导演：李伟 · 制作：黎明影业",
    },
    coverImage:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80",
    year: "2025",
    featured: true,
    media: {
      type: "youtube",
      url: "https://www.youtube.com/embed/LXb3EKWsInQ",
      title: { en: "Main Theme — Echoes of Dawn", zh: "主题曲 — 黎明回响" },
    },
  },
  {
    id: "starfall-chronicles",
    slug: "starfall-chronicles",
    category: "animation",
    title: { en: "Starfall Chronicles", zh: "星落编年史" },
    description: {
      en: "Original animation score for a fantasy adventure series. Blends orchestral grandeur with whimsical motifs for a young hero's journey through celestial realms.",
      zh: "奇幻冒险动画系列的原创配乐。将管弦乐的宏伟与年轻英雄穿越星域旅程的 whimsical 动机相融合。",
    },
    credits: {
      en: "Composer: Enshun Zhang · Animation Studio: Nebula Works · 24 Episodes",
      zh: "作曲：Enshun Zhang · 动画工作室：Nebula Works · 24集",
    },
    coverImage:
      "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1200&q=80",
    year: "2025",
    featured: true,
    media: {
      type: "youtube",
      url: "https://www.youtube.com/embed/ScMzIvxBSi4",
      title: { en: "Opening Theme", zh: "片头曲" },
    },
  },
  {
    id: "midnight-garden",
    slug: "midnight-garden",
    category: "theatre",
    title: { en: "Midnight Garden", zh: "午夜花园" },
    description: {
      en: "Full musical theatre score including overture, character themes, and ensemble numbers for a contemporary stage production about love and identity in modern Shanghai.",
      zh: "完整的音乐剧配乐，包括序曲、角色主题与合唱段落，为一部关于现代上海爱情与身份的当代舞台作品而作。",
    },
    credits: {
      en: "Composer & Lyricist: Enshun Zhang · Director: Chen Ying · Shanghai Theatre Group",
      zh: "作曲与作词：Enshun Zhang · 导演：陈颖 · 上海剧团",
    },
    coverImage:
      "https://images.unsplash.com/photo-1507676180833-0f770a315991?w=1200&q=80",
    year: "2024",
    featured: true,
    media: {
      type: "audio",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      title: { en: "Overture — Midnight Garden", zh: "序曲 — 午夜花园" },
    },
  },
  {
    id: "neon-horizon",
    slug: "neon-horizon",
    category: "games",
    title: { en: "Neon Horizon", zh: "霓虹地平线" },
    description: {
      en: "Adaptive game soundtrack for a cyberpunk RPG. Dynamic music system responds to player choices, combat intensity, and narrative branches.",
      zh: "赛博朋克RPG的自适应游戏原声。动态音乐系统响应玩家选择、战斗强度与叙事分支。",
    },
    credits: {
      en: "Lead Composer: Enshun Zhang · Sound Design: Aurora Sound Studio · Pixel Forge Games",
      zh: "首席作曲：Enshun Zhang · 声音设计：极光声音工作室 · Pixel Forge Games",
    },
    coverImage:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80",
    year: "2025",
    media: {
      type: "youtube",
      url: "https://www.youtube.com/embed/jfKfPfyJRdk",
      title: { en: "Exploration Theme", zh: "探索主题" },
    },
  },
  {
    id: "golden-hour",
    slug: "golden-hour",
    category: "songs",
    title: { en: "Golden Hour", zh: "黄金时刻" },
    description: {
      en: "A C-pop single produced and arranged for a rising vocalist. Features lush harmonies, modern production, and a cinematic bridge section.",
      zh: "为一位新兴歌手制作与编曲的C-pop单曲。拥有丰富的和声、现代制作与电影感的桥段。",
    },
    credits: {
      en: "Producer & Arranger: Enyuan Zhang · Vocal Production: Enyuan Zhang · Artist: Luna Chen",
      zh: "制作与编曲：Enyuan Zhang · 人声制作：Enyuan Zhang · 艺人：Luna Chen",
    },
    coverImage:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80",
    year: "2025",
    featured: true,
    media: {
      type: "audio",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      title: { en: "Golden Hour — Full Track", zh: "黄金时刻 — 完整曲目" },
    },
  },
  {
    id: "pulse-arrangement",
    slug: "pulse-arrangement",
    category: "arrangements",
    title: { en: "Pulse — K-pop Arrangement", zh: "Pulse — K-pop编曲" },
    description: {
      en: "Full K-pop arrangement and production for a major label demo. Includes brass section, synth layers, and vocal stacking for a high-energy dance track.",
      zh: "为大型唱片公司试音所作的完整K-pop编曲与制作。包含铜管组、合成器层次与高能量舞曲的人声叠加。",
    },
    credits: {
      en: "Arranger & Producer: Enyuan Zhang · Label: Starlight Entertainment",
      zh: "编曲与制作：Enyuan Zhang · 唱片公司：Starlight Entertainment",
    },
    coverImage:
      "https://images.unsplash.com/photo-1571330735066-03aaa7299e08?w=1200&q=80",
    year: "2024",
    media: {
      type: "audio",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      title: { en: "Pulse — Demo", zh: "Pulse — 样带" },
    },
  },
  {
    id: "silent-waters",
    slug: "silent-waters",
    category: "film",
    title: { en: "Silent Waters", zh: "静水" },
    description: {
      en: "Minimalist score for an art-house documentary about coastal communities. Solo piano, ambient textures, and field recordings create an intimate soundscape.",
      zh: "艺术纪录片配乐，讲述沿海社区故事。独奏钢琴、氛围质感与现场录音营造亲密的声音景观。",
    },
    credits: {
      en: "Composer: Enshun Zhang · Documentary: Tide Films · Festival Selection: 2024",
      zh: "作曲：Enshun Zhang · 纪录片：Tide Films · 电影节入选：2024",
    },
    coverImage:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&q=80",
    year: "2024",
  },
  {
    id: "paper-cranes",
    slug: "paper-cranes",
    category: "animation",
    title: { en: "Paper Cranes", zh: "纸鹤" },
    description: {
      en: "Short animated film score blending traditional Chinese instruments with contemporary orchestral writing. Selected for international animation festivals.",
      zh: "短片动画配乐，融合中国传统乐器与当代管弦乐写作。入选国际动画电影节。",
    },
    credits: {
      en: "Composer: Enshun Zhang · Animation: Fold Studio · Duration: 12 min",
      zh: "作曲：Enshun Zhang · 动画：Fold Studio · 时长：12分钟",
    },
    coverImage:
      "https://images.unsplash.com/photo-1578637387939-43c525550086?w=1200&q=80",
    year: "2024",
  },
];

export const portfolioCategories = [
  "film",
  "animation",
  "theatre",
  "games",
  "songs",
  "arrangements",
] as const;

export function getFeaturedProjects(): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.featured);
}

export function getProjectsByCategory(
  category: string
): PortfolioProject[] {
  if (category === "all") return portfolioProjects;
  return portfolioProjects.filter((p) => p.category === category);
}

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}
