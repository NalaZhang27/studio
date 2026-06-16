import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "film-scoring",
    icon: "film",
    title: { en: "Film Scoring", zh: "电影配乐" },
    description: {
      en: "Original orchestral and hybrid scores tailored to your film's emotional arc. From intimate dramas to epic adventures, we compose music that elevates every frame.",
      zh: "为您的电影情感弧线量身定制的原创管弦乐与混合配乐。从 intimate 剧情到史诗冒险，我们创作提升每一帧画面的音乐。",
    },
    deliverables: {
      en: [
        "Original score composition",
        "Orchestration & arrangement",
        "Mock-ups & final recordings",
        "Stems & delivery formats",
      ],
      zh: [
        "原创配乐创作",
        "管弦乐编配与编曲",
        "样带与最终录音",
        "分轨与交付格式",
      ],
    },
  },
  {
    id: "animation-scoring",
    icon: "sparkles",
    title: { en: "Animation Scoring", zh: "动画配乐" },
    description: {
      en: "Whimsical, dynamic scores for animated features and series. Character themes, leitmotifs, and adaptive music systems that bring animated worlds to life.",
      zh: "为动画长片与系列打造的 whimsical、动态配乐。角色主题、主导动机与自适应音乐系统，让动画世界栩栩如生。",
    },
    deliverables: {
      en: [
        "Theme & leitmotif development",
        "Episode scoring",
        "Adaptive music design",
        "Sound palette creation",
      ],
      zh: [
        "主题与主导动机开发",
        "分集配乐",
        "自适应音乐设计",
        "声音调色板创建",
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
