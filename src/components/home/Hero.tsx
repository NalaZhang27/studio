"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { branding } from "@/config/branding";
import { useTranslation } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement | null>(null);
  const meadowRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<HTMLDivElement | null>(null);
  const notesRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const floatingNotes = useMemo(
    () => [
      { top: "22%", left: "14%", delay: 0 },
      { top: "28%", left: "74%", delay: 1.1 },
      { top: "36%", left: "58%", delay: 2.2 },
      { top: "48%", left: "24%", delay: 0.6 },
      { top: "58%", left: "82%", delay: 1.8 },
      { top: "66%", left: "44%", delay: 2.7 },
      { top: "73%", left: "66%", delay: 1.4 },
      { top: "18%", left: "46%", delay: 0.3 },
    ],
    []
  );

  const flowers = useMemo(
    () =>
      Array.from({ length: 60 }, (_, index) => ({
        id: index,
        left: `${6 + ((index * 11) % 88)}%`,
        bottom: `${6 + (index % 6) * 2.2}%`,
        size: 1 + (index % 5) * 0.38,
        delay: (index % 10) * 0.24,
        drift: (index % 2 === 0 ? 1 : -1) * (0.2 + (index % 4) * 0.07),
      })),
    []
  );

  useEffect(() => {
    const onScroll = () => {
      const next = Math.min(window.scrollY / (window.innerHeight * 0.9), 1);
      setScrollProgress(next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const meadow = meadowRef.current;
    const glow = glowRef.current;
    if (!hero || !meadow || !glow) return;

    const onMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      meadow.style.transform = `translate3d(${x * 18}px, ${y * 10}px, 0) scale(1.015)`;
      glow.style.transform = `translate3d(${x * 24}px, ${y * 20}px, 0)`;
    };

    const onLeave = () => {
      meadow.style.transform = "translate3d(0, 0, 0) scale(1)";
      glow.style.transform = "translate3d(0, 0, 0)";
    };

    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  useEffect(() => {
    const particlesEl = particlesRef.current;
    const notesEl = notesRef.current;
    if (!particlesEl || !notesEl) return;

    const pNodes = Array.from(particlesEl.children) as HTMLElement[];
    const nNodes = Array.from(notesEl.children) as HTMLElement[];
    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      pNodes.forEach((node, index) => {
        const progress = (elapsed * (0.05 + (index % 5) * 0.006) + index * 0.17) % 1;
        node.style.transform = `translate3d(${Math.sin(elapsed + index) * 6}px, ${-progress * 260}px, 0)`;
        node.style.opacity = `${0.14 + Math.sin(elapsed * 0.8 + index) * 0.05}`;
      });
      nNodes.forEach((node, index) => {
        const glow = 0.35 + Math.sin(elapsed * 1.2 + index * 0.8) * 0.16;
        node.style.opacity = `${Math.max(0.2, Math.min(0.95, glow))}`;
      });
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#0a0a0f]"
      style={{ perspective: 1200 }}
    >
      <div
        ref={meadowRef}
        className="absolute inset-0 bg-[url('https://res.cloudinary.com/dkualyhq9/image/upload/q_auto/f_auto/v1781631410/%E8%83%8C%E6%99%AF_nwvlai.png')] bg-cover bg-[center_bottom] bg-no-repeat will-change-transform"
        style={{ transform: `translate3d(0, ${scrollProgress * -40}%, 0) scale(1.08)` }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_bottom,rgba(245,200,66,0.08)_0%,rgba(184,164,232,0.06)_22%,rgba(10,10,15,0)_46%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,15,0.12)_0%,rgba(10,10,15,0.05)_20%,rgba(10,10,15,0.22)_58%,rgba(10,10,15,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0_42%,rgba(10,10,15,0.22)_72%,rgba(10,10,15,0.82)_100%)]" />

      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 transition-transform duration-200 ease-out"
      >
        <div className="absolute left-1/2 top-[46%] h-[34vw] w-[34vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,200,66,0.38)_0%,rgba(245,200,66,0.16)_24%,rgba(184,164,232,0.08)_42%,transparent_72%)] blur-3xl" />
        <div className="absolute left-1/2 bottom-[12%] h-[52vw] w-[68vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(245,200,66,0.25)_0%,rgba(184,164,232,0.12)_28%,transparent_70%)] blur-2xl opacity-90" />
      </div>

      <div ref={particlesRef} className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 24 }, (_, index) => (
          <span
            key={index}
            className="absolute bottom-[10%] rounded-full bg-[#f5c842] shadow-[0_0_10px_rgba(245,200,66,0.35)]"
            style={{
              left: `${8 + ((index * 9) % 84)}%`,
              width: `${1 + (index % 3) * 0.5}px`,
              height: `${1 + (index % 3) * 0.5}px`,
              animation: `floatUp ${10 + (index % 5) * 1.8}s linear ${index * 0.18}s infinite`,
            }}
          />
        ))}
      </div>

      <div ref={notesRef} className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingNotes.map((note, index) => (
          <span
            key={index}
            className="absolute text-white/70"
            style={{
              top: note.top,
              left: note.left,
              animation: `noteDrift ${6 + (index % 4) * 0.9}s ease-in-out ${note.delay}s infinite`,
              textShadow: "0 0 14px rgba(245,200,66,0.22)",
            }}
          >
            {index % 3 === 0 ? "♩" : index % 3 === 1 ? "♪" : "♫"}
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[28vh] bg-[linear-gradient(180deg,transparent_0%,rgba(10,10,15,0.06)_18%,rgba(10,10,15,0.44)_62%,rgba(10,10,15,0.94)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[12vh] bg-[radial-gradient(ellipse_at_center_bottom,rgba(26,16,37,0.2)_0%,rgba(10,10,15,0.96)_72%)]" />

      <Container className="relative z-10 flex min-h-screen items-center justify-center py-28 text-center">
        <motion.div
          ref={contentRef}
          initial="hidden"
          animate="show"
          style={{ opacity: 1 - scrollProgress * 0.8, scale: 1 - scrollProgress * 0.05 }}
          className="max-w-4xl -translate-y-[12vh] sm:-translate-y-[14vh]"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15, delayChildren: 0.15 },
            },
          }}
        >
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="font-display text-[clamp(3.8rem,8vw,7.5rem)] font-light leading-[0.9] tracking-[-0.05em] text-white [text-shadow:0_0_24px_rgba(255,255,255,0.14)]"
          >
            EON
            <span className="mt-2 block text-[clamp(2rem,4vw,3.5rem)] text-[#f7e8be] [text-shadow:0_0_20px_rgba(245,200,66,0.18)]">
              Resonance Lab
            </span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="mx-auto mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-[#f0e6ff] [text-shadow:0_0_16px_rgba(184,164,232,0.14)]"
          >
            Music for Stories That Matter
          </motion.p>
        </motion.div>
      </Container>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70">
        <div className="flex flex-col items-center gap-2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.2, repeat: Infinity }}>
            ↓
          </motion.div>
          <span className="text-[10px] uppercase tracking-[0.45em]">Scroll</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatUp {
          0% { transform: translate3d(0, 0, 0); opacity: 0; }
          10% { opacity: 0.75; }
          100% { transform: translate3d(0, -260px, 0); opacity: 0; }
        }
        @keyframes noteDrift {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(0, -8px, 0) rotate(-2deg); }
        }
      `}</style>
    </section>
  );
}
