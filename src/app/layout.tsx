import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "AKA Business | Digital Infrastructure",
  description: "Digital Infrastructure Engineering Firm for industrial sectors.",
  openGraph: {
    title: "AKA Business | Digital Infrastructure",
    description: "Digital Infrastructure Engineering Firm for industrial sectors.",
    url: "https://akabusiness.tech",
    siteName: "AKA Business",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AKA Business | Digital Infrastructure Engineering",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AKA Business | Digital Infrastructure",
    description: "Digital Infrastructure Engineering Firm for industrial sectors.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
