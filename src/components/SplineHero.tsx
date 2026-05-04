"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from 'next/dynamic';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./Hero3D.module.css";

type NamedEventTarget = EventTarget & {
  name?: string;
};

// Carga directa y optimizada de Spline
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className={styles.loader} />
});

export default function SplineHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSpline, setShowSpline] = useState(false);
  const splineApp = useRef<unknown>(null);

  useEffect(() => {
    // Reducido de 800ms a 100ms — prioriza el FCP pero sin desperdiciar tiempo
    const timer = setTimeout(() => {
      setShowSpline(true);
    }, 100);

    // Timeout de seguridad: si Spline no carga en 8s, forzar transición
    const safetyTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(safetyTimeout);
    };
  }, []);

  const { scrollY } = useScroll();

  const opacityBase = useTransform(scrollY, [0, 800], [1, 0.4]);
  const scaleBase = useTransform(scrollY, [0, 1000], [1, 1.05]);

  // Transformación inversa para el HUD (Empieza visible, se oculta al bajar)
  const uiOpacityBase = useTransform(scrollY, [0, 300], [1, 0]);

  const opacity = useSpring(opacityBase, { stiffness: 40, damping: 25 });
  const scale = useSpring(scaleBase, { stiffness: 40, damping: 25 });
  const uiOpacity = useSpring(uiOpacityBase, { stiffness: 40, damping: 25 });

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  function onLoad(spline: unknown) {
    splineApp.current = spline;
    // Pequeño retraso para que el navegador respire después de cargar el motor
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }

  return (
    <section className={styles.heroContainer}>
      <motion.div
        className={styles.canvasWrapper}
        style={{
          opacity: opacity,
          scale: scale,
          zIndex: 50,
          pointerEvents: 'auto'
        }}
        onMouseDown={scrollToNext}
      >
        {showSpline && (
          <Spline
            scene="https://prod.spline.design/EFyfATIAsCOgJKJ5/scene.splinecode"
            onLoad={onLoad}
            onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
              void (e.target as NamedEventTarget).name;
              scrollToNext();
            }}
          />
        )}
        <div className={styles.badgeMask} />
      </motion.div>

      <AnimatePresence>
        {!isLoaded && (
          <div className={styles.loader}>
            {/* Contenido inmediato mientras carga — el usuario ve algo de valor */}
            <motion.div
              className={styles.loaderBrand}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.loaderTitle}>AKA<br />BUSINESS</div>
              <div className={styles.loaderSubtitle}>WEB SYSTEMS // PERFORMANCE</div>
            </motion.div>

            <div className={styles.loaderBar}>
              <motion.div
                className={styles.loaderBarFill}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 7, ease: 'linear' }}
              />
            </div>

            <div className={styles.statusLabel}>
              <div className={styles.statusDot} />
              AKA_SYSTEM // LOADING_INTERFACE
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
            style={{ opacity: uiOpacity }}
            transition={{ duration: 1.5 }}
          >
            <div className={styles.topRow}>
              <div className={styles.statusLabel}>
                <div className={styles.statusDot} />
                AKA_ENGINE // INTERFACE_READY
              </div>
              <div className={styles.statusLabel}>
                BUILD_MODE // PERFORMANCE
              </div>
            </div>

            <div className={styles.mainContent}>
              {/* Centro - El clic ocurre dentro del componente Spline */}
            </div>

            <div className={styles.bottomRow}>
              <div className={styles.specs}>
                <div className={styles.specItem}>
                  {/*<span className={styles.specLabel}>Interface</span>
                  <span className={styles.specValue}>Stable_Universal_Viewer</span>}
                </div>
                <div className={styles.specItem}>
                  {/*<span className={styles.specLabel}>Status</span>*/}
                  {/*<span className={styles.specValue}>Verified_High_Fidelity</span>*/}
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
