import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MaxWidthProps {
  children: ReactNode;
  className?: string;
}

export default function MaxWidth({
  children,
  className,
}: MaxWidthProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}