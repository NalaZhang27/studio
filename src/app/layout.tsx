import type { Metadata } from "next";
import {
  Inconsolata,
  Noto_Serif_SC,
  Playfair_Display,
} from "next/font/google";
import { branding } from "@/config/branding";
import { ClientProviders } from "@/components/providers/ClientProviders";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  subsets: ["latin", "chinese-simplified"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: branding.studio.name,
    template: `%s | ${branding.studio.name}`,
  },
  description: branding.studio.description.en,
  keywords: [
    "EON Resonance Lab",
    "film scoring",
    "music studio",
    "orchestration",
    "game music",
    "musical theatre",
    "animation scoring",
    "contemporary production",
  ],
  authors: [{ name: branding.studio.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "zh_CN",
    siteName: branding.studio.name,
    title: branding.studio.tagline.en,
    description: branding.studio.description.en,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inconsolata.variable} ${notoSerifSC.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-aurora-gold focus:px-4 focus:py-2 focus:text-aurora-dark"
        >
          Skip to main content
        </a>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
