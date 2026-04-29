import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dossier | Christian Camilo - Infrastructure Architect",
  description: "Executive Professional Dossier of Christian Camilo. High-Performance Infrastructure Architect and AI Strategist.",
};

export default function CurriculumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
