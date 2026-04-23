"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./FounderSection.module.css";

export default function FounderSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            src="/founder.jpg" 
            alt="Christian Camilo - Founding Architect" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.overlay} />
        </motion.div>

        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className={styles.label}>[ FOUNDING_ARCHITECT_LOG ]</span>
          <h2 className={styles.quote}>
            "SOLID INFRASTRUCTURE. FLYING IDEAS. ALL IN ONE PLACE."
          </h2>
          <p className={styles.bio}>
            Specialized in engineering high-performance digital ecosystems for the 0.1% of industrial firms. 
            My focus is on eliminating technical debt and building architectures that don't just scale, but dominate.
          </p>
          <div className={styles.signature}>
            <span className={styles.name}>CHRISTIAN CAMILO</span>
            <span className={styles.role}>FOUNDER // INFRASTRUCTURE ARCHITECT</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
