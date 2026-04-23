"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { X, Cpu, Server, Activity } from "lucide-react";
import styles from "./ProjectDetail.module.css";
import { Project } from "./SystemShowcase";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <motion.div 
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        layoutId={project.id}
        className={styles.cardExpanded}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={20} />
        </button>

        <div className={styles.content}>
          {/* Media Column */}
          <div className={styles.mediaCol}>
            <div className={styles.videoWrapper}>
              <video 
                key={project.fullDetails.videoUrl}
                autoPlay 
                muted 
                loop 
                playsInline
                src={project.fullDetails.videoUrl || "https://res.cloudinary.com/drrx9rcec/video/upload/v1776784658/2026-04-19_09-37-07_gt80kb.mp4"}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className={styles.imageGrid}>
              {project.fullDetails.pagespeedImg ? (
                <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                  <Image 
                    src={project.fullDetails.pagespeedImg} 
                    alt="PageSpeed Performance Report" 
                    fill
                    style={{ objectFit: 'cover', opacity: 0.7 }} 
                  />
                  <div style={{ 
                    position: 'absolute', 
                    top: '10px', 
                    left: '10px', 
                    background: 'rgba(0,0,0,0.8)', 
                    padding: '4px 8px', 
                    fontSize: '0.5rem', 
                    fontFamily: 'var(--font-code)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    zIndex: 2
                  }}>
                    [ PERFORMANCE_REPORT_SNAPSHOT ]
                  </div>
                </div>
              ) : (
                <div className={styles.imagePlaceholder}>[ DATA_VIZ_RENDER ]</div>
              )}
              <div className={styles.imagePlaceholder}>[ AUDIT_LOG_SNAPSHOT ]</div>
            </div>
          </div>

          {/* Details Column */}
          <div className={styles.detailsCol}>
            <div className={styles.header}>
              <span className={styles.caseStudyLabel}>[ CASE_STUDY_AUDIT ]</span>
              <motion.h2 layoutId={`title-${project.id}`} className={styles.title}>
                {project.title}
              </motion.h2>
            </div>

            <div className={styles.infoSection}>
              <span className={styles.sectionTitle}>// THE_CHALLENGE</span>
              <p className={styles.text}>{project.fullDetails.problem}</p>
            </div>

            <div className={styles.infoSection}>
              <span className={styles.sectionTitle}>// ARCHITECTURAL_SOLUTION</span>
              <p className={styles.text}>{project.fullDetails.solution}</p>
            </div>

            <div className={styles.infoSection}>
              <span className={styles.sectionTitle}>// ENGINEERING_STACK</span>
              <div className={styles.stack}>
                {project.fullDetails.stack.map(tech => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>

            <div className={styles.metricsGrid}>
              {project.fullDetails.metrics.map((m, idx) => (
                <div key={idx} className={styles.metricItem}>
                  <span className={styles.metricValue}>{m.value}</span>
                  <span className={styles.metricLabel}>{m.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.infoSection}>
              <span className={styles.sectionTitle}>// NODE_INFRASTRUCTURE</span>
              <div style={{ 
                height: "80px", 
                border: "1px dashed rgba(255,255,255,0.1)", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between",
                padding: "0 2rem",
                marginBottom: "1rem"
              }}>
                <Cpu size={24} color="#333" />
                <div style={{ width: "50px", height: "1px", background: "rgba(255,255,255,0.05)" }} />
                <Server size={24} color="#333" />
                <div style={{ width: "50px", height: "1px", background: "rgba(255,255,255,0.05)" }} />
                <Activity size={24} color="#333" />
              </div>
            </div>

            {project.externalLink && (
              <motion.a 
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.deployLink}
                whileHover={{ gap: "1.5rem", background: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.98 }}
              >
                [ LIVE_DEPLOYMENT_ACCESS ]
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
