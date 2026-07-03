import * as React from "react";
import { cn } from "@/lib/utils";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-32 w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };