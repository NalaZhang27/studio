"use client";

import Image from "next/image";
import { teamMembers } from "@/content/team";
import { useTranslation } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { t as translate } from "@/lib/utils";

export function AboutPage() {
  const { t, locale } = useTranslation();

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <Container>
          <FadeIn>
            <SectionHeading
              label={t.about.hero.label}
              title={t.about.hero.title}
            />
          </FadeIn>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <SectionHeading
                label={t.about.mission.label}
                title={t.about.mission.title}
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg leading-relaxed text-aurora-muted">
                {t.about.mission.body}
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3">
            {t.about.mission.values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="h-full rounded-2xl border border-white/5 bg-aurora-card p-8">
                  <h3 className="font-display text-xl font-light text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-aurora-muted">
                    {value.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="border-y border-white/5 bg-aurora-darker py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <SectionHeading
                label={t.about.philosophy.label}
                title={t.about.philosophy.title}
              />
              <p className="mt-6 text-lg leading-relaxed text-aurora-muted">
                {t.about.philosophy.body}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <ul className="space-y-4">
                {t.about.philosophy.pillars.map((pillar) => (
                  <li
                    key={pillar}
                    className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 px-6 py-4"
                  >
                    <span className="flex h-2 w-2 shrink-0 rounded-full bg-aurora-gold" />
                    <span className="text-white">{pillar}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container>
          <FadeIn>
            <SectionHeading
              label={t.about.team.label}
              title={t.about.team.title}
            />
          </FadeIn>

          <div className="mt-12 space-y-12">
            {teamMembers.map((member, index) => (
              <FadeIn key={member.id} delay={index * 0.1}>
                <div
                  className={`flex flex-col gap-8 overflow-hidden rounded-2xl border border-white/5 bg-aurora-card lg:flex-row ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden lg:aspect-auto lg:w-2/5">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 lg:p-12">
                    <h3 className="font-display text-3xl font-light text-white">
                      {member.name}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {member.roles[locale].map((role) => (
                        <span
                          key={role}
                          className="rounded-full border border-aurora-gold/20 bg-aurora-gold/5 px-3 py-1 text-xs text-aurora-gold"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                    <p className="mt-6 leading-relaxed text-aurora-muted">
                      {translate(member.bio, locale)}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
