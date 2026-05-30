"use client";

import { motion } from "framer-motion";
import styles from "./AuditSection.module.css";

export default function AuditSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.label}>{'// PERFORMANCE_AUDIT'}</span>
          <h2 className={styles.headline}>PERFORMANCE <br /> ENGINEERING</h2>
          <p className={styles.description}>
            A technical review of load speed, Core Web Vitals, UX friction, content structure, 
            and conversion paths. The goal is simple: identify what slows users down, prioritize 
            what matters, and turn the site into a sharper business system.
          </p>
        </motion.div>

        <motion.div 
          className={styles.videoFrame}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className={styles.videoInner}>
            <div className={styles.scanLine} />
            <div className={styles.auditHeader}>
              <span className={styles.infoText}>PERFORMANCE_REVIEW: 2026</span>
              <span className={styles.auditStatus}>DIAGNOSTIC_READY</span>
            </div>
            <div className={styles.metricGrid}>
              <div className={styles.metricCell}>
                <strong>98</strong>
                <span>Target Score</span>
              </div>
              <div className={styles.metricCell}>
                <strong>&lt;1.8s</strong>
                <span>LCP Goal</span>
              </div>
              <div className={styles.metricCell}>
                <strong>0</strong>
                <span>Critical Flow Blocks</span>
              </div>
              <div className={styles.metricCell}>
                <strong>24h</strong>
                <span>Audit Window</span>
              </div>
            </div>
            <div className={styles.architectureLine}>
              <span>TRAFFIC</span>
              <i />
              <span>INTERFACE</span>
              <i />
              <span>CONVERSION</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
