import { cn } from "@/lib/utils";

type AlertProps = React.HTMLAttributes<HTMLDivElement>;

export function Alert({
  className,
  ...props
}: AlertProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-slate-900 p-4",
        className
      )}
      {...props}
    />
  );
}

type AlertTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export function AlertTitle({
  className,
  ...props
}: AlertTitleProps) {
  return (
    <h5
      className={cn(
        "mb-2 font-semibold",
        className
      )}
      {...props}
    />
  );
}

type AlertDescriptionProps =
  React.HTMLAttributes<HTMLParagraphElement>;

export function AlertDescription({
  className,
  ...props
}: AlertDescriptionProps) {
  return (
    <p
      className={cn(
        "text-sm text-slate-400",
        className
      )}
      {...props}
    />
  );
}