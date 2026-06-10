"use client";

import Link from "next/link";
import {
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  Music2,
} from "@/components/ui/SocialIcons";
import { branding } from "@/config/branding";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";

const socialIcons = [
  { key: "youtube" as const, icon: YoutubeIcon, label: "YouTube" },
  { key: "instagram" as const, icon: InstagramIcon, label: "Instagram" },
  { key: "spotify" as const, icon: Music2, label: "Spotify" },
  { key: "linkedin" as const, icon: LinkedinIcon, label: "LinkedIn" },
];

export function Footer() {
  const { t, locale } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-aurora-darker">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-aurora-gold to-aurora-gold-dark">
                <span className="font-display text-sm font-semibold text-aurora-dark">
                  A
                </span>
              </span>
              <span className="font-display text-lg font-light text-white">
                {branding.studio.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-aurora-muted">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {socialIcons.map(({ key, icon: Icon, label }) => (
                <a
                  key={key}
                  href={branding.social[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-aurora-muted transition-all hover:border-aurora-gold/50 hover:text-aurora-gold"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-aurora-gold">
              {t.footer.navigation}
            </h3>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-aurora-muted transition-colors hover:text-white"
                  >
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-aurora-gold">
              {t.footer.connect}
            </h3>
            <ul className="space-y-3 text-sm text-aurora-muted">
              <li>
                <a
                  href={`mailto:${branding.contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {branding.contact.email}
                </a>
              </li>
              <li>{branding.contact.location[locale]}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-aurora-muted">
            © {year} {branding.studio.name}. {t.footer.rights}
          </p>
          <p className="text-xs text-aurora-muted/60">
            {branding.studio.tagline[locale]}
          </p>
        </div>
      </Container>
    </footer>
  );
}
