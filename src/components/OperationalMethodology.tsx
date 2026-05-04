"use client";

import { motion } from "framer-motion";
import styles from "./OperationalMethodology.module.css";

const STEPS = [
  {
    num: "01",
    title: "DIAGNOSIS",
    desc: "Review the current site, product flow, content, and technical bottlenecks before deciding what needs to be built or improved."
  },
  {
    num: "02",
    title: "ARCHITECTURE",
    desc: "Define a practical technical plan: pages, components, data flow, integrations, deployment, and the performance targets that matter."
  },
  {
    num: "03",
    title: "DEPLOYMENT",
    desc: "Build the experience with clean frontend execution, stable backend connections, responsive behavior, and polished interaction details."
  },
  {
    num: "04",
    title: "MONITORING",
    desc: "Check speed, usability, forms, analytics signals, and production behavior so the system keeps improving after launch."
  }
];

export default function OperationalMethodology() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>{'// DELIVERY_METHOD'}</span>
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
              <span className={styles.stepNumber}>{`// STEP_${step.num}`}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
