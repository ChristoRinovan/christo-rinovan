"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type AboutTypewriterProps = {
  text: string;
};

export function AboutTypewriter({ text }: AboutTypewriterProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(headingRef, { once: true, amount: 0.2 });
  const reduceMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!isInView || reduceMotion) return;

    let nextCharacter = 0;
    const intervalId = window.setInterval(() => {
      nextCharacter += 1;
      setVisibleCount(nextCharacter);

      if (nextCharacter >= text.length) {
        window.clearInterval(intervalId);
      }
    }, 45);

    return () => window.clearInterval(intervalId);
  }, [isInView, reduceMotion, text]);

  const displayedText = reduceMotion ? text : text.slice(0, visibleCount);
  const isTyping = isInView && !reduceMotion && visibleCount < text.length;

  return (
    <h2
      ref={headingRef}
      className="relative max-w-[18ch] text-[clamp(2.75rem,5.5vw,5.5rem)] leading-[1.06] font-extrabold tracking-[-0.055em] text-text"
    >
      {/* Keep the final heading's height stable while characters appear. */}
      <span aria-hidden="true" className="invisible block">
        {text}
      </span>

      <span aria-hidden="true" className="absolute inset-0 block">
        {displayedText}
        {isTyping ? (
          <span className="ml-1 inline-block h-[0.8em] w-[0.07em] animate-pulse rounded-sm bg-accent align-[-0.08em]" />
        ) : null}
      </span>

      {/* Assistive technology reads the complete sentence once. */}
      <span className="sr-only">{text}</span>
    </h2>
  );
}
