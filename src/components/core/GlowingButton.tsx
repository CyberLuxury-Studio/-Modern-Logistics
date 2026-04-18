import { cn } from "@/lib/utils";
import React from "react";

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  href?: string;
}

export function GlowingButton({
  children,
  className,
  variant = "primary",
  href,
  ...props
}: GlowingButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 font-heading font-bold rounded-md transition-all duration-300";

  const variants = {
    primary: "bg-neon-cyan text-slate-950 hover:bg-neon-cyan/90 hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]",
    outline: "bg-transparent border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]",
  };

  const combinedStyles = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
