import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";

import type { Metadata } from "next";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>

      <body>
        {/* MantineProvider makes Mantine components available across the app. */}
        <MantineProvider defaultColorScheme="light">
          <Notifications layout="stacked" limit={3} position="top-right" />

          <Navbar />

          <main>{children}</main>

          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
