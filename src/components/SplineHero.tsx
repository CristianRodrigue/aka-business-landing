"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./Hero3D.module.css";

export default function SplineHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Lógica de Scroll Cinematográfico
  const { scrollY } = useScroll();
  
  // Transformaciones lentas y suaves (Rango de 0 a 1000px de scroll)
  const blurBase = useTransform(scrollY, [0, 1000], [0, 15]);
  const opacityBase = useTransform(scrollY, [0, 800], [1, 0.4]);
  const scaleBase = useTransform(scrollY, [0, 1000], [1, 1.05]);
  
  // Suavizado de los valores con Springs
  const blur = useSpring(blurBase, { stiffness: 50, damping: 20 });
  const opacity = useSpring(opacityBase, { stiffness: 50, damping: 20 });
  const scale = useSpring(scaleBase, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className={styles.heroContainer}>
      <motion.div 
        className={styles.canvasWrapper} 
        style={{ 
          pointerEvents: 'auto',
          filter: useTransform(blur, (v) => `blur(${v}px)`),
          opacity: opacity,
          scale: scale
        }}
      >
        <iframe 
          src="https://my.spline.design/thresholddarkambientui-rnfBdGM0Onq0uZhJCr0geFp7/"
          className={styles.iframeClipper}
          title="Threshold 3D Hero"
        />
        <div className={styles.badgeMask} />
      </motion.div>
      
      <AnimatePresence>
        {!isLoaded && (
          <div className={styles.loader}>
            <div className={styles.statusLabel}>
              <div className={styles.statusDot} />
              AKA_SYSTEM // CALIBRATING_RT_ENGINE
            </div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isLoaded && (
          <motion.div 
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className={styles.topRow}>
              <div className={styles.statusLabel}>
                <div className={styles.statusDot} />
                AKA_ENGINE // VIEWER_RUNTIME_STABLE
              </div>
              <div className={styles.statusLabel}>
                QUALITY_MODE // ULTRA
              </div>
            </div>

            <div className={styles.mainContent}>
              {/* Contenido centrado */}
            </div>

            {/* BOTÓN INVISIBLE: Mantenido fuera de cajas para control total */}
            <button 
              onClick={scrollToNext}
              className={styles.invisibleAnchor}
              aria-label="Join The Harvest"
            />

            <div className={styles.bottomRow}>
              <div className={styles.specs}>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Interface</span>
                  <span className={styles.specValue}>Stable_Universal_Viewer</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Status</span>
                  <span className={styles.specValue}>Verified_High_Fidelity</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={styles.bottomFade} />
    </section>
  );
}
