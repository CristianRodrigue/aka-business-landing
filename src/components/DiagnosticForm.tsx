"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { submitDiagnostic } from "@/app/actions";
import styles from "./DiagnosticForm.module.css";

export default function DiagnosticForm() {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    
    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setSuccess(true);
    }
    setPending(false);
  };

  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.header}>
          <span className={styles.label}>// GATEWAY_AUTH</span>
          <h2 className={styles.title}>START <br /> DIAGNOSTIC</h2>
          <p className={styles.description}>
            Restricted access for high-value industrial firms. 
            Enter the parameters for the infrastructure audit.
          </p>
        </div>

        {success ? (
          <div className={styles.successMessage}>
            // ACCESS_GRANTED. REQUEST ADDED TO THE PROCESSING QUEUE.
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="d5e5c806-15f3-4949-adea-07065ce92625" />
            
            <div className={styles.formGroup}>
              <label className={styles.fieldLabel}>TRAFFIC VOLUME (MONTHLY)</label>
              <select className={styles.select} name="traffic" required defaultValue="">
                <option value="" disabled>[ SELECT_RANGE ]</option>
                <option value="<10k">&lt; 10,000</option>
                <option value="10k-100k">10,000 - 100,000</option>
                <option value=">100k">&gt; 100,000</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.fieldLabel}>TECH_STACK</label>
              <input className={styles.input} type="text" name="stack" placeholder="Project Name / Stack..." required />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.fieldLabel}>CORPORATE_EMAIL</label>
              <input className={styles.input} type="email" name="email" placeholder="id@company.com" required />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={pending}>
              {pending ? "PROCESSING..." : "SUBMIT_REQUEST"}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
