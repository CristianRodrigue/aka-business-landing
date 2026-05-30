"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Target } from "lucide-react";
import styles from "./InfoCards.module.css";

const CARDS = [
  {
    index: "// INDEX_01",
    title: "FASTER WEBSITES",
    desc: "High-performance pages that load quickly, explain the offer clearly, and reduce the friction between first visit and first contact.",
    outcome: "Outcome: speed, clarity, trust",
    icon: Shield,
  },
  {
    index: "// INDEX_02",
    title: "BUSINESS AUTOMATION",
    desc: "Intake flows, customer actions, payments, notifications, and AI-assisted workflows designed to remove repetitive manual work.",
    outcome: "Outcome: fewer manual steps",
    icon: Target,
  },
  {
    index: "// INDEX_03",
    title: "SCALABLE SYSTEMS",
    desc: "Digital products built with maintainable foundations, stable deployment paths, and room for integrations as the company grows.",
    outcome: "Outcome: reliable growth",
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
        <span className={styles.cardOutcome}>{card.outcome}</span>
      </div>
    </motion.div>
  );
}

export default function InfoCards() {
  return (
    <section className={styles.section}>
      <div className={styles.titleArea}>
        <p className={styles.subtitle}>{'// CORE_PROPOSITION'}</p>
        <h2 className={styles.headline}>WHAT AKA BUILDS</h2>
      </div>
      
      <div className={styles.grid}>
        {CARDS.map((card, i) => (
          <Card key={i} card={card} i={i} />
        ))}
      </div>
    </section>
  );
}
