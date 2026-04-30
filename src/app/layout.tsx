import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SchemaOrg from "@/components/SchemaOrg";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://akabusiness.tech'),
  title: "AKA Business | High-Performance Infrastructure Architect",
  description: "Specialized Digital Infrastructure Engineering Firm for industrial sectors. High-performance architecture, SSR optimization, and mission-critical systems by Christian Camilo.",
  keywords: [
    "High-Performance Infrastructure",
    "Infrastructure Architect",
    "Next.js Performance",
    "Industrial Logistics Tech",
    "SSR Optimization",
    "Digital Infrastructure Engineering",
    "Christian Camilo",
    "AKA Business",
    "Mission-Critical Systems",
    "Software Architecture"
  ],
  authors: [{ name: "Christian Camilo", url: "https://github.com/CristianRodrigue" }],
  publisher: "AKA Business",
  openGraph: {
    title: "AKA Business | High-Performance Infrastructure Architect",
    description: "Specialized Digital Infrastructure Engineering Firm for industrial sectors. High-performance architecture by Christian Camilo.",
    url: "https://akabusiness.tech",
    siteName: "AKA Business",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AKA Business | High-Performance Infrastructure Architect",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AKA Business | High-Performance Infrastructure Architect",
    description: "Specialized Digital Infrastructure Engineering Firm. High-performance architecture by Christian Camilo.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32' },
      { url: '/icon.png', sizes: 'any' },
    ],
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://prod.spline.design" />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
      </head>
      <body>
        <SchemaOrg />
        {children}
      </body>
    </html>
  );
}
