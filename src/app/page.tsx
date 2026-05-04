import Link from "next/link";
import SplineHero from "@/components/SplineHero";
import InfoCards from "@/components/InfoCards";
import AuditSection from "@/components/AuditSection";
import SystemShowcase from "@/components/SystemShowcase";
import OperationalMethodology from "@/components/OperationalMethodology";
import FounderSection from "@/components/FounderSection";
import DiagnosticForm from "@/components/DiagnosticForm";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  return (
    <main>
      {/* SEO/AIO Authority Header (Hidden) */}
      <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: '0' }}>
        AKA Business | Full-Stack Web Systems, Performance and Automation
      </h1>

      {/* Sección Hero 3D - Fondo Fijo */}
      <SplineHero />

      {/* Secciones de Ingeniería y Datos - Panel de Cristal Deslizable */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        marginTop: '100vh',
        background: 'rgba(5, 5, 5, 0.98)', /* Fondo casi sólido para máximo rendimiento */
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: '0 -20px 40px rgba(0,0,0,0.5)'
      }}>
        <InfoCards />
        <AuditSection />
        <SystemShowcase />
        <OperationalMethodology />
        <FounderSection />
        <DiagnosticForm />

        <footer style={{
          padding: '6rem 2rem',
          textAlign: 'center',
          borderTop: 'var(--border-surgical)',
          color: 'var(--text-dark)',
          fontSize: '0.7rem',
          fontFamily: 'var(--font-code)',
          letterSpacing: '0.2em'
        }}>
          <div>© 2026 AKA_BUSINESS // ALL_RIGHTS_RESERVED // DIGITAL_INFRASTRUCTURE_V.1</div>
          <a
            href="mailto:christian@akabusiness.tech"
            className="footerLink"
            style={{
              display: 'inline-flex',
              marginTop: '1.5rem',
              color: 'var(--text-muted)',
              textDecoration: 'none'
            }}
          >
            christian@akabusiness.tech
          </a>
          
          <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '2rem', alignItems: 'center' }}>
            <a 
              href="https://www.linkedin.com/in/christian-camilo-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footerLink"
              style={{ 
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <a 
              href="https://github.com/CristianRodrigue" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footerLink"
              style={{ 
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <Link 
              href="/curriculum" 
              className="footerLink"
              style={{ 
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none'
              }}
              aria-label="Dossier CV"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
