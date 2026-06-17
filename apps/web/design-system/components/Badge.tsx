import { type ReactNode } from "react";

interface BadgeProps {
  variant?: "default" | "new" | "success" | "discount";
  children: ReactNode;
}

export function Badge({ variant = "default", children }: BadgeProps) {
  const base = "inline-flex items-center px-2.5 py-1 text-xs font-semibold uppercase tracking-wide rounded-pill";

  const variants = {
    default: "bg-accent-lt text-accent2",
    new: "bg-accent text-white",
    success: "bg-success/10 text-success",
    discount: "bg-red-100 text-red-600",
  };

  return <span className={`${base} ${variants[variant]}`}>{children}</span>;
}
