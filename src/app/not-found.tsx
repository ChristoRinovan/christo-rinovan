import { IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { notFoundIllustration } from "@/config/not-found";

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-title"
      className="fixed inset-0 z-[200] flex h-svh w-full items-center justify-center overflow-hidden bg-page px-4 py-3 sm:px-6"
    >
      <div className="flex max-h-full w-full max-w-3xl flex-col items-center justify-center text-center">
        <div className="relative mb-[clamp(0.5rem,2svh,1.25rem)] h-[clamp(5rem,27svh,15rem)] w-full max-w-[580px] shrink min-h-0 [@media(max-height:400px)]:hidden">
          <Image
            alt={notFoundIllustration.alt}
            className="object-contain"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 580px"
            src={notFoundIllustration.src}
          />
        </div>

        <p className="mb-[clamp(0.25rem,1svh,0.75rem)] text-xs font-extrabold tracking-[0.18em] text-accent uppercase sm:text-sm">
          404 — Page not found
        </p>
        <h1
          className="max-w-2xl text-[clamp(1.5rem,4.5vw,3.25rem)] leading-[1.12] font-extrabold tracking-[-0.045em] text-text"
          id="not-found-title"
        >
          Oops! Something went off course.
        </h1>
        <p className="mt-[clamp(0.5rem,1.5svh,1.25rem)] max-w-xl text-[clamp(0.8125rem,1.4vw,1rem)] leading-[1.5] text-muted">
          The page you&apos;re looking for doesn&apos;t seem to exist. You may
          have mistyped the address, or the page has moved somewhere else.
          Let&apos;s get you back on track!
        </p>
        <div className="mt-[clamp(0.75rem,2svh,2rem)] shrink-0">
          <Button
            href="/"
            leftSection={<IconArrowLeft aria-hidden size={18} stroke={1.8} />}
          >
            Back to home
          </Button>
        </div>
      </div>
    </section>
  );
}
