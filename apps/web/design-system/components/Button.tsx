"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base = "inline-flex min-h-12 items-center justify-center rounded-pill px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200";

  const variants = {
    primary: "bg-gradient-to-r from-[#C9B0DC] to-[#A980C0] text-white shadow-button hover:-translate-y-px hover:shadow-button-hover",
    ghost: "bg-glass border border-border2 text-accent2 backdrop-blur-md hover:bg-accent-lt hover:border-[rgba(186,164,203,0.6)]",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
