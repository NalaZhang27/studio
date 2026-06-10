"use client";

import Link from "next/link";
import { branding } from "@/config/branding";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { StudioLogo } from "@/components/branding/StudioLogo";

export function Footer() {
  const { t, locale } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-aurora-darker">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-gold rounded-sm"
              aria-label={branding.studio.name}
            >
              <StudioLogo variant="horizontal" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-aurora-muted">
              {t.footer.tagline}
            </p>
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
