"use client";

import { motion } from "framer-motion";

export function HomeOrbAnimation() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(122,166,255,0.08),_transparent_55%)]" />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7AA6FF]/60"
        animate={{
          scale: [0.98, 1.05, 0.98],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{
          filter: "drop-shadow(0 0 12px rgba(122,166,255,0.4))",
          transformOrigin: "50% 50%",
        }}
      />
    </div>
  );
}
