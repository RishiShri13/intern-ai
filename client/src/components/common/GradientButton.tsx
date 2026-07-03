import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function GradientButton({
  className,
  children,
  ...props
}: Props) {
  return (
    <Button
      {...props}
      className={cn(
        "rounded-xl",
        "bg-gradient-to-r from-indigo-500 to-violet-600",
        "text-white",
        "shadow-lg",
        "transition-all duration-300",
        "hover:scale-105",
        "hover:shadow-indigo-500/40",
        className
      )}
    >
      {children}
    </Button>
  );
}