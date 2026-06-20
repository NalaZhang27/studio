"use client";

import { useTranslation } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { teamMembers } from "@/content/team";

const tags = {
  en: [],
  zh: [],
};

export function HomeIntro() {
  const { t, locale } = useTranslation();
  const studio = t.about.studio;
  const label = locale === "zh" ? studio.labelZh : studio.label;

  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aurora-gold">
              {label}
            </p>
            <h2 className="mt-4 font-display text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
              {studio.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg leading-relaxed text-aurora-muted whitespace-pre-line">
              {studio.body}
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

export function TeamSection() {
  const { t, locale } = useTranslation();

  return (
    <section className="border-y border-white/5 bg-aurora-darker py-24 lg:py-32">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aurora-gold">
            {locale === "zh" ? t.about.team.label : t.home.team.label}
          </p>
          <h2 className="mt-4 font-display text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
            {t.home.team.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-aurora-muted">
            {t.home.team.subtitle}
          </p>
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-2">
          {teamMembers.map((member) => (
            <StaggerItem key={member.id}>
              <div className="rounded-2xl border border-white/5 bg-aurora-card p-6 lg:p-8">
                <h3 className="font-display text-2xl font-light text-white">
                  {member.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {member.roles[locale].map((role) => (
                    <span
                      key={role}
                      className="rounded-full border border-aurora-gold/20 bg-aurora-gold/5 px-3 py-1 text-xs text-aurora-gold"
                    >
                      {role}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-aurora-muted">
                  {member.bio[locale]}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
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
