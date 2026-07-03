import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function Command({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-slate-900",
        className
      )}
      {...props}
    />
  );
}

export function CommandInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <div className="flex items-center border-b border-white/10 px-3">
      <Search className="mr-2 h-4 w-4 opacity-50" />

      <input
        className="flex h-11 w-full bg-transparent outline-none placeholder:text-slate-500"
        {...props}
      />
    </div>
  );
}

export function CommandList({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("max-h-80 overflow-auto p-2", className)}
      {...props}
    />
  );
}

export function CommandItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "cursor-pointer rounded-lg px-3 py-2 text-sm hover:bg-slate-800",
        className
      )}
      {...props}
    />
  );
}

export const CommandEmpty = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="p-6 text-center text-sm text-slate-400">
    {children}
  </div>
);