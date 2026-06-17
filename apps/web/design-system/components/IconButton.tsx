import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  hideOnMobile?: boolean;
}

export function IconButton({
  children,
  className = "",
  hideOnMobile = false,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={`flex h-10 w-10 items-center justify-center rounded-pill bg-accent-lt text-accent2 transition-colors duration-200 hover:bg-[rgba(145,116,170,0.22)] ${hideOnMobile ? "hidden lg:flex" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
