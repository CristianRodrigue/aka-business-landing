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
            Technical review of speed, UX friction, content structure, and delivery flow. 
            The goal is simple: find what slows users down, fix what matters, and make 
            the digital experience feel sharper.
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
            <span className={styles.infoText}>PERFORMANCE_REVIEW: 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
