"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/content/portfolio";
import { useTranslation } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { t as translate } from "@/lib/utils";

export function FeaturedProjects() {
  const { t, locale } = useTranslation();
  const projects = getFeaturedProjects();

  return (
    <section className="py-24 lg:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            label={t.home.featured.label}
            title={t.home.featured.title}
          />
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="group relative block overflow-hidden rounded-2xl bg-aurora-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={translate(project.title, locale)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-aurora-dark via-aurora-dark/20 to-transparent" />
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={18} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-aurora-gold">
                    {t.portfolio.categories[project.category]}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-light text-white">
                    {translate(project.title, locale)}
                  </h3>
                  <p className="mt-1 text-sm text-aurora-muted">
                    {project.year}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-12 text-center">
          <Button href="/portfolio" variant="outline">
            {t.common.viewAll}
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
