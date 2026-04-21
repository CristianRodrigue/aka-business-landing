import SplineHero from "@/components/SplineHero";
import InfoCards from "@/components/InfoCards";
import AuditSection from "@/components/AuditSection";
import DiagnosticForm from "@/components/DiagnosticForm";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  return (
    <main>
      {/* Sección Hero 3D - Fondo Fijo */}
      <SplineHero />

      {/* Secciones de Ingeniería y Datos - Panel de Cristal Deslizable */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        marginTop: '100vh',
        background: 'rgba(5, 5, 5, 0.75)', /* Más opaco para compensar menos blur */
        backdropFilter: 'blur(4px)', /* Reducido para performance en PC */
        WebkitBackdropFilter: 'blur(4px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: '0 -20px 40px rgba(0,0,0,0.5)',
        willChange: 'transform, backdrop-filter'
      }}>
        <InfoCards />
        <AuditSection />
        <DiagnosticForm />

        <footer style={{
          padding: '4rem 2rem',
          textAlign: 'center',
          borderTop: 'var(--border-surgical)',
          color: 'var(--text-dark)',
          fontSize: '0.7rem',
          fontFamily: 'var(--font-code)',
          letterSpacing: '0.2em'
        }}>
          <div>© 2026 AKA_BUSINESS // ALL_RIGHTS_RESERVED // DIGITAL_INFRASTRUCTURE_GEN_V.1</div>
          <div style={{ marginTop: '1.5rem' }}>
            <a 
              href="https://www.linkedin.com/in/christian-camilo-dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
            >
              [ CONNECT_VIA_LINKEDIN ]
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
