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
  const base = "inline-flex items-center justify-center px-7 py-3.5 font-semibold uppercase text-sm tracking-wide rounded-pill transition-all duration-200";

  const variants = {
    primary: "bg-gradient-to-r from-[#C9B0DC] to-[#A980C0] text-white shadow-button hover:-translate-y-px",
    ghost: "bg-glass border border-border2 text-accent2 backdrop-blur-sm hover:bg-accent-lt",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
