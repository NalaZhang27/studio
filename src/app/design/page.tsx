"use client";

import { useState } from "react";
import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Manrope,
  Bodoni_Moda,
} from "next/font/google";
import styles from "./page.module.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bodoni-moda",
  display: "swap",
});

const heroOptions = {
  living: {
    nav: "Living Resonance",
    label: "Concept A · Living Resonance",
    title: "Music as a living organism.",
    blurb:
      "Metallic vines, translucent branches, and jade leaves grow through darkness with a sacred, breathing glow.",
    className: styles.livingResonance,
  },
  epic: {
    nav: "Hand-Painted Epic",
    label: "Concept B · Hand-Painted Epic",
    title: "A hand-painted valley where music is born.",
    blurb:
      "A cinematic world of glowing arches, light rivers, drifting fragments, and painterly atmospheric depth.",
    className: styles.handPaintedEpic,
  },
  portal: {
    nav: "Light Portal",
    label: "Concept C · Light Portal",
    title: "An abstract gateway into another world.",
    blurb:
      "Glass, liquid light, reflections, and resonance waves gather at the center of a dark, foggy frame.",
    className: styles.lightPortal,
  },
} as const;

type HeroKey = keyof typeof heroOptions;

const palette = [
  { name: "Midnight Blue", value: "#07111f" },
  { name: "Deep Purple", value: "#1a0f33" },
  { name: "Aurora Blue", value: "#0d2f59" },
  { name: "Moon Silver", value: "#c8ced8" },
  { name: "Deep Teal", value: "#0d3439" },
  { name: "Smoky Rose", value: "#6a414f" },
];

const typography = [
  { name: "Cormorant Garamond", className: styles.fontCormorant },
  { name: "Bodoni", className: styles.fontBodoni },
  { name: "Canela", className: styles.fontCanela },
  { name: "PP Editorial New", className: styles.fontEditorial },
  { name: "Inter", className: styles.fontInter },
  { name: "Manrope", className: styles.fontManrope },
  { name: "General Sans", className: styles.fontGeneralSans },
];

function HeroScene({ active }: { active: HeroKey }) {
  const hero = heroOptions[active];

  return (
    <section className={`${styles.heroStage} ${hero.className}`}>
      <div className={styles.heroAtmosphere} />
      <div className={styles.heroSurface} />
      <div className={styles.heroCopy}>
        <p className={styles.heroLabel}>{hero.label}</p>
        <h2 className={styles.heroTitle}>{hero.title}</h2>
        <p className={styles.heroBlurb}>{hero.blurb}</p>
      </div>
    </section>
  );
}

export default function DesignLabPage() {
  const [activeHero, setActiveHero] = useState<HeroKey>("living");

  return (
    <main
      className={`${styles.page} ${cormorantGaramond.variable} ${inter.variable} ${manrope.variable} ${bodoniModa.variable}`}
    >
      <section className={styles.masthead}>
        <p className={styles.kicker}>EON Resonance Lab · Visual Lab</p>
        <h1 className={styles.displayTitle}>Resonance Beyond Reality</h1>
        <p className={styles.intro}>
          An isolated playground for cinematic homepage experiments, immersive mood studies,
          and experimental UI atmosphere.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Hero Concepts</h2>
          <p>Switch between three cinematic directions without affecting the main website.</p>
        </div>
        <div className={styles.heroToggle} role="tablist" aria-label="Hero concepts">
          {Object.entries(heroOptions).map(([key, value]) => (
            <button
              key={key}
              className={`${styles.toggleButton} ${activeHero === key ? styles.toggleActive : ""}`}
              onClick={() => setActiveHero(key as HeroKey)}
              type="button"
            >
              {value.nav}
            </button>
          ))}
        </div>
        <HeroScene active={activeHero} />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Color Palette Playground</h2>
          <p>Instantly preview atmosphere shifts across six tonal directions.</p>
        </div>
        <div className={styles.paletteGrid}>
          {palette.map((item) => (
            <article key={item.name} className={styles.swatch} style={{ background: item.value }}>
              <span>{item.name}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Typography Playground</h2>
          <p>English and Chinese treatments for the studio identity and tagline.</p>
        </div>
        <div className={styles.typeGrid}>
          {typography.map((item) => (
            <article key={item.name} className={styles.typeCard}>
              <div className={styles.typeMeta}>{item.name}</div>
              <div className={`${styles.typeSample} ${item.className}`}>
                <h3>EON Resonance Lab</h3>
                <p>Music for Stories That Matter</p>
                <span>为重要的故事而作的音乐</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Experimental Components</h2>
          <p>Buttons, panels, cards, borders, and shadows for visual testing only.</p>
        </div>
        <div className={styles.componentGrid}>
          <div className={styles.panel}>
            <h3>Buttons</h3>
            <div className={styles.buttonRow}>
              <button className={styles.primaryButton}>Listen</button>
              <button className={styles.secondaryButton}>Explore</button>
              <button className={styles.ghostButton}>Save Mood</button>
            </div>
          </div>
          <div className={styles.panel}>
            <h3>Glass Panels</h3>
            <div className={styles.glassCard}>
              <p>Soft blur, translucent layers, and subtle edge glow.</p>
            </div>
          </div>
          <div className={styles.panel}>
            <h3>Video Cards</h3>
            <div className={styles.mediaCard}>
              <span>Visual Study</span>
              <strong>Looping atmosphere frame</strong>
            </div>
          </div>
          <div className={styles.panel}>
            <h3>Audio Cards</h3>
            <div className={styles.mediaCardAlt}>
              <span>Audio Study</span>
              <strong>Breathing resonance snippet</strong>
            </div>
          </div>
          <div className={styles.panel}>
            <h3>Borders</h3>
            <div className={styles.borderStudy}>
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className={styles.panel}>
            <h3>Shadows</h3>
            <div className={styles.shadowStudy}>
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
