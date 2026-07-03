import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(
      "peer inline-flex h-6 w-11 items-center rounded-full bg-slate-700 transition data-[state=checked]:bg-cyan-500",
      className
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className="block h-5 w-5 translate-x-0.5 rounded-full bg-white transition data-[state=checked]:translate-x-5"
    />
  </SwitchPrimitive.Root>
));

Switch.displayName = "Switch";

export { Switch };