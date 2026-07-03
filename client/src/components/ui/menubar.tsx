import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { cn } from "@/lib/utils";

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-10 items-center gap-1 rounded-xl border border-white/10 bg-slate-900 p-1",
      className
    )}
    {...props}
  />
));

Menubar.displayName = "Menubar";

const MenubarMenu = MenubarPrimitive.Menu;
const MenubarTrigger = MenubarPrimitive.Trigger;
const MenubarContent = MenubarPrimitive.Content;
const MenubarItem = MenubarPrimitive.Item;
const MenubarSeparator = MenubarPrimitive.Separator;

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
};