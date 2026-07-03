import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  badge?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  className?: string;
}

export default function Heading({
  badge,
  title,
  subtitle,
  center = false,
  className,
}: HeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        center && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span className="mb-5 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400">
          {badge}
        </span>
      )}

      <h1 className="text-5xl font-black leading-[0.9] tracking-tight text-white md:text-7xl xl:text-8xl">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}