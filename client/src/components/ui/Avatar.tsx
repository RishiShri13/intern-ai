import { cn } from "@/lib/utils";

type AvatarProps = {
  src?: string;
  alt?: string;
  name?: string;
  className?: string;
};

export function Avatar({
  src,
  alt,
  name = "",
  className,
}: AvatarProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={cn(
          "h-10 w-10 rounded-full object-cover border border-white/10",
          className
        )}
      />
    );
  }

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-white",
        className
      )}
    >
      {initials || "?"}
    </div>
  );
}
