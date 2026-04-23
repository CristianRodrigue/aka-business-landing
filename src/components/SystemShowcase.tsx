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
  };
}

const projects: Project[] = [
  {
    id: "01",
    title: "DEMO PRO | INDUSTRIAL_LOGISTICS | US",
    description: "High-performance infrastructure developed for a California-based corporation. Optimized for heavy data visualization and real-time operational tracking.",
    metric: "[ PERFORMANCE: 98/100 ]",
    externalLink: "https://direct-demo-landing.vercel.app/",
    fullDetails: {
      problem: "Infrastructure unable to handle real-time logistical telemetry in high-traffic industrial zones.",
      solution: "Implemented a custom SSR architecture with Next.js and distributed caching layers to achieve sub-second content delivery.",
      stack: ["Next.js", "SSR", "Docker", "Nginx", "Redis"],
      metrics: [
        { label: "Lighthouse Score", value: "98/100" },
        { label: "TTFB", value: "0.2ms" },
        { label: "Availability", value: "99.99%" }
      ],
      videoUrl: "https://res.cloudinary.com/drrx9rcec/video/upload/v1776784658/2026-04-19_09-37-07_gt80kb.mp4"
    }
  },
  {
    id: "02",
    title: "AKA_SOUNDS | HONORABLE_ENGINEERING_SELECTION",
    isSpecial: true,
    description: "Custom industrial-grade ecosystem engineered for digital asset delivery. A mission-critical infrastructure designed for speed, security, and conversion.",
    metric: "[ INFRASTRUCTURE: CORE_SENSITIVE ]",
    externalLink: "https://akasounds.com/",
    fullDetails: {
      problem: "Generic platforms like Shopify or WordPress fail to provide the control, performance, and security required for high-end digital asset distribution.",
      solution: "Engineered a custom ecosystem using Next.js and Vercel, eliminating platform fees and achieving performance standards that off-the-shelf solutions cannot match.",
      stack: ["Paddle API", "GCS + Signed URLs", "Resend", "Next.js"],
      metrics: [
        { label: "PageSpeed Score", value: "98/100" },
        { label: "Asset Delivery", value: "Secure_Signed" },
        { label: "Platform Fees", value: "0%" }
      ],
      videoUrl: "https://res.cloudinary.com/drrx9rcec/video/upload/v1776786210/2026-04-19_09-48-08_-_Compressed_with_FlexClip_idkpxu.mp4"
    }
  },
  {
    id: "03",
    title: "COMBAT_SPORTS_E-COMMERCE_ENGINE | P4P",
    description: "High-performance sales engine optimized for conversions. Industrial aesthetic coupled with an ultra-smooth user experience for complex product catalogs.",
    metric: "[ CONVERSION_ENGINE: OPTIMIZED ]",
    externalLink: "https://p4p-store.vercel.app/",
    fullDetails: {
      problem: "Complex product catalogs often suffer from poor performance, leading to high bounce rates and lost conversions in the combat sports market.",
      solution: "Developed an ultra-fast e-commerce engine with an industrial design focus, ensuring a frictionless path to purchase through advanced frontend optimization.",
      stack: ["Next.js", "TailwindCSS", "Framer Motion", "API Engine"],
      metrics: [
        { label: "User Experience", value: "Ultra_Smooth" },
        { label: "Design Level", value: "Industrial" },
        { label: "Latency", value: "Sub-second" }
      ],
      videoUrl: "https://res.cloudinary.com/drrx9rcec/video/upload/v1776784661/2026-04-16_18-01-05_rccyc2.mp4"
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
          <span className={styles.label}>[ 03 // ARCHITECTURES_DEPLOYED ]</span>
          <h2 className={styles.title}>INDUSTRIAL_GRADE <br /> DEPLOYMENTS</h2>
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
