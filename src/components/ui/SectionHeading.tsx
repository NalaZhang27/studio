import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  className,
  dark = true,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            dark ? "text-aurora-gold" : "text-aurora-gold-dark"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-light leading-tight tracking-tight sm:text-4xl lg:text-5xl",
          dark ? "text-white" : "text-aurora-dark"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            dark ? "text-aurora-muted" : "text-aurora-muted-dark"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
