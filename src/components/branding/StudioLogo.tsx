import { cn } from "@/lib/utils";

interface StudioLogoProps {
  variant?: "stacked" | "horizontal" | "icon";
  className?: string;
}

export function StudioLogo({ variant = "horizontal", className }: StudioLogoProps) {
  if (variant === "icon") {
    return <LogoIcon className={className} />;
  }

  if (variant === "stacked") {
    return (
      <div className={cn("flex flex-col items-center gap-6", className)}>
        <LogoIcon className="h-28 w-28 text-[#1f244b]" />
        <div className="text-center">
          <div className="font-display text-6xl font-semibold leading-none tracking-[0.08em] text-[#1f244b] sm:text-7xl">
            EON
          </div>
          <div className="mx-auto mt-8 h-px w-48 bg-[#d9deef]" />
          <div className="mt-8 font-sans text-2xl tracking-[0.48em] text-[#5e668d] sm:text-[2rem]">
            RESONANCE LAB
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoIcon className="h-10 w-10 text-white" />
      <div className="leading-none">
        <div className="font-display text-lg font-semibold tracking-[0.08em] text-white">
          EON
        </div>
        <div className="mt-1 text-[0.62rem] tracking-[0.38em] text-aurora-muted">
          RESONANCE LAB
        </div>
      </div>
    </div>
  );
}

function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="60" cy="60" r="52" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1.6" />
      <circle cx="60" cy="60" r="42" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" />
      <path d="M30 35h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
      <path d="M82 35h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
      <path d="M30 85h8v-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
      <path d="M82 85h8v-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
      <ellipse cx="60" cy="60" rx="48" ry="30" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.2" />
      <line x1="50" y1="30" x2="50" y2="90" stroke="currentColor" strokeWidth="3.2" />
      <line x1="56" y1="24" x2="56" y2="96" stroke="currentColor" strokeWidth="2.2" />
      <line x1="64" y1="18" x2="64" y2="102" stroke="currentColor" strokeWidth="1.8" />
      <line x1="72" y1="30" x2="72" y2="90" stroke="currentColor" strokeWidth="3.2" />
      <line x1="78" y1="36" x2="78" y2="84" stroke="currentColor" strokeWidth="2.2" />
      <line x1="84" y1="42" x2="84" y2="78" stroke="currentColor" strokeWidth="1.8" />
      <path d="M60 18a42 42 0 0 1 0 84" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}
