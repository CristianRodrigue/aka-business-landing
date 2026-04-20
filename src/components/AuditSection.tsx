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
          <span className={styles.label}>// ARCHITECTURAL_AUDIT</span>
          <h2 className={styles.headline}>PERFORMANCE <br /> ENGINEERING</h2>
          <p className={styles.description}>
            Comprehensive infrastructure audits to ensure the technological 
            status your firm requires. Latency elimination and optimization 
            of critical resources in industrial environments.
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
            <span className={styles.infoText}>97_SCORE_VERIFIED: 2024</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
