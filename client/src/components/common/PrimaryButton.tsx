import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ children, className, loading = false, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2",
          "rounded-xl",
          "bg-cyan-500",
          "px-6 py-3",
          "font-semibold",
          "text-black",
          "transition-all duration-300",
          "hover:scale-105",
          "hover:bg-cyan-400",
          "active:scale-95",
          "disabled:cursor-not-allowed",
          "disabled:opacity-60",
          "shadow-lg shadow-cyan-500/20",
          className
        )}
        {...props}
      >
        {loading && (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
        )}

        {children}
      </button>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;