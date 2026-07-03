import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";

const NavigationMenu = NavigationMenuPrimitive.Root;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "flex items-center gap-2",
      className
    )}
    {...props}
  />
));

NavigationMenuList.displayName = "NavigationMenuList";

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(
      "rounded-lg px-4 py-2 text-sm font-medium hover:bg-slate-800",
      className
    )}
    {...props}
  />
));

NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "rounded-xl border border-white/10 bg-slate-900 p-4 shadow-xl",
      className
    )}
    {...props}
  />
));

NavigationMenuContent.displayName = "NavigationMenuContent";

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
};  