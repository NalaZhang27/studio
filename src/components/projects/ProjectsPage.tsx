"use client";

import Image from "next/image";
import { getProjectsByStatus } from "@/content/projects";
import type { ProjectStatus } from "@/types";
import { useTranslation } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { cn, t as translate } from "@/lib/utils";

const statusStyles: Record<ProjectStatus, string> = {
  completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  ongoing: "bg-aurora-gold/10 text-aurora-gold border-aurora-gold/20",
  upcoming: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

function ProjectSection({
  status,
  title,
}: {
  status: ProjectStatus;
  title: string;
}) {
  const { t, locale } = useTranslation();
  const projects = getProjectsByStatus(status);

  if (projects.length === 0) return null;

  return (
    <div className="mb-16 last:mb-0">
      <FadeIn>
        <h2 className="mb-8 font-display text-2xl font-light text-white lg:text-3xl">
          {title}
        </h2>
      </FadeIn>
      <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <StaggerItem key={project.id}>
            <article className="group overflow-hidden rounded-2xl border border-white/5 bg-aurora-card transition-all hover:border-white/10">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={translate(project.title, locale)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute left-4 top-4">
                  <span
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs font-medium",
                      statusStyles[project.status]
                    )}
                  >
                    {t.projects.status[project.status]}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-aurora-muted">
                  {translate(project.client, locale)}
                </p>
                <h3 className="mt-1 font-display text-xl font-light text-white">
                  {translate(project.title, locale)}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-aurora-muted">
                  {translate(project.description, locale)}
                </p>
                <p className="mt-4 text-xs font-medium text-aurora-gold">
                  {translate(project.timeline, locale)}
                </p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

export function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <Container>
          <FadeIn>
            <SectionHeading
              label={t.projects.hero.label}
              title={t.projects.hero.title}
              subtitle={t.projects.hero.subtitle}
            />
          </FadeIn>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <ProjectSection
            status="completed"
            title={t.projects.sections.completed}
          />
          <ProjectSection
            status="ongoing"
            title={t.projects.sections.ongoing}
          />
          <ProjectSection
            status="upcoming"
            title={t.projects.sections.upcoming}
          />
        </Container>
      </section>
    </>
  );
}
