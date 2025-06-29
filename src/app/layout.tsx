import { Metadata } from "next";
import * as React from "react";
import Link from "next/link";

import "@/styles/globals.css";
import Logo from "~/svg/pokemon-logo.svg";
import { siteConfig } from "@/constant/config";
import { TeamProvider } from "@/context/TeamContext";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <TeamProvider>
          <header className="bg-white border-b border-gray-200">
            <div className="max-w-screen-lg mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Link
                  href="/"
                  className="cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2"
                >
                  <Logo className="w-16" />
                  <h1 className="text-2xl font-bold">Pokemon</h1>
                </Link>
              </div>

              <nav>
                <Link
                  href="/my-team"
                  className="text-blue-600 hover:text-blue-800 font-semibold transition"
                >
                  My Team
                </Link>
              </nav>
            </div>
          </header>

          <main className="bg-white max-w-screen-lg mx-auto">{children}</main>
        </TeamProvider>
      </body>
    </html>
  );
}
