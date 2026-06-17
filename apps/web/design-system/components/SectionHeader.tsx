import { type ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  centered?: boolean;
}

export function SectionHeader({ eyebrow, title, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-9 ${centered ? "text-center" : ""}`}>
      <div
        className={`mb-2.5 flex items-center gap-2.5 text-[11px] uppercase tracking-[0.28em] text-accent ${centered ? "mx-auto w-fit justify-center" : ""}`}
      >
        <span>{eyebrow}</span>
        <span className="h-px w-12 max-w-12 bg-border2" />
      </div>
      <h2 className="font-serif text-[clamp(32px,8vw,48px)] font-medium leading-[1.1] tracking-[0.02em] text-text">
        {title}
      </h2>
    </div>
  );
}
