export type Locale = "en" | "zh";

export type LocalizedString = Record<Locale, string>;
export type LocalizedStringArray = Record<Locale, string[]>;

export type PortfolioCategory =
  | "film"
  | "animation"
  | "songs"
  | "arrangements";

export type ProjectStatus = "released" | "in-progress" | "upcoming";

export type MediaPlatform =
  | "youtube"
  | "bilibili"
  | "soundcloud"
  | "netease"
  | "audio";

export interface ProjectMedia {
  type?: "audio" | "video" | "youtube";
  platform: MediaPlatform;
  url: string;
  title?: LocalizedString;
}

export interface ProjectContributor {
  name: string;
  role: LocalizedString;
}

export interface PortfolioTrack {
  title: LocalizedString;
  media: ProjectMedia;
  coverImage?: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  category: PortfolioCategory;
  title: LocalizedString;
  credits: LocalizedString;
  year: string;
  coverImage: string;
  featured?: boolean;
  media?: ProjectMedia;
  tracks?: PortfolioTrack[];
  description?: LocalizedString;
  subtitle?: LocalizedString;
  status?: ProjectStatus;
  composer?: ProjectContributor;
  collaborators?: ProjectContributor[];
}

export interface TeamMember {
  id: string;
  name: string;
  roles: LocalizedStringArray;
  bio: LocalizedString;
  image?: string;
  profileSlug?: string;
}

export interface Service {
  id: string;
  icon: string;
  title: LocalizedString;
  description: LocalizedString;
  deliverables: LocalizedStringArray;
}
