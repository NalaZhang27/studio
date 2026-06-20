"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { portfolioProjects, portfolioCategories } from "@/content/portfolio";
import type { PortfolioCategory, PortfolioProject, MediaPlatform, PortfolioTrack } from "@/types";
import { useTranslation } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { cn, t as translate } from "@/lib/utils";

function getPlatformLabel(platform: MediaPlatform) {
  switch (platform) {
    case "youtube":
      return "YouTube";
    case "bilibili":
      return "Bilibili";
    case "soundcloud":
      return "SoundCloud";
    case "netease":
      return "NetEase Cloud Music";
  }
}

function normalizeEmbedUrl(platform: MediaPlatform, url: string) {
  if (platform === "youtube") {
    const match = url.match(/(?:embed\/|youtu\.be\/|v=)([a-zA-Z0-9_-]+)/);
    const id = match?.[1] ?? url;
    return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
  }
  if (platform === "bilibili") {
    const match = url.match(/(?:video\/|BV)([a-zA-Z0-9]+)/i);
    return url.includes("player.html")
      ? url
      : `https://player.bilibili.com/player.html?bvid=${match?.[0] ?? url}&page=1&high_quality=1&as_wide=1`;
  }
  if (platform === "soundcloud") {
    return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23c8a96a&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false`;
  }
  if (platform === "netease") {
    return url.startsWith("http")
      ? url
      : `https://music.163.com/outchain/player?type=2&id=${url}&auto=0&height=66`;
  }
  return url;
}

function TrackCover({
  track,
  locale,
}: {
  track: Pick<PortfolioTrack, "title" | "coverImage">;
  locale: ReturnType<typeof useTranslation>["locale"];
}) {
  const coverImage =
    track.coverImage ??
    "https://res.cloudinary.com/dkualyhq9/image/upload/q_auto/f_auto/v1781470505/%E4%B8%93%E8%BE%91%E5%B0%81%E9%9D%A2_p1wipk.png";

  return (
    <div className="absolute left-[8%] top-1/2 z-20 aspect-square h-[66%] w-auto -translate-y-1/2 rounded-[3px]">
      <div className="absolute inset-0 translate-x-[7px] translate-y-[2px] rounded-[3px] bg-[linear-gradient(180deg,rgba(179,170,160,0.95)_0%,rgba(150,140,130,0.96)_55%,rgba(116,108,100,0.98)_100%)] shadow-[0_16px_28px_rgba(0,0,0,0.34)]" />
      <div className="absolute inset-0 translate-x-[3px] translate-y-[1px] rounded-[3px] bg-[linear-gradient(180deg,rgba(226,218,208,0.98)_0%,rgba(217,209,199,0.97)_52%,rgba(202,194,184,0.98)_100%)] shadow-[0_14px_24px_rgba(0,0,0,0.18)]" />
      <div className="absolute inset-0 rounded-[3px] border border-white/10 bg-[linear-gradient(180deg,rgba(241,236,228,0.98)_0%,rgba(229,221,211,0.95)_60%,rgba(214,207,198,0.96)_100%)] shadow-[0_14px_28px_rgba(0,0,0,0.42),inset_1px_0_0_rgba(255,255,255,0.32),inset_-1px_0_0_rgba(0,0,0,0.12)] overflow-hidden">
        <div className="absolute inset-[1px] rounded-[2px] border border-black/5" />
        <div className="absolute inset-0 rounded-[3px] bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,transparent_30%,transparent_72%,rgba(0,0,0,0.06)_100%)]" />
        <div className="absolute inset-0 rounded-[3px] opacity-30 [background:radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.24)_0%,transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.10)_0%,transparent_38%,rgba(0,0,0,0.04)_100%)]" />
        <div className="absolute inset-0 rounded-[3px] opacity-[0.12] [background:repeating-linear-gradient(0deg,transparent_0,transparent_10px,rgba(0,0,0,0.06)_11px,transparent_12px)]" />
        <div className="absolute right-0 top-[2px] h-[calc(100%-4px)] w-[8px] rounded-r-[2px] bg-[linear-gradient(90deg,rgba(188,178,165,0.45)_0%,rgba(120,111,102,0.18)_45%,rgba(255,255,255,0.08)_100%)] shadow-[inset_-1px_0_2px_rgba(255,255,255,0.18),inset_1px_0_2px_rgba(0,0,0,0.08)]" />
        <div className="absolute inset-0 overflow-hidden rounded-[3px]">
          <Image src={coverImage} alt={translate(track.title, locale)} fill className="object-cover opacity-100" sizes="240px" />
        </div>
        <div className="absolute inset-0 rounded-[3px] bg-[linear-gradient(90deg,rgba(0,0,0,0.06)_0%,transparent_18%,transparent_72%,rgba(255,255,255,0.08)_100%)]" />
      </div>
    </div>
  );
}

function AudioCard({ project, locale }: { project: PortfolioProject; locale: ReturnType<typeof useTranslation>["locale"] }) {
  const track: Pick<PortfolioTrack, "title" | "coverImage"> = project.tracks?.[0] ?? { title: project.title };

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-white/5 bg-aurora-card transition-all duration-300 hover:-translate-y-1 hover:border-aurora-gold/20"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0a]">
        <Image
          src={track.coverImage ?? project.coverImage}
          alt={translate(project.title, locale)}
          fill
          className="object-cover scale-110 blur-2xl opacity-35 transition-transform duration-700 group-hover:scale-115"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_22%,rgba(0,0,0,0.0)_46%),linear-gradient(180deg,rgba(10,10,10,0.18)_0%,rgba(0,0,0,0.15)_24%,rgba(0,0,0,0.55)_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:22px_22px]" />

        <div className="absolute left-[30%] top-1/2 z-0 aspect-square h-[70%] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_38%_30%,rgba(50,50,50,1)_0%,rgba(18,18,18,1)_46%,rgba(2,2,2,1)_100%)] shadow-[0_16px_30px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.03)]">
          <div className="absolute left-1/2 top-1/2 z-10 h-[18%] w-[18%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-white/10 bg-[#111111] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            <Image src={track.coverImage ?? project.coverImage} alt={translate(project.title, locale)} fill className="object-cover opacity-95" sizes="80px" />
          </div>
          <div className="absolute inset-[8%] rounded-full border border-white/[0.08] opacity-80" />
          <div className="absolute inset-[14%] rounded-full border border-white/[0.04] opacity-75" />
          <div className="absolute inset-[20%] rounded-full border border-white/[0.03] opacity-60" />
          <div className="absolute inset-[26%] rounded-full border border-white/[0.02] opacity-50" />
          <div className="absolute inset-0 rounded-full bg-[repeating-radial-gradient(circle_at_center,transparent_0_6px,rgba(255,255,255,0.02)_6px_7px)] opacity-40" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_68%_28%,rgba(255,255,255,0.13)_0%,rgba(255,255,255,0.05)_10%,transparent_26%)] opacity-90" />
          <div className="absolute inset-[1.5%] rounded-full ring-1 ring-white/[0.03]" />
        </div>

        <div className="absolute left-[8%] top-1/2 z-20 aspect-square h-[66%] w-auto -translate-y-1/2 rounded-[3px]">
          <div className="absolute inset-0 translate-x-[7px] translate-y-[2px] rounded-[3px] bg-[linear-gradient(180deg,rgba(179,170,160,0.95)_0%,rgba(150,140,130,0.96)_55%,rgba(116,108,100,0.98)_100%)] shadow-[0_16px_28px_rgba(0,0,0,0.34)]" />
          <div className="absolute inset-0 translate-x-[3px] translate-y-[1px] rounded-[3px] bg-[linear-gradient(180deg,rgba(226,218,208,0.98)_0%,rgba(217,209,199,0.97)_52%,rgba(202,194,184,0.98)_100%)] shadow-[0_14px_24px_rgba(0,0,0,0.18)]" />
          <div className="absolute inset-0 rounded-[3px] border border-white/10 bg-[linear-gradient(180deg,rgba(241,236,228,0.98)_0%,rgba(229,221,211,0.95)_60%,rgba(214,207,198,0.96)_100%)] shadow-[0_14px_28px_rgba(0,0,0,0.42),inset_1px_0_0_rgba(255,255,255,0.32),inset_-1px_0_0_rgba(0,0,0,0.12)] overflow-hidden">
            <div className="absolute inset-[1px] rounded-[2px] border border-black/5" />
            <div className="absolute inset-0 rounded-[3px] bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,transparent_30%,transparent_72%,rgba(0,0,0,0.06)_100%)]" />
            <div className="absolute inset-0 rounded-[3px] opacity-30 [background:radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.24)_0%,transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.10)_0%,transparent_38%,rgba(0,0,0,0.04)_100%)]" />
            <div className="absolute inset-0 rounded-[3px] opacity-[0.12] [background:repeating-linear-gradient(0deg,transparent_0,transparent_10px,rgba(0,0,0,0.06)_11px,transparent_12px)]" />
            <div className="absolute right-0 top-[2px] h-[calc(100%-4px)] w-[8px] rounded-r-[2px] bg-[linear-gradient(90deg,rgba(188,178,165,0.45)_0%,rgba(120,111,102,0.18)_45%,rgba(255,255,255,0.08)_100%)] shadow-[inset_-1px_0_2px_rgba(255,255,255,0.18),inset_1px_0_2px_rgba(0,0,0,0.08)]" />
            <div className="absolute inset-0 overflow-hidden rounded-[3px]">
              <Image src={track.coverImage ?? project.coverImage} alt={translate(project.title, locale)} fill className="object-cover opacity-100" sizes="240px" />
            </div>
            <div className="absolute inset-0 rounded-[3px] bg-[linear-gradient(90deg,rgba(0,0,0,0.06)_0%,transparent_18%,transparent_72%,rgba(255,255,255,0.08)_100%)]" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-4 text-sm text-white/80">
          <span className="text-white/70">Songs</span>
          <span className="text-white/60">{project.year}</span>
        </div>
        <h3 className="mt-3 font-display text-2xl font-light text-white">
          {translate(project.title, locale)}
        </h3>
        <div className="mt-4 flex items-center justify-between gap-4 text-sm text-white/80">
          <span>{project.subtitle ? translate(project.subtitle, locale) : ""}</span>
          <span className="inline-flex items-center gap-1 text-aurora-gold">
            View details <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function PortfolioPage() {
  const { t, locale } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const normalizedCategory = activeCategory.trim().toLowerCase();

  const categories = useMemo(
    () => [
      { key: "all", label: t.common.all },
      ...portfolioCategories.map((category) => ({
        key: category,
        label: t.portfolio.categories[category as PortfolioCategory],
      })),
    ],
    [t]
  );

  const filtered = useMemo(() => {
    if (normalizedCategory === "all") {
      return portfolioProjects;
    }

    return portfolioProjects.filter(
      (project) => project.category.toLowerCase() === normalizedCategory
    );
  }, [normalizedCategory]);

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
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Portfolio categories">
              {categories.map((category) => (
                <button
                  key={category.key}
                  role="tab"
                  aria-selected={activeCategory === category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200",
                    activeCategory === category.key
                      ? "bg-aurora-gold text-aurora-dark"
                      : "border border-white/10 text-aurora-muted hover:border-white/20 hover:text-white"
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          {filtered.length === 0 ? (
            <p className="py-20 text-center text-aurora-muted">{t.portfolio.empty}</p>
          ) : (
            <StaggerContainer
              key={normalizedCategory}
              className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            >
              {filtered.map((project) => (
                <StaggerItem key={project.id}>
                  {project.category === "songs" ? (
                    <AudioCard project={project} locale={locale} />
                  ) : (
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="group block overflow-hidden rounded-2xl border border-white/5 bg-aurora-card transition-all duration-300 hover:-translate-y-1 hover:border-aurora-gold/20"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={project.coverImage}
                          alt={translate(project.title, locale)}
                          fill
                          unoptimized
                          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-100"
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-aurora-dark/80 via-aurora-dark/10 to-transparent opacity-90" />
                        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                          <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-wider text-white/90 backdrop-blur-sm">
                            {t.portfolio.categories[project.category]}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                          <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-aurora-gold/90">
                              {project.year}
                            </p>
                            <h3 className="mt-1 font-display text-2xl font-light text-white">
                              {translate(project.title, locale)}
                            </h3>
                          </div>
                          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white backdrop-blur-sm">
                            <PlayCircle size={18} />
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center justify-between gap-4 text-sm text-white/80">
                          <span>
                            {project.subtitle ? translate(project.subtitle, locale) : ""}
                          </span>
                          <span className="inline-flex items-center gap-1 text-aurora-gold">
                            View details <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  )}
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </Container>
      </section>
    </>
  );
}
