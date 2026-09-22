import { cn } from "@/lib/utils/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>

      {description ? (
        <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
