import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

type ProgressProps = React.ComponentPropsWithoutRef<
  typeof ProgressPrimitive.Root
> & {
  value?: number;
};

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value = 0, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-3 w-full overflow-hidden rounded-full bg-slate-800",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full bg-cyan-500 transition-all"
      style={{ width: `${value}%` }}
    />
  </ProgressPrimitive.Root>
));

Progress.displayName = "Progress";

export { Progress };