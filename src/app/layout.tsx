import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
export const metadata: Metadata = {
  title: "MC College Rover Scout Group | Official Website",
  description:
    "Welcome to MC College Rover Scout Group (MCCRSG) - Empowering youth through scouting, leadership development, and community service. Join our dynamic community of young leaders.",
  keywords: [
    "MC College Rover Scout Group",
    "MCCRSG",
    "Rover Scouts",
    "Scouting Bangladesh",
    "Youth Leadership",
    "Community Service",
    "Scout Activities",
    "Leadership Development",
  ],
  authors: [{ name: "MC College Rover Scout Group" }],
  creator: "MC College Rover Scout Group",
  publisher: "MC College Rover Scout Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mccrsg.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MC College Rover Scout Group | Official Website",
    description:
      "Welcome to MC College Rover Scout Group (MCCRSG) - Empowering youth through scouting, leadership development, and community service.",
    url: "https://mccrsg.com",
    siteName: "MC College Rover Scout Group",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "MC College Rover Scout Group Logo",
      },
    ],
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MC College Rover Scout Group | Official Website",
    description:
      "Welcome to MC College Rover Scout Group (MCCRSG) - Empowering youth through scouting, leadership development, and community service.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn-BD" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon_io/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon_io/android-chrome-512x512.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
