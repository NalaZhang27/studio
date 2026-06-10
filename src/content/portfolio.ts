import type { PortfolioCategory, PortfolioProject } from "@/types";

/**
 * Portfolio content file.
 *
 * Add, edit, or remove projects here without touching React components.
 *
 * Each project supports:
 * - English + Chinese title/subtitle/description
 * - category, status, year
 * - composer + collaborators
 * - featured flag
 * - multiple media embeds from supported platforms
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "ember-frame",
    slug: "ember-frame",
    category: "film",
    status: "released",
    title: { en: "Ember Frame", zh: "余烬之框" },
    subtitle: { en: "Original score for a nocturnal drama", zh: "夜色剧情片原创配乐" },
    description: {
      en: "A cinematic orchestral score that balances intimacy and scale, designed for a coming-of-age film with a reflective emotional arc.",
      zh: "一部兼具亲密与宏大感的电影感管弦乐配乐，为一部成长题材影片构建内省的情绪弧线。",
    },
    composer: {
      name: "Anshun Zhang",
      role: { en: "Primary Composer", zh: "主作曲" },
    },
    collaborators: [
      { name: "Liu Mei", role: { en: "Orchestration", zh: "配器" } },
    ],
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80",
    featured: true,
    media: [
      { platform: "youtube", url: "https://www.youtube.com/embed/LXb3EKWsInQ" },
      { platform: "soundcloud", url: "https://soundcloud.com/forss/flickermood" },
    ],
  },
  {
    id: "moon-thread",
    slug: "moon-thread",
    category: "arrangements",
    status: "released",
    title: { en: "Moon Thread", zh: "月线" },
    subtitle: { en: "Ensemble suite for singers and players", zh: "为歌者与演奏者而作的合奏组曲" },
    description: {
      en: "A stage-forward ensemble project combining lyrical melodies, layered writing, and dramatic transitions for live performance.",
      zh: "一部面向舞台的合奏项目，将抒情旋律、层次化写作与戏剧化过门融合于现场演出。",
    },
    composer: {
      name: "Anshun Zhang",
      role: { en: "Composer / Lyric Support", zh: "作曲 / 作词支持" },
    },
    collaborators: [
      { name: "Chen Yao", role: { en: "Libretto", zh: "剧本" } },
    ],
    year: "2024",
    coverImage: "https://images.unsplash.com/photo-1507676180833-0f770a315991?w=1200&q=80",
    featured: true,
    media: [
      { platform: "bilibili", url: "https://www.bilibili.com/video/BV1GJ411x7h7" },
    ],
  },
  {
    id: "pulse-atelier",
    slug: "pulse-atelier",
    category: "arrangements",
    status: "released",
    title: { en: "Pulse Atelier", zh: "脉冲工坊" },
    subtitle: { en: "Contemporary arrangement for cross-cultural artists", zh: "跨文化艺人当代编曲" },
    description: {
      en: "Modern arrangement and production with a clean pop architecture, tailored for a collaborative release across multiple markets.",
      zh: "以清晰流行结构为核心的现代编曲与制作，面向多市场协作发行。",
    },
    composer: {
      name: "Anshun Zhang",
      role: { en: "Arranger / Producer", zh: "编曲 / 制作" },
    },
    collaborators: [
      { name: "Future Collaborators", role: { en: "Vocals / Additional Production", zh: "演唱 / 额外制作" } },
    ],
    year: "2024",
    coverImage: "https://images.unsplash.com/photo-1571330735066-03aaa7299e08?w=1200&q=80",
    media: [
      { platform: "netease", url: "https://music.163.com/#/song?id=186016" },
    ],
  },
  {
    id: "skyline-bloom",
    slug: "skyline-bloom",
    category: "animation",
    status: "in-progress",
    title: { en: "Skyline Bloom", zh: "天际绽放" },
    subtitle: { en: "Animation score in progress", zh: "制作中的动画配乐" },
    description: {
      en: "A bright, character-driven animation score with playful motifs, orchestral color, and energetic transitions.",
      zh: "明亮且由角色驱动的动画配乐，结合俏皮动机、管弦色彩与有活力的过渡段落。",
    },
    composer: {
      name: "Anshun Zhang",
      role: { en: "Lead Composer", zh: "首席作曲" },
    },
    collaborators: [
      { name: "Cousin Name", role: { en: "Additional Themes", zh: "额外主题" } },
    ],
    year: "2026",
    coverImage: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1200&q=80",
    featured: true,
  },
  {
    id: "neon-arc",
    slug: "neon-arc",
    category: "songs",
    status: "upcoming",
    title: { en: "Neon Arc", zh: "霓虹弧线" },
    subtitle: { en: "Contemporary production for a new single", zh: "新单曲当代制作" },
    description: {
      en: "A forward-looking single production concept built for an international audience with sleek sonics and vivid textures.",
      zh: "面向国际听众的前瞻性单曲制作方案，拥有利落音色与鲜明质感。",
    },
    composer: {
      name: "Anshun Zhang",
      role: { en: "Producer", zh: "制作人" },
    },
    collaborators: [],
    year: "2026",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80",
    media: [
      { platform: "youtube", url: "https://www.youtube.com/embed/jfKfPfyJRdk" },
    ],
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  "film",
  "animation",
  "theatre",
  "games",
  "songs",
  "arrangements",
];

export const portfolioStatus = ["released", "in-progress", "upcoming"] as const;

export function getFeaturedProjects(): PortfolioProject[] {
  return portfolioProjects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: string): PortfolioProject[] {
  if (category === "all") return portfolioProjects;
  return portfolioProjects.filter((project) => project.category === category);
}

export function getProjectsByCreator(name: string): PortfolioProject[] {
  if (name === "all") return portfolioProjects;
  return portfolioProjects.filter(
    (project) => project.composer.name === name || project.collaborators.some((c) => c.name === name)
  );
}
