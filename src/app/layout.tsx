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
  title: "AKA Business | Full-Stack Web Systems and Performance",
  description: "Fast, polished web systems for businesses that need performance, automation, e-commerce flows, and clear digital execution by Christian Camilo.",
  keywords: [
    "Full-Stack Developer",
    "Business Website Development",
    "Next.js Performance",
    "E-commerce Development",
    "Web Performance",
    "Digital Automation",
    "Christian Camilo",
    "AKA Business",
    "Software Engineering",
    "React Development"
  ],
  authors: [{ name: "Christian Camilo", url: "https://github.com/CristianRodrigue" }],
  publisher: "AKA Business",
  openGraph: {
    title: "AKA Business | Full-Stack Web Systems and Performance",
    description: "Fast, polished web systems for businesses that need performance, automation, and clear digital execution by Christian Camilo.",
    url: "https://akabusiness.tech",
    siteName: "AKA Business",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AKA Business | Full-Stack Web Systems and Performance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AKA Business | Full-Stack Web Systems and Performance",
    description: "Fast, polished web systems for businesses that need performance and automation by Christian Camilo.",
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
