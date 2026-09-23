import { createTheme } from "@mantine/core";

/*
 * Mantine theme config.
 * Visual tokens (colors, shadows) live in globals.css as CSS variables
 * so Tailwind can reference them too. Only Mantine-specific settings go here.
 */
export const theme = createTheme({
  defaultRadius: "md",
  radius: {
    sm: "0.75rem",
    md: "1.25rem",
    lg: "2rem",
  },
  fontFamily: "Arial, Helvetica, sans-serif",
});
