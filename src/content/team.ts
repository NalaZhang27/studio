import type { TeamMember } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    id: "enshun-zhang",
    name: "Nala Zhang",
    roles: {
      en: ["Film Composer", "Orchestrator"],
      zh: ["电影作曲家", "管弦乐编配师"],
    },
    bio: {
      en: "Creating music for film, animation, and original projects.\nWith over five years of experience in film scoring and music production.",
      zh: "为电影、动画及原创项目创作音乐。\n拥有五年以上电影配乐与音乐制作经验。", 
    },
  },
  {
    id: "enyuan-zhang",
    name: "Enyuan Zhang",
    roles: {
      en: ["Modern Arranger", "K-pop / C-pop Producer"],
      zh: ["现代编曲师", "K-pop / C-pop制作人"],
    },
    bio: {
      en: "Enyuan specializes in contemporary arrangement and pop production, bringing chart-ready polish to every track. His work spans K-pop, C-pop, and vocal production — delivering modern, genre-fluid soundscapes that connect with global audiences.",
      zh: "Enyuan 专注于当代编曲与流行音乐制作，为每一首作品带来榜单级的精致。他的工作涵盖K-pop、C-pop与人声制作——交付与现代全球受众共鸣的跨流派声音景观。",
    },
  },
];

/** Future: expand to multi-composer collective */
export const collectiveConfig = {
  enabled: false,
  composerSlots: [
    { id: "slot-1", available: true, specialties: ["film", "orchestration"] },
    { id: "slot-2", available: true, specialties: ["pop", "vocal"] },
  ],
};
