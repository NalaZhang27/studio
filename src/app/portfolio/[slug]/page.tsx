import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, portfolioProjects } from "@/content/portfolio";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import type { MediaPlatform } from "@/types";

function getEmbedUrl(platform: MediaPlatform, url: string) {
  if (platform === "youtube") {
    if (url.includes("/embed/")) return url;
    const match = url.match(/(?:youtu\.be\/|v=|embed\/)([a-zA-Z0-9_-]+)/);
    const videoId = match?.[1] ?? url;
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
  }
  if (platform === "bilibili") {
    return url;
  }
  if (platform === "soundcloud") {
    return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23c8a96a&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false`;
  }
  return url;
}

const NETEASE_IFRAME_HEIGHT = "h-[96px]";

function getNeteasePlayerUrl(url: string) {
  const match = url.match(/\?(\d+)/);
  const id = match?.[1];
  if (!id) return url;
  return `https://music.163.com/outchain/player?type=2&id=${id}&auto=0&height=66`;
}

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title.en,
    description: project.description?.en,
  };
}

export default async function PortfolioDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <section className="relative isolate pt-32 pb-24 lg:pt-40 lg:pb-32">
      <Container>
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.25em] text-aurora-gold">{project.category} · {project.year}</p>
          <h1 className="mt-3 font-display text-4xl font-light text-white lg:text-6xl">{project.title.en}</h1>
          {project.description ? (
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-aurora-muted">{project.description.en}</p>
          ) : null}
        </FadeIn>
        <div className="mt-10 space-y-6">
          {project.tracks?.length ? (
            <div className="space-y-4 rounded-2xl border border-white/5 bg-aurora-card p-6">
              <p className="text-xs uppercase tracking-wider text-aurora-gold">Tracks</p>
              <div className="space-y-6">
                {project.tracks.map((track, index) => (
                  <div key={track.title.en} className="space-y-3">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="text-sm uppercase tracking-[0.22em] text-aurora-muted">
                        Track {index + 1}
                      </p>
                      <h2 className="font-display text-2xl font-light text-white">{track.title.en}</h2>
                    </div>
                    <div
                      className={
                        track.media.platform === "netease"
                          ? "overflow-hidden rounded-2xl border border-white/5 bg-[#f5f1e8] p-2 shadow-2xl shadow-black/20"
                          : "overflow-hidden rounded-2xl border border-white/5 bg-black/40"
                      }
                    >
                      <iframe
                        title={track.title.en}
                        src={track.media.platform === "netease" ? getNeteasePlayerUrl(track.media.url) : getEmbedUrl(track.media.platform, track.media.url)}
                        className={
                          track.media.platform === "netease"
                            ? `${NETEASE_IFRAME_HEIGHT} block w-full min-w-[340px] border-0 bg-transparent`
                            : "aspect-video w-full border-0"
                        }
                        loading="lazy"
                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {project.media && !project.tracks?.length ? (
            <div className="space-y-6">
              <div
                className={
                  project.media.platform === "netease"
                    ? "overflow-hidden rounded-2xl border border-white/5 bg-[#f5f1e8] p-2 shadow-2xl shadow-black/20"
                    : "overflow-hidden rounded-2xl border border-white/5 bg-aurora-card shadow-2xl shadow-black/20"
                }
              >
                <div className={project.media.platform === "netease" ? "overflow-x-auto" : "relative w-full pb-[56.25%]"}>
                  <iframe
                    title={project.media.title?.en ?? project.title.en}
                    src={
                      project.media.platform === "netease"
                        ? getNeteasePlayerUrl(project.media.url)
                        : getEmbedUrl(project.media.platform, project.media.url)
                    }
                    className={project.media.platform === "netease" ? `${NETEASE_IFRAME_HEIGHT} block min-w-[320px] w-full border-0 bg-transparent` : "absolute inset-0 h-full w-full border-0"}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    key={project.media.url}
                  />
                </div>
              </div>
              {project.slug === "qunar" ? (
                <div className="overflow-hidden rounded-2xl border border-white/5 bg-aurora-card shadow-2xl shadow-black/20">
                  <div className="relative w-full pb-[56.25%]">
                    <iframe
                      title="去哪儿 — Bilibili"
                      src="https://player.bilibili.com/player.html?isOutside=true&aid=1456144404&bvid=BV1ri421Y7gt&cid=1608458849&p=1"
                      className="absolute inset-0 h-full w-full border-0"
                      loading="lazy"
                      allow="autoplay; encrypted-media; fullscreen; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
          <div className="rounded-2xl border border-white/5 bg-aurora-card p-6">
            <p className="text-xs uppercase tracking-wider text-aurora-gold">Credits</p>
            <p className="mt-2 text-sm leading-relaxed text-aurora-muted">{project.credits.en}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
