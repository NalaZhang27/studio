import type { TeamMember } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    id: "enshun-zhang",
    name: "Enshun Zhang",
    roles: {
      en: [
        "Film Composer",
        "Musical Theatre Composer",
        "Orchestrator",
        "Music Researcher",
      ],
      zh: ["电影作曲家", "音乐剧作曲家", "管弦乐编配师", "音乐研究员"],
    },
    bio: {
      en: "Enshun brings a deep understanding of cinematic narrative and orchestral writing to every project. With expertise spanning film scoring, musical theatre composition, and scholarly music research, he crafts scores that are emotionally resonant and structurally sophisticated.",
      zh: "Enshun 为每个项目带来对电影叙事与管弦乐写作的深刻理解。他在电影配乐、音乐剧作曲与音乐学术研究方面的专长，使他能够创作情感共鸣且结构精妙的配乐。",
    },
  },
  {
    id: "enyuan-zhang",
    name: "Enyuan Zhang",
    roles: {
      en: [
        "Modern Arranger",
        "K-pop Producer",
        "C-pop Producer",
        "Vocal Producer",
      ],
      zh: ["现代编曲师", "K-pop制作人", "C-pop制作人", "人声制作人"],
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
