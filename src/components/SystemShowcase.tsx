"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SystemShowcase.module.css";
import ProjectDetail from "./ProjectDetail";

export interface Project {
  id: string;
  title: string;
  description: string;
  metric: string;
  externalLink?: string;
  isSpecial?: boolean;
  fullDetails: {
    problem: string;
    solution: string;
    stack: string[];
    metrics: { label: string; value: string }[];
    videoUrl?: string;
    pagespeedImg?: string;
  };
}

const projects: Project[] = [
  {
    id: "01",
    title: "DEMO PRO | SERVICE BUSINESS | US",
    description: "Fast business web experience built for clear positioning, responsive browsing, and strong PageSpeed presentation.",
    metric: "[ PERFORMANCE: 98/100 ]",
    externalLink: "https://direct-demo-landing.vercel.app/",
    fullDetails: {
      problem: "The business needed a sharper web presence that could load quickly, communicate value clearly, and support lead-generation campaigns.",
      solution: "Built a focused Next.js experience with optimized media, clear sections, and performance-first implementation for desktop and mobile users.",
      stack: ["Next.js", "React", "Responsive UI", "Performance Tuning"],
      metrics: [
        { label: "Lighthouse Score", value: "98/100" },
        { label: "Delivery", value: "Vercel" },
        { label: "UX Focus", value: "Lead Flow" }
      ],
      videoUrl: "https://res.cloudinary.com/drrx9rcec/video/upload/v1776784658/2026-04-19_09-37-07_gt80kb.mp4",
      pagespeedImg: "/pagespeed/pagespeed-demo-desktop.jpeg"
    }
  },
  {
    id: "02",
    title: "AKA_SOUNDS | DIGITAL_PRODUCT_STORE",
    isSpecial: true,
    description: "Custom storefront for digital audio products, built around speed, payments, customer access, and secure file delivery.",
    metric: "[ LAUNCH: 21_DAY_SPRINT ]",
    externalLink: "https://akasounds.com/",
    fullDetails: {
      problem: "Digital audio products needed a direct sales flow with catalog control, payment handling, customer communication, and protected downloads.",
      solution: "Built a custom e-commerce workflow using Next.js and Vercel, connecting payments, email, and signed asset delivery without forcing the brand into a generic template.",
      stack: ["Paddle API", "GCS + Signed URLs", "Resend", "Next.js"],
      metrics: [
        { label: "PageSpeed Score", value: "98/100" },
        { label: "Launch Sprint", value: "21 Days" },
        { label: "Asset Delivery", value: "Signed URLs" }
      ],
      videoUrl: "https://res.cloudinary.com/drrx9rcec/video/upload/v1776786210/2026-04-19_09-48-08_-_Compressed_with_FlexClip_idkpxu.mp4",
      pagespeedImg: "/pagespeed/pagespeed-akasounds-page.jpg"
    }
  },
  {
    id: "03",
    title: "P4P | COMBAT_SPORTS_STORE",
    description: "E-commerce prototype for a combat sports brand, focused on strong visual direction and a smoother product browsing flow.",
    metric: "[ E-COMMERCE: UX_PROTOTYPE ]",
    externalLink: "https://p4p-store.vercel.app/",
    fullDetails: {
      problem: "Product-heavy stores can feel generic, slow, or hard to browse, which weakens trust before a buyer reaches checkout.",
      solution: "Designed and developed a fast storefront prototype with a stronger brand feel, smoother product discovery, and responsive frontend interactions.",
      stack: ["Next.js", "TailwindCSS", "Framer Motion", "API Engine"],
      metrics: [
        { label: "Experience", value: "Responsive" },
        { label: "Design Focus", value: "Brand-Led" },
        { label: "Frontend", value: "Optimized" }
      ],
      videoUrl: "https://res.cloudinary.com/drrx9rcec/video/upload/v1776784661/2026-04-16_18-01-05_rccyc2.mp4",
      pagespeedImg: "/pagespeed/pagespeed-p4p-page.jpg"
    }
  }
];

export default function SystemShowcase() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = projects.find(p => p.id === selectedId);

  // Bloqueo de scroll al abrir el detalle
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedId]);

  return (
    <section className={styles.section}>
      <div className={styles.gridOverlay} />
      
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.label}>[ 03 // SELECTED_BUILDS ]</span>
          <h2 className={styles.title}>FAST_WEB <br /> SYSTEMS</h2>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              layoutId={project.id}
              className={`${styles.card} ${project.isSpecial ? styles.specialCard : ""}`}
              onClick={() => setSelectedId(project.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.h3 layoutId={`title-${project.id}`} className={styles.projectTitle}>{project.title}</motion.h3>
              <motion.p layoutId={`desc-${project.id}`} className={styles.description}>{project.description}</motion.p>
              <motion.span layoutId={`metric-${project.id}`} className={styles.metric}>{project.metric}</motion.span>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onClose={() => setSelectedId(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
