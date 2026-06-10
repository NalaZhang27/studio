import type { StudioProject } from "@/types";

export const studioProjects: StudioProject[] = [
  {
    id: "echoes-of-dawn",
    status: "completed",
    title: { en: "Echoes of Dawn", zh: "黎明回响" },
    client: { en: "Dawnlight Films", zh: "黎明影业" },
    description: {
      en: "Full orchestral film score for independent drama. Delivered 45 minutes of original music with live string recordings.",
      zh: "独立剧情片完整管弦乐配乐。交付45分钟原创音乐及现场弦乐录音。",
    },
    timeline: { en: "Completed · 2025", zh: "已完成 · 2025" },
    coverImage:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
  },
  {
    id: "midnight-garden",
    status: "completed",
    title: { en: "Midnight Garden", zh: "午夜花园" },
    client: { en: "Shanghai Theatre Group", zh: "上海剧团" },
    description: {
      en: "Complete musical theatre score with 14 original songs and full orchestration for pit band.",
      zh: "完整音乐剧配乐，包含14首原创歌曲及乐队完整管弦乐编配。",
    },
    timeline: { en: "Completed · 2024", zh: "已完成 · 2024" },
    coverImage:
      "https://images.unsplash.com/photo-1507676180833-0f770a315991?w=800&q=80",
  },
  {
    id: "golden-hour",
    status: "completed",
    title: { en: "Golden Hour", zh: "黄金时刻" },
    client: { en: "Starlight Entertainment", zh: "Starlight Entertainment" },
    description: {
      en: "C-pop single production and arrangement. Released across major streaming platforms.",
      zh: "C-pop单曲制作与编曲。已在主流流媒体平台发行。",
    },
    timeline: { en: "Completed · 2025", zh: "已完成 · 2025" },
    coverImage:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
  },
  {
    id: "starfall-chronicles",
    status: "ongoing",
    title: { en: "Starfall Chronicles S2", zh: "星落编年史 第二季" },
    client: { en: "Nebula Works Animation", zh: "Nebula Works 动画" },
    description: {
      en: "Season 2 animation scoring in progress. 12 episodes with expanded orchestral palette and new character themes.",
      zh: "第二季动画配乐制作中。12集，扩展管弦乐调色板与新角色主题。",
    },
    timeline: { en: "In Production · Q3 2025", zh: "制作中 · 2025 Q3" },
    coverImage:
      "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80",
  },
  {
    id: "neon-horizon",
    status: "ongoing",
    title: { en: "Neon Horizon", zh: "霓虹地平线" },
    client: { en: "Pixel Forge Games", zh: "Pixel Forge Games" },
    description: {
      en: "Adaptive game soundtrack development. Building dynamic music system with 80+ interactive cues.",
      zh: "自适应游戏原声开发。构建包含80+交互提示的动态音乐系统。",
    },
    timeline: { en: "In Production · Q4 2025", zh: "制作中 · 2025 Q4" },
    coverImage:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
  },
  {
    id: "untitled-feature",
    status: "upcoming",
    title: { en: "Untitled Feature Film", zh: "未定名故事片" },
    client: { en: "Confidential", zh: "保密" },
    description: {
      en: "Upcoming collaboration on a major feature film score. Pre-production and theme development beginning soon.",
      zh: "即将开始的大型故事片配乐合作。前期制作与主题开发即将启动。",
    },
    timeline: { en: "Starting · 2026", zh: "即将开始 · 2026" },
    coverImage:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80",
  },
  {
    id: "global-pop-collab",
    status: "upcoming",
    title: { en: "Global Pop Collaboration", zh: "全球流行合作项目" },
    client: { en: "International Label", zh: "国际唱片公司" },
    description: {
      en: "Multi-track K-pop/C-pop production project. Seeking vocalists and additional arrangers for expansion.",
      zh: "多曲目K-pop/C-pop制作项目。寻求歌手与额外编曲师加入扩展。",
    },
    timeline: { en: "Open · 2025–2026", zh: "开放 · 2025–2026" },
    coverImage:
      "https://images.unsplash.com/photo-1571330735066-03aaa7299e08?w=800&q=80",
  },
];

export function getProjectsByStatus(status: StudioProject["status"]) {
  return studioProjects.filter((p) => p.status === status);
}

/** Future marketplace: projects open for composer collaboration */
export const collaborationOpportunities = {
  enabled: false,
  openings: [] as { projectId: string; role: string; requirements: string[] }[],
};
