"use client";

import {
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  Music2,
  Mail,
  MapPin,
} from "@/components/ui/SocialIcons";
import { branding } from "@/config/branding";
import { useTranslation } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/contact/ContactForm";

const socialLinks = [
  { key: "youtube" as const, icon: YoutubeIcon, label: "YouTube" },
  { key: "instagram" as const, icon: InstagramIcon, label: "Instagram" },
  { key: "spotify" as const, icon: Music2, label: "Spotify" },
  { key: "linkedin" as const, icon: LinkedinIcon, label: "LinkedIn" },
];

export function ContactPageContent() {
  const { t, locale } = useTranslation();

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <Container>
          <FadeIn>
            <SectionHeading
              label={t.contact.hero.label}
              title={t.contact.hero.title}
              subtitle={t.contact.hero.subtitle}
            />
          </FadeIn>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <FadeIn className="lg:col-span-3">
              <ContactForm />
            </FadeIn>

            <FadeIn delay={0.2} className="lg:col-span-2">
              <div className="rounded-2xl border border-white/5 bg-aurora-card p-8">
                <h3 className="font-display text-xl font-light text-white">
                  {t.contact.info.title}
                </h3>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="mt-0.5 shrink-0 text-aurora-gold" size={20} />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-aurora-muted">
                        {t.contact.info.emailLabel}
                      </p>
                      <a
                        href={`mailto:${branding.contact.email}`}
                        className="mt-1 block text-white transition-colors hover:text-aurora-gold"
                      >
                        {branding.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="mt-0.5 shrink-0 text-aurora-gold" size={20} />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-aurora-muted">
                        {t.contact.info.locationLabel}
                      </p>
                      <p className="mt-1 text-white">
                        {branding.contact.location[locale]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/5 pt-8">
                  <p className="text-xs font-medium uppercase tracking-wider text-aurora-muted">
                    {t.contact.info.socialLabel}
                  </p>
                  <div className="mt-4 flex gap-3">
                    {socialLinks.map(({ key, icon: Icon, label }) => (
                      <a
                        key={key}
                        href={branding.social[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-aurora-muted transition-all hover:border-aurora-gold/50 hover:text-aurora-gold"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>

                <p className="mt-8 text-sm text-aurora-muted">
                  {t.contact.info.response}
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
