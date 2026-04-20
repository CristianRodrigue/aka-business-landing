"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Hero3D.module.css";

export default function SplineHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulamos un pequeño tiempo de carga para que la transición sea suave
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.heroContainer}>
      <div className={styles.canvasWrapper} style={{ pointerEvents: 'auto' }}>
        <iframe 
          src="https://my.spline.design/thresholddarkambientui-rnfBdGM0Onq0uZhJCr0geFp7/"
          className={styles.iframeClipper}
          title="Threshold 3D Hero"
        />
        <div className={styles.badgeMask} />
      </div>
      
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

      {/* UI de Alta Gama */}
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
              {/* Contenido personalizado en el editor de Spline */}
            </div>

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
