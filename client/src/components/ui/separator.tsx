import { cn } from "@/lib/utils";

type SeparatorProps = {
  className?: string;
  vertical?: boolean;
};

export function Separator({
  className,
  vertical = false,
}: SeparatorProps) {
  return (
    <div
      className={cn(
        vertical
          ? "h-full w-px bg-white/10"
          : "h-px w-full bg-white/10",
        className
      )}
    />
  );
}