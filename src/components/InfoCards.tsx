"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Target } from "lucide-react";
import styles from "./InfoCards.module.css";

const CARDS = [
  {
    index: "// INDEX_01",
    title: "INDUSTRIAL-GRADE SECURITY",
    desc: "Unbreakable architectures designed to mitigate critical risks and guarantee the integrity of your digital assets under any condition.",
    icon: Shield,
  },
  {
    index: "// INDEX_02",
    title: "OPTIMIZED ACQUISITION",
    desc: "Technical conversion engines that transform specialized traffic into measurable and scalable business results.",
    icon: Target,
  },
  {
    index: "// INDEX_03",
    title: "TECHNOLOGICAL STATUS",
    desc: "Digital authority for the 0.1% of industrial firms. It's not just software; it's the mastery of the competitive environment.",
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
        <p className={styles.subtitle}>// CORE_PROPOSITION</p>
        <h2 className={styles.headline}>PILLARS OF AUTHORITY</h2>
      </div>
      
      <div className={styles.grid}>
        {CARDS.map((card, i) => (
          <Card key={i} card={card} i={i} />
        ))}
      </div>
    </section>
  );
}
