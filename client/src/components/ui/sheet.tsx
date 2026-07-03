import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet = Dialog.Root;
const SheetTrigger = Dialog.Trigger;
const SheetClose = Dialog.Close;

function SheetContent({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />

      <Dialog.Content
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-105 border-l border-white/10 bg-slate-900 p-6 shadow-2xl",
          className
        )}
      >
        {children}

        <SheetClose className="absolute right-4 top-4">
          <X size={18} />
        </SheetClose>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
};