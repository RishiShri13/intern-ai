import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const SecondaryButton = forwardRef<
  HTMLButtonElement,
  SecondaryButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "rounded-xl border border-white/10 bg-white/5",
        "px-6 py-3",
        "font-medium",
        "backdrop-blur-xl",
        "transition-all duration-300",
        "hover:border-cyan-400 hover:bg-white/10",
        "active:scale-95",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

SecondaryButton.displayName = "SecondaryButton";

export default SecondaryButton;