"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import styles from './curriculum.module.css';

type Language = 'en' | 'es';

type ExperienceItem = {
  company: string;
  period: string;
  role: string;
  description: string;
  achievements?: string[];
};

type ProjectItem = {
  type: string;
  title: string;
  description: string;
  stack: string;
};

type TechCategory = {
  title: string;
  items: string[];
};

type CredentialItem = {
  type: string;
  title: string;
  issuer: string;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  }
};

const cvCopy: Record<Language, {
  exit: string;
  title: string;
  location: string;
  sections: {
    summary: string;
    experience: string;
    projects: string;
    toolkit: string;
    credentials: string;
    contact: string;
  };
  summary: string;
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  tech: TechCategory[];
  credentials: CredentialItem[];
  contact: {
    email: string;
    phone: string;
    phoneNote: string;
    networks: string;
  };
  download: string;
  pdfHref: string;
}> = {
  en: {
    exit: 'EXIT_TO_MAIN',
    title: 'SYSTEMS ENGINEER (COPNIA) // FULL-STACK DEVELOPER // PERFORMANCE-FOCUSED WEB SYSTEMS',
    location: 'Colombia / Remote',
    sections: {
      summary: '[ 01_EXECUTIVE_SUMMARY ]',
      experience: '[ 02_STRATEGIC_EXPERIENCE ]',
      projects: '[ 03_SELECTED_PROJECTS ]',
      toolkit: '[ 04_TECHNOLOGICAL_TOOLKIT ]',
      credentials: '[ 05_CREDENTIALS_LOG ]',
      contact: '[ 06_CONTACT_DIRECT ]'
    },
    summary:
      'Systems Engineer with COPNIA professional registration and founder of AKA Business, focused on full-stack web systems, performance optimization, and automation-ready digital workflows. I build practical platforms for businesses that need reliable interfaces, clear technical execution, and measurable improvements in speed, usability, and delivery quality.',
    experiences: [
      {
        company: 'AKA BUSINESS',
        period: 'JAN 2026 - PRESENT // FOUNDER',
        role: 'FULL-STACK DEVELOPMENT & WEB SYSTEMS',
        description:
          'Building a technical studio for business websites, e-commerce flows, and automation-ready digital systems. Responsible for discovery, UX direction, frontend delivery, backend integration, deployment, and performance tuning for client-facing platforms.'
      },
      {
        company: 'AKA SOUNDS',
        period: 'INDEPENDENT PROJECT // 21-DAY BUILD',
        role: 'E-COMMERCE PRODUCT DEVELOPMENT',
        description:
          'Designed and launched an e-commerce platform for digital audio products in a focused 21-day sprint, handling the technical build and product workflow from concept to release.',
        achievements: [
          'Product structure for sample packs, downloadable assets, and multi-line catalog growth.',
          'Payment, authentication, and delivery flows prepared for international customers.',
          'Performance-focused frontend experience for producers and audio engineering clients.'
        ]
      },
      {
        company: 'RAMA JUDICIAL',
        period: 'APR 2025 - NOV 2025 // AUDITOR',
        role: 'SYSTEM SUPPORT & INFORMATION CONTROL',
        description:
          'Supported technical operations and information control processes in a public-sector legal environment where reliability, confidentiality, and traceability were essential.',
        achievements: [
          'Assisted with audit routines, records review, and information flow verification.',
          'Provided technical support for users and systems involved in legal service continuity.'
        ]
      },
      {
        company: 'GLOBAL CONSULTANCY',
        period: 'FREELANCE // USA & LATAM CLIENTS',
        role: 'WEB PERFORMANCE & DELIVERY',
        description:
          'Delivered websites and digital improvements for clients in construction, retail, and service businesses. Focused on clean implementation, Core Web Vitals, responsive interfaces, and practical conversion improvements.'
      },
      {
        company: 'PROCOLOMBIA',
        period: 'JAN 2023 - JUL 2023 // THESIS PROJECT',
        role: 'FULL-STACK SYSTEM DEVELOPMENT',
        description:
          'Developed a PQR management system for complaints and requests as an academic full-stack project connected to institutional service workflows.',
        achievements: [
          'Full-stack development using .NET Core for the backend and Angular for the interface.',
          'Structured request tracking, user flows, and service information handling.'
        ]
      }
    ],
    projects: [
      {
        type: 'E-COMMERCE / DIGITAL PRODUCTS',
        title: 'AKA Sounds',
        description:
          'Built and launched a storefront for digital audio assets, covering catalog structure, payment flow, customer access, and product delivery.',
        stack: 'Next.js / React / Payments / Digital Delivery'
      },
      {
        type: 'INSTITUTIONAL SYSTEM',
        title: 'PQR Management System',
        description:
          'Developed a request-management workflow for complaints and service cases, with backend logic, interface structure, and traceable information handling.',
        stack: '.NET Core / Angular / SQL / Process Design'
      },
      {
        type: 'PERFORMANCE & BUSINESS WEBSITES',
        title: 'Client Web Builds',
        description:
          'Delivered fast, responsive web experiences for service businesses, focused on clear positioning, Core Web Vitals, and practical conversion improvements.',
        stack: 'React / Next.js / SEO Basics / Web Performance'
      }
    ],
    tech: [
      { title: 'ARCHITECTURE & CORE', items: ['Node.js', 'NestJS', 'React', 'Angular', '.NET Core'] },
      { title: 'AI AUGMENTED DEV', items: ['AI-Assisted Coding', 'Rapid Prototyping', 'Workflow Automation'] },
      { title: 'INFRASTRUCTURE', items: ['Cloud Deployment', 'SQL / NoSQL', 'CI / CD Pipelines', 'Performance Auditing'] }
    ],
    credentials: [
      { type: 'ACADEMIC_DEGREE', title: 'SYSTEMS ENGINEERING', issuer: 'POLITECNICO GRANCOLOMBIANO // COPNIA PROFESSIONAL CARD' },
      { type: 'MANAGEMENT_CERT', title: 'SCRUM CERTIFICATE', issuer: 'AGILE PROJECT FOUNDATIONS' },
      { type: 'AI_RESEARCH', title: 'AI EXPLORER CERTIFICATE', issuer: 'TALENTO TECH // MINTIC' },
      { type: 'COMMUNICATION', title: 'ENGLISH & SPANISH', issuer: 'CLIENT COMMUNICATION & TECHNICAL DOCUMENTATION' }
    ],
    contact: {
      email: 'EMAIL',
      phone: 'PHONE',
      phoneNote: '(WhatsApp / Email Preferred for initial contact)',
      networks: 'NETWORKS'
    },
    download: 'DOWNLOAD_DOSSIER_PDF',
    pdfHref: '/Christian-Camilo-CV-en.pdf'
  },
  es: {
    exit: 'VOLVER_AL_INICIO',
    title: 'INGENIERO DE SISTEMAS (COPNIA) // DESARROLLADOR FULL-STACK // SISTEMAS WEB DE ALTO RENDIMIENTO',
    location: 'Colombia / Remoto',
    sections: {
      summary: '[ 01_RESUMEN_PROFESIONAL ]',
      experience: '[ 02_EXPERIENCIA_ESTRATEGICA ]',
      projects: '[ 03_PROYECTOS_SELECCIONADOS ]',
      toolkit: '[ 04_HERRAMIENTAS_TECNICAS ]',
      credentials: '[ 05_CREDENCIALES ]',
      contact: '[ 06_CONTACTO_DIRECTO ]'
    },
    summary:
      'Ingeniero de Sistemas con tarjeta profesional COPNIA y fundador de AKA Business, enfocado en sistemas web full-stack, optimización de rendimiento y flujos digitales preparados para automatización. Construyo plataformas prácticas para negocios que necesitan interfaces confiables, ejecución técnica clara y mejoras medibles en velocidad, usabilidad y calidad de entrega.',
    experiences: [
      {
        company: 'AKA BUSINESS',
        period: 'ENE 2026 - PRESENTE // FUNDADOR',
        role: 'DESARROLLO FULL-STACK Y SISTEMAS WEB',
        description:
          'Construcción de un estudio técnico para sitios web empresariales, flujos de e-commerce y sistemas digitales preparados para automatización. Responsable de descubrimiento, dirección UX, frontend, integración backend, despliegue y optimización de rendimiento para plataformas orientadas al cliente.'
      },
      {
        company: 'AKA SOUNDS',
        period: 'PROYECTO INDEPENDIENTE // CONSTRUCCION EN 21 DIAS',
        role: 'DESARROLLO DE PRODUCTO E-COMMERCE',
        description:
          'Diseñé y lancé una plataforma de e-commerce para productos digitales de audio en un sprint enfocado de 21 días, cubriendo la construcción técnica y el flujo de producto desde el concepto hasta la publicación.',
        achievements: [
          'Estructura de producto para sample packs, activos descargables y crecimiento de catálogo.',
          'Flujos de pago, autenticación y entrega preparados para clientes internacionales.',
          'Experiencia frontend orientada al rendimiento para productores y clientes de audio.'
        ]
      },
      {
        company: 'RAMA JUDICIAL',
        period: 'ABR 2025 - NOV 2025 // AUDITOR',
        role: 'SOPORTE DE SISTEMAS Y CONTROL DE INFORMACION',
        description:
          'Apoyé operaciones técnicas y procesos de control de información en un entorno legal del sector público donde la confiabilidad, confidencialidad y trazabilidad eran esenciales.',
        achievements: [
          'Apoyo en rutinas de auditoría, revisión de registros y verificación de flujos de información.',
          'Soporte técnico a usuarios y sistemas involucrados en la continuidad del servicio legal.'
        ]
      },
      {
        company: 'CONSULTORIA GLOBAL',
        period: 'FREELANCE // CLIENTES USA Y LATAM',
        role: 'RENDIMIENTO WEB Y ENTREGA TECNICA',
        description:
          'Entregué sitios web y mejoras digitales para clientes en construcción, retail y servicios. Enfoque en implementación limpia, Core Web Vitals, interfaces responsivas y mejoras prácticas de conversión.'
      },
      {
        company: 'PROCOLOMBIA',
        period: 'ENE 2023 - JUL 2023 // PROYECTO DE GRADO',
        role: 'DESARROLLO DE SISTEMA FULL-STACK',
        description:
          'Desarrollé un sistema de gestión PQR para quejas y solicitudes como proyecto académico full-stack conectado con flujos institucionales de servicio.',
        achievements: [
          'Desarrollo full-stack usando .NET Core en backend y Angular para la interfaz.',
          'Estructuración de seguimiento de solicitudes, flujos de usuario y manejo de información de servicio.'
        ]
      }
    ],
    projects: [
      {
        type: 'E-COMMERCE / PRODUCTOS DIGITALES',
        title: 'AKA Sounds',
        description:
          'Construí y lancé una tienda para activos digitales de audio, cubriendo estructura de catálogo, flujo de pago, acceso de clientes y entrega de producto.',
        stack: 'Next.js / React / Pagos / Entrega Digital'
      },
      {
        type: 'SISTEMA INSTITUCIONAL',
        title: 'Sistema de Gestion PQR',
        description:
          'Desarrollé un flujo de gestión de solicitudes para quejas y casos de servicio, con lógica backend, estructura de interfaz y manejo trazable de información.',
        stack: '.NET Core / Angular / SQL / Diseño de Procesos'
      },
      {
        type: 'RENDIMIENTO Y WEBS EMPRESARIALES',
        title: 'Construcciones Web para Clientes',
        description:
          'Entregué experiencias web rápidas y responsivas para negocios de servicios, enfocadas en posicionamiento claro, Core Web Vitals y mejoras prácticas de conversión.',
        stack: 'React / Next.js / SEO Basico / Rendimiento Web'
      }
    ],
    tech: [
      { title: 'ARQUITECTURA Y CORE', items: ['Node.js', 'NestJS', 'React', 'Angular', '.NET Core'] },
      { title: 'DESARROLLO AUMENTADO CON IA', items: ['Programacion asistida con IA', 'Prototipado rapido', 'Automatizacion de flujos'] },
      { title: 'INFRAESTRUCTURA', items: ['Despliegue cloud', 'SQL / NoSQL', 'Pipelines CI / CD', 'Auditoria de rendimiento'] }
    ],
    credentials: [
      { type: 'TITULO_ACADEMICO', title: 'INGENIERIA DE SISTEMAS', issuer: 'POLITECNICO GRANCOLOMBIANO // TARJETA PROFESIONAL COPNIA' },
      { type: 'CERT_GESTION', title: 'CERTIFICADO SCRUM', issuer: 'BASES DE GESTION AGIL DE PROYECTOS' },
      { type: 'INVESTIGACION_IA', title: 'CERTIFICADO AI EXPLORER', issuer: 'TALENTO TECH // MINTIC' },
      { type: 'COMUNICACION', title: 'INGLES Y ESPAÑOL', issuer: 'COMUNICACION CON CLIENTES Y DOCUMENTACION TECNICA' }
    ],
    contact: {
      email: 'CORREO',
      phone: 'TELEFONO',
      phoneNote: '(WhatsApp / Correo preferidos para contacto inicial)',
      networks: 'REDES'
    },
    download: 'DESCARGAR_DOSSIER_PDF',
    pdfHref: '/Christian-Camilo-CV-es.pdf'
  }
};

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en';
  }

  return new URLSearchParams(window.location.search).get('lang') === 'es' ? 'es' : 'en';
}

export default function CurriculumPage() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const copy = cvCopy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const handleLanguageChange = (nextLanguage: Language) => {
    setLanguage(nextLanguage);

    const url = new URL(window.location.href);
    url.searchParams.set('lang', nextLanguage);
    window.history.replaceState(null, '', url);
  };

  return (
    <main className={styles.page}>
      <Link href="/" className={styles.backButton}>
        <span>←</span> {copy.exit}
      </Link>

      <div className={styles.languageSwitch} aria-label="CV language">
        {(['en', 'es'] as const).map((option) => (
          <button
            key={option}
            type="button"
            className={option === language ? styles.languageButtonActive : styles.languageButton}
            onClick={() => handleLanguageChange(option)}
            aria-pressed={option === language}
          >
            {option.toUpperCase()}
          </button>
        ))}
      </div>

      <motion.div
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.header className={styles.header} variants={itemVariants}>
          <h1 className={styles.name}>CHRISTIAN<br />CAMILO</h1>
          <p className={styles.title}>{copy.title}</p>
          <div className={styles.headerContact}>
            <a href="mailto:christian@akabusiness.tech">christian@akabusiness.tech</a>
            <a href="tel:+573209538768">+57 320 953 8768</a>
            <a href="https://github.com/CristianRodrigue" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/christian-camilo-dev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span>{copy.location}</span>
          </div>
        </motion.header>

        <motion.section className={styles.section} variants={itemVariants}>
          <span className={styles.sectionLabel}>{copy.sections.summary}</span>
          <p className={styles.summaryText}>{copy.summary}</p>
        </motion.section>

        <motion.section className={styles.section} variants={itemVariants}>
          <span className={styles.sectionLabel}>{copy.sections.experience}</span>

          {copy.experiences.map((item) => (
            <div className={styles.experienceItem} key={`${item.company}-${item.period}`}>
              <div className={styles.itemMeta}>
                <span className={styles.company}>{item.company}</span>
                <span className={styles.period}>{item.period}</span>
                <span className={styles.role}>{item.role}</span>
              </div>
              <div className={styles.description}>
                {item.description}
                {item.achievements && (
                  <ul className={styles.achievements}>
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </motion.section>

        <motion.section className={styles.section} variants={itemVariants}>
          <span className={styles.sectionLabel}>{copy.sections.projects}</span>

          <div className={styles.projectGrid}>
            {copy.projects.map((project) => (
              <div className={styles.projectCard} key={project.title}>
                <span className={styles.projectType}>{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.projectStack}>{project.stack}</div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section className={styles.section} variants={itemVariants}>
          <span className={styles.sectionLabel}>{copy.sections.toolkit}</span>

          <div className={styles.techGrid}>
            {copy.tech.map((category) => (
              <div className={styles.techCategory} key={category.title}>
                <h3>{category.title}</h3>
                <div className={styles.techList}>
                  {category.items.map((item) => (
                    <span className={styles.techTag} key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section className={styles.section} variants={itemVariants}>
          <span className={styles.sectionLabel}>{copy.sections.credentials}</span>

          <div className={styles.credentialsGrid}>
            {copy.credentials.map((credential) => (
              <div className={styles.credentialCard} key={credential.type}>
                <span className={styles.credType}>{credential.type}</span>
                <div className={styles.credTitle}>{credential.title}</div>
                <div className={styles.credIssuer}>{credential.issuer}</div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section className={styles.section} variants={itemVariants}>
          <span className={styles.sectionLabel}>{copy.sections.contact}</span>

          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>{copy.contact.email}</span>
              <a href="mailto:christian@akabusiness.tech" className={styles.contactValue}>christian@akabusiness.tech</a>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>{copy.contact.phone}</span>
              <a href="tel:+573209538768" className={styles.contactValue}>+57 320 953 8768</a>
              <span className={styles.contactNote}>{copy.contact.phoneNote}</span>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>{copy.contact.networks}</span>
              <div className={styles.socialLinks}>
                <a href="https://github.com/CristianRodrigue" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  <span>GITHUB</span>
                </a>
                <a href="https://www.linkedin.com/in/christian-camilo-dev" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section className={styles.downloadSection} variants={itemVariants}>
          <a className={styles.downloadBtn} href={copy.pdfHref} download>
            {copy.download}
          </a>
        </motion.section>
      </motion.div>
    </main>
  );
}
