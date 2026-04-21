"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from 'next/dynamic';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./Hero3D.module.css";

// Carga directa y optimizada de Spline
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className={styles.loader} />
});

export default function SplineHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const splineApp = useRef<any>(null);
  
  const { scrollY } = useScroll();
  
  const blurBase = useTransform(scrollY, [0, 1000], [0, 15]);
  const opacityBase = useTransform(scrollY, [0, 800], [1, 0.4]);
  const scaleBase = useTransform(scrollY, [0, 1000], [1, 1.05]);
  
  const blur = useSpring(blurBase, { stiffness: 40, damping: 25 });
  const opacity = useSpring(opacityBase, { stiffness: 40, damping: 25 });
  const scale = useSpring(scaleBase, { stiffness: 40, damping: 25 });

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  function onLoad(spline: any) {
    splineApp.current = spline;
    setIsLoaded(true);
  }

  return (
    <section className={styles.heroContainer}>
      <motion.div 
        className={styles.canvasWrapper} 
        style={{ 
          filter: useTransform(blur, (v) => `blur(${v}px)`),
          opacity: opacity,
          scale: scale,
          zIndex: 50, // Lo subimos para que reciba el clic sí o sí
          pointerEvents: 'auto'
        }}
        onMouseDown={scrollToNext} // Clic de respaldo en todo el contenedor
      >
        <Spline 
          scene="https://prod.spline.design/EFyfATIAsCOgJKJ5/scene.splinecode"
          onLoad={onLoad}
          onMouseDown={(e: any) => {
            console.log("OBJ_CLICK:", e.target.name);
            // Si Spline detecta algo, ya scrollToNext se ejecutará por el padre o por aquí
            scrollToNext(); 
          }}
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
               {/* Centro - El clic ocurre dentro del componente Spline */}
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
