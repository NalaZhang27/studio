export type Locale = "en" | "zh";

export type LocalizedString = Record<Locale, string>;

export type LocalizedStringArray = Record<Locale, string[]>;

export type PortfolioCategory =
  | "film"
  | "animation"
  | "theatre"
  | "games"
  | "songs"
  | "arrangements";

export type ProjectStatus = "completed" | "ongoing" | "upcoming";

export interface TeamMember {
  id: string;
  name: string;
  roles: LocalizedStringArray;
  bio: LocalizedString;
  image: string;
  /** Future: link to individual composer profile in collective */
  profileSlug?: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  category: PortfolioCategory;
  title: LocalizedString;
  description: LocalizedString;
  credits: LocalizedString;
  coverImage: string;
  year: string;
  featured?: boolean;
  media?: {
    type: "youtube" | "audio";
    url: string;
    title?: LocalizedString;
  };
  gallery?: string[];
}

export interface Service {
  id: string;
  icon: string;
  title: LocalizedString;
  description: LocalizedString;
  deliverables: LocalizedStringArray;
}

export interface StudioProject {
  id: string;
  status: ProjectStatus;
  title: LocalizedString;
  client: LocalizedString;
  description: LocalizedString;
  timeline: LocalizedString;
  coverImage: string;
}

/** Future marketplace / collective expansion hooks */
export interface FutureComposerSlot {
  id: string;
  available: boolean;
  specialties: string[];
}

export interface CollectiveConfig {
  enabled: boolean;
  composerSlots: FutureComposerSlot[];
}
