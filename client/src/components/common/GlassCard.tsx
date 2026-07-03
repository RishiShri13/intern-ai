import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function GlassCard({
  children,
  className,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl",
        "border border-white/10",
        "bg-white/5",
        "backdrop-blur-2xl",
        "shadow-xl shadow-cyan-500/10",
        "transition-all duration-300",
        "hover:border-cyan-400/40",
        "hover:shadow-cyan-500/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}