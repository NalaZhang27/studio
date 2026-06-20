import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "film-animation-scoring",
    icon: "film",
    title: { en: "Film & Animation Scoring", zh: "电影与动画配乐" },
    description: {
      en: "Original music for films, animation, shorts, and visual storytelling. Cinematic orchestration and emotional storytelling through music.",
      zh: "为电影、动画、短片与视觉叙事创作原创音乐。通过电影感的管弦编配与富有情感的音乐讲述故事。",
    },
    deliverables: {
      en: [
        "Original score composition",
        "Cinematic orchestration",
        "Theme & leitmotif development",
        "Stems & delivery formats",
      ],
      zh: [
        "原创配乐创作",
        "电影感管弦编配",
        "主题与主导动机开发",
        "分轨与交付格式",
      ],
    },
  },
  {
    id: "image-song-character-themes",
    icon: "sparkles",
    title: { en: "Image Song & Character Themes", zh: "印象曲 / 角色主题曲制作" },
    description: {
      en: "Original songs for characters, stories, original IPs, novels, and creative projects. Theme songs for OCs, character relationships, and worldbuilding, blending cinematic storytelling with contemporary styles.",
      zh: "为角色、故事、原创IP、小说与创意项目创作原创歌曲。为OC、角色关系与世界观打造主题曲，将电影叙事与当代风格融合。",
    },
    deliverables: {
      en: [
        "Theme song composition",
        "Character motif development",
        "Lyrics & vocal demo support",
        "Contemporary production",
      ],
      zh: [
        "主题曲创作",
        "角色动机开发",
        "歌词与人声样带支持",
        "当代风格制作",
      ],
    },
  },
  {
    id: "game-music",
    icon: "gamepad",
    title: { en: "Game Music", zh: "游戏音乐" },
    description: {
      en: "Interactive and adaptive game soundtracks designed for player immersion. Dynamic layers, combat cues, and ambient systems for seamless gameplay integration.",
      zh: "为玩家沉浸感设计的交互式与自适应游戏原声。动态层次、战斗提示与氛围系统，无缝融入游戏体验。",
    },
    deliverables: {
      en: [
        "Adaptive music systems",
        "Combat & exploration cues",
        "Menu & UI themes",
        "Engine-ready audio assets",
      ],
      zh: [
        "自适应音乐系统",
        "战斗与探索提示",
        "菜单与UI主题",
        "引擎就绪的音频资产",
      ],
    },
  },
  {
    id: "musical-theatre",
    icon: "theatre",
    title: { en: "Musical Theatre Composition", zh: "音乐剧作曲" },
    description: {
      en: "Full musical theatre scores including overtures, character songs, ensemble numbers, and underscore. Story-driven composition for the stage.",
      zh: "完整的音乐剧配乐，包括序曲、角色歌曲、合唱段落与幕间音乐。为舞台打造的故事驱动型作曲。",
    },
    deliverables: {
      en: [
        "Full score & piano-vocal",
        "Orchestration for pit band",
        "Demo recordings",
        "Rehearsal materials",
      ],
      zh: [
        "完整总谱与钢琴人声谱",
        "乐队管弦乐编配",
        "样带录音",
        "排练材料",
      ],
    },
  },
  {
    id: "song-arrangement",
    icon: "music",
    title: { en: "Song Arrangement", zh: "歌曲编曲" },
    description: {
      en: "Contemporary arrangements for pop, K-pop, C-pop, and crossover genres. From demo to release-ready production with chart-level polish.",
      zh: "流行、K-pop、C-pop与跨界流派的当代编曲。从样带到发行级制作，呈现榜单级精致。",
    },
    deliverables: {
      en: [
        "Full arrangement",
        "Instrumental production",
        "Mix preparation",
        "Alternative versions",
      ],
      zh: ["完整编曲", "器乐制作", "混音准备", "备选版本"],
    },
  },
  {
    id: "orchestration",
    icon: "layers",
    title: { en: "Orchestration", zh: "管弦乐编配" },
    description: {
      en: "Professional orchestration services transforming piano sketches or MIDI demos into fully realized orchestral scores for recording and performance.",
      zh: "专业管弦乐编配服务，将钢琴草稿或MIDI样带转化为完整的管弦乐总谱，用于演出和后期制作。",
    },
    deliverables: {
      en: [
        "Full orchestral score",
        "Part extraction",
        "Conductor materials",
        "Performance-ready files",
      ],
      zh: ["完整管弦乐总谱", "分谱提取", "指挥材料", "演出就绪文件"],
    },
  },
];
