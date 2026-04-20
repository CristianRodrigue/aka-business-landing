import SplineHero from "@/components/SplineHero";
import InfoCards from "@/components/InfoCards";
import AuditSection from "@/components/AuditSection";
import DiagnosticForm from "@/components/DiagnosticForm";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  return (
    <main>
      {/* Sección Hero 3D - Nivel Masterclass */}
      <SplineHero />

      {/* Secciones de Ingeniería y Datos */}
      <div style={{ position: 'relative', zIndex: 5, background: 'var(--bg-absolute)' }}>
        <InfoCards />
        <AuditSection />
        <DiagnosticForm />
      </div>

      <footer style={{ 
        padding: '4rem 2rem', 
        textAlign: 'center', 
        borderTop: 'var(--border-surgical)',
        color: 'var(--text-dark)',
        fontSize: '0.7rem',
        fontFamily: 'var(--font-code)',
        letterSpacing: '0.2em'
      }}>
        © 2024 AKA_BUSINESS // ALL_RIGHTS_RESERVED // DIGITAL_INFRASTRUCTURE_GEN_V.1
      </footer>
    </main>
  );
}
