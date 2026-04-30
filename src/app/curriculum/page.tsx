"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import styles from './curriculum.module.css';

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

export default function CurriculumPage() {
  return (
    <main className={styles.page}>
      <Link href="/" className={styles.backButton}>
        <span>←</span> EXIT_TO_MAIN
      </Link>

      <motion.div 
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* HEADER */}
        <motion.header className={styles.header} variants={itemVariants}>
          <h1 className={styles.name}>CHRISTIAN<br />CAMILO</h1>
          <p className={styles.title}>
            INFRASTRUCTURE ARCHITECT // FULL STACK SOLUTIONS // AI STRATEGIST
          </p>
        </motion.header>

        {/* PROFILE */}
        <motion.section className={styles.section} variants={itemVariants}>
          <span className={styles.sectionLabel}>[ 01_EXECUTIVE_SUMMARY ]</span>
          <p className={styles.summaryText}>
            Architect of high-performance digital ecosystems specialized in accelerating development cycles through 
            Augmented AI. Expert in transforming complex business requirements into scalable, surgical-grade 
            infrastructures with a focus on zero technical debt and extreme conversion optimization.
          </p>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section className={styles.section} variants={itemVariants}>
          <span className={styles.sectionLabel}>[ 02_STRATEGIC_EXPERIENCE ]</span>

          <div className={styles.experienceItem}>
            <div className={styles.itemMeta}>
              <span className={styles.company}>AKA BUSINESS</span>
              <span className={styles.period}>PRESENT // FOUNDER</span>
              <span className={styles.role}>LEAD INFRASTRUCTURE ARCHITECT</span>
            </div>
            <div className={styles.description}>
              Founding and engineering a specialized consultancy for the industrial 0.1%. 
              Designing digital nervous systems for modern industry, focusing on performance, 
              security, and technical dominance.
            </div>
          </div>

          <div className={styles.experienceItem}>
            <div className={styles.itemMeta}>
              <span className={styles.company}>AKA SOUNDS</span>
              <span className={styles.period}>CEO & LEAD DEVELOPER</span>
              <span className={styles.role}>E-COMMERCE ECOSYSTEM DESIGN</span>
            </div>
            <div className={styles.description}>
              Engineered and deployed a high-scale e-commerce platform in a record 21-day sprint.
              <ul className={styles.achievements}>
                <li>Modular architecture for multi-line digital product distribution (Sample Packs).</li>
                <li>Seamless integration of international payment gateways and encrypted auth systems.</li>
                <li>Zero-downtime infrastructure for global audio engineering clients.</li>
              </ul>
            </div>
          </div>

          <div className={styles.experienceItem}>
            <div className={styles.itemMeta}>
              <span className={styles.company}>RAMA JUDICIAL</span>
              <span className={styles.period}>AUDITOR & TECH SUPPORT</span>
              <span className={styles.role}>CRITICAL SYSTEMS INTEGRITY</span>
            </div>
            <div className={styles.description}>
              Managed auditing and technical integrity for high-stakes information systems.
              <ul className={styles.achievements}>
                <li>Supervision of critical legal databases and information flow security.</li>
                <li>Specialized technical support ensuring 24/7 continuity for state legal processes.</li>
              </ul>
            </div>
          </div>

          <div className={styles.experienceItem}>
            <div className={styles.itemMeta}>
              <span className={styles.company}>GLOBAL CONSULTANCY</span>
              <span className={styles.period}>FREELANCE / USA & LATAM</span>
              <span className={styles.role}>PERFORMANCE ENGINEERING</span>
            </div>
            <div className={styles.description}>
              Developed precision platforms for the US Construction sector and Colombian Retail.
              Focus on Core Web Vitals, extreme performance, and data-driven UX.
            </div>
          </div>

          <div className={styles.experienceItem}>
            <div className={styles.itemMeta}>
              <span className={styles.company}>PROCOLOMBIA</span>
              <span className={styles.period}>THESIS PROJECT // DEV</span>
              <span className={styles.role}>SYSTEM ARCHITECTURE</span>
            </div>
            <div className={styles.description}>
              Engineered a high-performance PQR (Complaints & Requests) management system.
              <ul className={styles.achievements}>
                <li>Full-stack development using .NET Core for the backend and Angular for the interface.</li>
                <li>Strategic implementation of information flow for institutional service optimization.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* TECH ARSENAL */}
        <motion.section className={styles.section} variants={itemVariants}>
          <span className={styles.sectionLabel}>[ 03_TECHNOLOGICAL_ARSENAL ]</span>
          
          <div className={styles.techGrid}>
            <div className={styles.techCategory}>
              <h3>ARCHITECTURE & CORE</h3>
              <div className={styles.techList}>
                <span className={styles.techTag}>Node.js</span>
                <span className={styles.techTag}>NestJS</span>
                <span className={styles.techTag}>React</span>
                <span className={styles.techTag}>Angular</span>
                <span className={styles.techTag}>.NET Core</span>
              </div>
            </div>

            <div className={styles.techCategory}>
              <h3>AI AUGMENTED DEV</h3>
              <div className={styles.techList}>
                <span className={styles.techTag}>LLM Orchestration</span>
                <span className={styles.techTag}>Rapid Prototyping</span>
                <span className={styles.techTag}>AI-Driven Refactoring</span>
              </div>
            </div>

            <div className={styles.techCategory}>
              <h3>INFRASTRUCTURE</h3>
              <div className={styles.techList}>
                <span className={styles.techTag}>AWS Ecosystem</span>
                <span className={styles.techTag}>SQL / NoSQL</span>
                <span className={styles.techTag}>CI / CD Pipelines</span>
                <span className={styles.techTag}>System Auditing</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CREDENTIALS */}
        <motion.section className={styles.section} variants={itemVariants}>
          <span className={styles.sectionLabel}>[ 04_CREDENTIALS_LOG ]</span>
          
          <div className={styles.credentialsGrid}>
            <div className={styles.credentialCard}>
              <span className={styles.credType}>ACADEMIC_DEGREE</span>
              <div className={styles.credTitle}>SYSTEMS ENGINEERING</div>
              <div className={styles.credIssuer}>UNIVERSIDAD (CO) // COPNIA REGISTERED</div>
            </div>

            <div className={styles.credentialCard}>
              <span className={styles.credType}>MANAGEMENT_CERT</span>
              <div className={styles.credTitle}>SCRUM CERTIFICATE</div>
              <div className={styles.credIssuer}>AGILE METHODOLOGY SPECIALIST</div>
            </div>

            <div className={styles.credentialCard}>
              <span className={styles.credType}>AI_RESEARCH</span>
              <div className={styles.credTitle}>AI EXPLORER CERTIFICATE</div>
              <div className={styles.credIssuer}>TALENTO TECH // MINTIC</div>
            </div>

            <div className={styles.credentialCard}>
              <span className={styles.credType}>COMMUNICATION</span>
              <div className={styles.credTitle}>ENGLISH & SPANISH</div>
              <div className={styles.credIssuer}>PROFESSIONAL BILINGUAL PROFICIENCY</div>
            </div>
          </div>
        </motion.section>

        {/* CONTACT & CHANNELS */}
        <motion.section className={styles.section} variants={itemVariants}>
          <span className={styles.sectionLabel}>[ 05_CONTACT_DIRECT ]</span>
          
          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>EMAIL</span>
              <a href="mailto:christian@akabusiness.tech" className={styles.contactValue}>christian@akabusiness.tech</a>
            </div>
            
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>PHONE</span>
              <a href="tel:+573209538768" className={styles.contactValue}>+57 320 953 8768</a>
              <span className={styles.contactNote}>(WhatsApp / Email Preferred for initial contact)</span>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>NETWORKS</span>
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

        {/* FOOTER */}
        <motion.section className={styles.downloadSection} variants={itemVariants}>
          <button className={styles.downloadBtn} onClick={() => window.print()}>
            GENERATE_DOSSIER_PDF
          </button>
        </motion.section>
      </motion.div>
    </main>
  );
}
