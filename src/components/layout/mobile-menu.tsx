"use client";

import Link from "next/link";
import { useState } from "react";

import { navigation } from "@/data/navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {isOpen ? (
        <div className="absolute inset-x-4 top-[calc(100%+0.75rem)] rounded-2xl border border-neutral-200 bg-white p-3 shadow-lg">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navigation.map((item) => (
              <Link
                className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-neutral-100"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
