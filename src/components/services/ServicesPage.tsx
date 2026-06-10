"use client";

import {
  Film,
  Sparkles,
  Gamepad2,
  Drama,
  Music,
  Layers,
  Sliders,
  Mic,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/content/services";
import { useTranslation } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { t as translate } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  film: Film,
  sparkles: Sparkles,
  gamepad: Gamepad2,
  theatre: Drama,
  music: Music,
  layers: Layers,
  sliders: Sliders,
  mic: Mic,
};

export function ServicesPage() {
  const { t, locale } = useTranslation();

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <Container>
          <FadeIn>
            <SectionHeading
              label={t.services.hero.label}
              title={t.services.hero.title}
              subtitle={t.services.hero.subtitle}
            />
          </FadeIn>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? Music;
              return (
                <StaggerItem key={service.id}>
                  <div className="group h-full rounded-2xl border border-white/5 bg-aurora-card p-8 transition-all duration-300 hover:border-aurora-gold/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-aurora-gold/10 text-aurora-gold transition-colors group-hover:bg-aurora-gold/20">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-light text-white">
                      {translate(service.title, locale)}
                    </h3>
                    <p className="mt-3 leading-relaxed text-aurora-muted">
                      {translate(service.description, locale)}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {service.deliverables[locale].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-aurora-muted"
                        >
                          <span className="h-1 w-1 rounded-full bg-aurora-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      <section className="border-y border-white/5 bg-aurora-darker py-24 lg:py-32">
        <Container>
          <FadeIn>
            <SectionHeading
              label={t.services.process.label}
              title={t.services.process.title}
              align="center"
            />
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.process.steps.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-aurora-gold/30 font-display text-xl text-aurora-gold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-light text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-aurora-muted">
                    {step.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container>
          <FadeIn className="text-center">
            <h2 className="font-display text-3xl font-light text-white sm:text-4xl">
              {t.services.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-aurora-muted">
              {t.services.cta.subtitle}
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                {t.services.cta.button}
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
