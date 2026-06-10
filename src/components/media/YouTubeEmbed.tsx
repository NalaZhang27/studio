"use client";

interface YouTubeEmbedProps {
  url: string;
  title: string;
  className?: string;
}

function extractYouTubeId(url: string): string {
  const patterns = [
    /embed\/([a-zA-Z0-9_-]+)/,
    /youtu\.be\/([a-zA-Z0-9_-]+)/,
    /v=([a-zA-Z0-9_-]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return url;
}

export function YouTubeEmbed({ url, title, className }: YouTubeEmbedProps) {
  const videoId = extractYouTubeId(url);

  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-xl bg-black/40 ${className ?? ""}`}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
