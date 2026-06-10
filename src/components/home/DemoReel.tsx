"use client";

import { branding } from "@/config/branding";
import { useTranslation } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { YouTubeEmbed } from "@/components/media/YouTubeEmbed";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function DemoReel() {
  const { t } = useTranslation();

  return (
    <section id="demo-reel" className="py-24 lg:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            label={t.home.demoReel.label}
            title={t.home.demoReel.title}
            align="center"
          />
        </FadeIn>
        <FadeIn delay={0.2} className="mx-auto mt-12 max-w-4xl">
          <YouTubeEmbed
            url={`https://www.youtube.com/embed/${branding.demoReel.youtubeId}`}
            title="Aurora Sound Studio Demo Reel"
          />
        </FadeIn>
      </Container>
    </section>
  );
}
