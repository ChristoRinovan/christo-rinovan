import { createTheme } from "@mantine/core";

// Mantine owns the shared brand shade, typography, radii, and shadow.
// globals.css references these values via --mantine-* CSS variables.
export const mantineTheme = createTheme({
  primaryColor: "brand",
  primaryShade: 6,
  colors: {
    brand: [
      "#f0efff",
      "#e6e4ff",
      "#c9c4ff",
      "#a79efd",
      "#8679fa",
      "#7264f7",
      "#6558f5",
      "#5144db",
      "#4032bc",
      "#31259a",
    ],
  },
  fontFamily: "Arial, Helvetica, sans-serif",
  defaultRadius: "md",
  radius: {
    sm: "0.75rem",
    md: "1.25rem",
    lg: "2rem",
  },
  shadows: {
    md: "0 18px 45px rgba(27, 31, 28, 0.08)",
  },
});
