"use client";

import Image from "next/image";
import { teamMembers } from "@/content/team";
import { useTranslation } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { t as translate } from "@/lib/utils";

export function TeamPreview() {
  const { t, locale } = useTranslation();

  return (
    <section className="border-y border-white/5 bg-aurora-darker py-24 lg:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            label={t.home.team.label}
            title={t.home.team.title}
            subtitle={t.home.team.subtitle}
          />
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-2">
          {teamMembers.map((member) => (
            <StaggerItem key={member.id}>
              <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-aurora-card sm:flex-row">
                <div className="relative aspect-square w-full shrink-0 overflow-hidden sm:w-48 lg:w-56">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 224px"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <h3 className="font-display text-2xl font-light text-white">
                    {member.name}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {member.roles[locale].map((role) => (
                      <span
                        key={role}
                        className="rounded-full border border-aurora-gold/20 bg-aurora-gold/5 px-3 py-1 text-xs text-aurora-gold"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-aurora-muted">
                    {translate(member.bio, locale)}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-12 text-center">
          <Button href="/about" variant="secondary">
            {t.common.learnMore}
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
