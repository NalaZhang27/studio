"use client";

import { useTranslation } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const tags = {
  en: ["Film", "Animation", "Theatre", "Games", "Pop"],
  zh: ["电影", "动画", "戏剧", "游戏", "流行"],
};

export function HomeIntro() {
  const { t, locale } = useTranslation();

  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aurora-gold">
              {t.home.intro.label}
            </p>
            <h2 className="mt-4 font-display text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
              {t.home.intro.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg leading-relaxed text-aurora-muted">
              {t.home.intro.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {tags[locale].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-aurora-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

export function HomeCTA() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-aurora-purple/20 via-aurora-dark to-aurora-gold/10" />
      <Container className="relative">
        <FadeIn className="text-center">
          <h2 className="font-display text-3xl font-light text-white sm:text-4xl lg:text-5xl">
            {t.home.cta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-aurora-muted">
            {t.home.cta.subtitle}
          </p>
          <div className="mt-10">
            <Button href="/contact" size="lg">
              {t.home.cta.button}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
