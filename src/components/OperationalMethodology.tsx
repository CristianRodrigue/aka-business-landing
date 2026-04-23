"use client";

import { motion } from "framer-motion";
import styles from "./OperationalMethodology.module.css";

const STEPS = [
  {
    num: "01",
    title: "DIAGNOSIS",
    desc: "In-depth audit of existing nodes and bottlenecks. We identify the critical failure points before moving a single line of code."
  },
  {
    num: "02",
    title: "ARCHITECTURE",
    desc: "Design of a high-performance blueprint. Custom SSR engines, caching layers, and distributed infrastructure tailored for scale."
  },
  {
    num: "03",
    title: "DEPLOYMENT",
    desc: "Execution with surgical precision. Implementation of the stack under mission-critical standards for industrial-grade stability."
  },
  {
    num: "04",
    title: "MONITORING",
    desc: "Real-time telemetry and optimization. Constant oversight of system health to ensure sub-second performance in all conditions."
  }
];

export default function OperationalMethodology() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>[ OPERATIONAL_METHODOLOGY_V1.0 ]</span>
        <div className={styles.grid}>
          {STEPS.map((step, idx) => (
            <motion.div 
              key={idx}
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <span className={styles.stepNumber}>// STEP_{step.num}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
