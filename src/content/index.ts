/**
 * Content layer index — single entry point for all site content.
 *
 * Future expansion paths:
 * - collectiveConfig: enable multi-composer collective mode
 * - collaborationOpportunities: marketplace for composer collaborations
 * - profileSlug on TeamMember: individual composer profile pages
 */

export { teamMembers, collectiveConfig } from "./team";
export {
  portfolioProjects,
  portfolioCategories,
  getFeaturedProjects,
  getProjectsByCategory,
  getProjectBySlug,
} from "./portfolio";
export { services } from "./services";
export {
  studioProjects,
  getProjectsByStatus,
  collaborationOpportunities,
} from "./projects";
export { getTranslations, translations } from "./i18n";
