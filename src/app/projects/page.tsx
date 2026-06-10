import type { Metadata } from "next";
import { ProjectsPage } from "@/components/projects/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "View completed projects, ongoing productions, and upcoming collaborations at Aurora Sound Studio.",
};

export default function Projects() {
  return <ProjectsPage />;
}
