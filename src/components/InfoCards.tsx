"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Target } from "lucide-react";
import styles from "./InfoCards.module.css";

const CARDS = [
  {
    index: "// INDEX_01",
    title: "RELIABLE FOUNDATIONS",
    desc: "Clean, maintainable web systems built with sensible security, stable deployments, and fewer moving parts for the business to worry about.",
    icon: Shield,
  },
  {
    index: "// INDEX_02",
    title: "PERFORMANCE THAT SELLS",
    desc: "Fast pages, clear user flows, and practical conversion improvements for visitors who need to understand, trust, and act quickly.",
    icon: Target,
  },
  {
    index: "// INDEX_03",
    title: "AUTOMATION-READY DELIVERY",
    desc: "Web platforms prepared for integrations, content workflows, payment flows, and AI-assisted operations as the business grows.",
    icon: Zap,
  },
];

function Card({ card, i }: { card: typeof CARDS[0], i: number }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.cardIndex}>{card.index}</div>
      
      <div className={styles.cardContent}>
        <div className={styles.cardIcon}>
          <card.icon size={28} strokeWidth={1.5} />
        </div>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <p className={styles.cardDesc}>{card.desc}</p>
      </div>
    </motion.div>
  );
}

export default function InfoCards() {
  return (
    <section className={styles.section}>
      <div className={styles.titleArea}>
        <p className={styles.subtitle}>{'// CORE_PROPOSITION'}</p>
        <h2 className={styles.headline}>WHAT GETS BUILT</h2>
      </div>
      
      <div className={styles.grid}>
        {CARDS.map((card, i) => (
          <Card key={i} card={card} i={i} />
        ))}
      </div>
    </section>
  );
}
