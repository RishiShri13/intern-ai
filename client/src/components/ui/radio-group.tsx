import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const RadioGroup = RadioGroupPrimitive.Root;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      "h-5 w-5 rounded-full border border-white/20 bg-slate-900 text-cyan-500",
      className
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <Circle className="h-2.5 w-2.5 fill-current" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));

RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };