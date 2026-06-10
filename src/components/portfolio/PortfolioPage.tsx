"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { PortfolioProject, PortfolioCategory } from "@/types";
import { portfolioProjects, portfolioCategories } from "@/content/portfolio";
import { useTranslation } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { YouTubeEmbed } from "@/components/media/YouTubeEmbed";
import { AudioPlayer } from "@/components/media/AudioPlayer";
import { cn, t as translate } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function PortfolioPage() {
  const { t, locale } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  const filtered =
    activeCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  const categories = [
    { key: "all", label: t.common.all },
    ...portfolioCategories.map((cat) => ({
      key: cat,
      label: t.portfolio.categories[cat as PortfolioCategory],
    })),
  ];

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <Container>
          <FadeIn>
            <SectionHeading
              label={t.portfolio.hero.label}
              title={t.portfolio.hero.title}
              subtitle={t.portfolio.hero.subtitle}
            />
          </FadeIn>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <FadeIn>
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Portfolio categories"
            >
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  role="tab"
                  aria-selected={activeCategory === cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200",
                    activeCategory === cat.key
                      ? "bg-aurora-gold text-aurora-dark"
                      : "border border-white/10 text-aurora-muted hover:border-white/20 hover:text-white"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          {filtered.length === 0 ? (
            <p className="py-20 text-center text-aurora-muted">
              {t.portfolio.empty}
            </p>
          ) : (
            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <StaggerItem key={project.id}>
                  <article
                    id={project.slug}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-aurora-card transition-all duration-300 hover:border-aurora-gold/20"
                    onClick={() => setSelectedProject(project)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && setSelectedProject(project)
                    }
                    tabIndex={0}
                    role="button"
                    aria-label={translate(project.title, locale)}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.coverImage}
                        alt={translate(project.title, locale)}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-aurora-dark/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-medium uppercase tracking-wider text-aurora-gold">
                        {t.portfolio.categories[project.category]}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-light text-white">
                        {translate(project.title, locale)}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-aurora-muted">
                        {translate(project.description, locale)}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </Container>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-4 backdrop-blur-sm sm:items-center"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={translate(selectedProject.title, locale)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 25 }}
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-aurora-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <Image
                  src={selectedProject.coverImage}
                  alt={translate(selectedProject.title, locale)}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                  aria-label={t.common.close}
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-xs font-medium uppercase tracking-wider text-aurora-gold">
                  {t.portfolio.categories[selectedProject.category]} ·{" "}
                  {selectedProject.year}
                </p>
                <h2 className="mt-2 font-display text-2xl font-light text-white lg:text-3xl">
                  {translate(selectedProject.title, locale)}
                </h2>
                <p className="mt-4 leading-relaxed text-aurora-muted">
                  {translate(selectedProject.description, locale)}
                </p>
                <div className="mt-4 rounded-lg border border-white/5 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-aurora-gold">
                    {t.common.credits}
                  </p>
                  <p className="mt-1 text-sm text-aurora-muted">
                    {translate(selectedProject.credits, locale)}
                  </p>
                </div>
                {selectedProject.media && (
                  <div className="mt-6">
                    {selectedProject.media.type === "youtube" ? (
                      <YouTubeEmbed
                        url={selectedProject.media.url}
                        title={
                          selectedProject.media.title
                            ? translate(selectedProject.media.title, locale)
                            : translate(selectedProject.title, locale)
                        }
                      />
                    ) : (
                      <AudioPlayer
                        src={selectedProject.media.url}
                        title={
                          selectedProject.media.title
                            ? translate(selectedProject.media.title, locale)
                            : translate(selectedProject.title, locale)
                        }
                      />
                    )}
                  </div>
                )}
                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {selectedProject.gallery.map((img, i) => (
                      <div
                        key={i}
                        className="relative aspect-video overflow-hidden rounded-lg"
                      >
                        <Image
                          src={img}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
