"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type ProjectCardRevealProps = {
  children: ReactNode;
  index: number;
};

export function ProjectCardReveal({ children, index }: ProjectCardRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="h-full min-w-0"
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      transition={reduceMotion ? undefined : { duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
