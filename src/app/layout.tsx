import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Noto_Sans_SC } from "next/font/google";
import { branding } from "@/config/branding";
import { ClientProviders } from "@/components/providers/ClientProviders";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: branding.studio.name,
    template: `%s | ${branding.studio.name}`,
  },
  description: branding.studio.description.en,
  keywords: [
    "film scoring",
    "music studio",
    "orchestration",
    "game music",
    "musical theatre",
    "K-pop production",
    "animation scoring",
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
      className={`${cormorant.variable} ${outfit.variable} ${notoSansSC.variable} h-full`}
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
