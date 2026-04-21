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
          <span className={styles.label}>// CONTACT_GATEWAY</span>
          <h2 className={styles.title}>PROJECT <br /> INQUIRY</h2>
          <p className={styles.description}>
            Request official engagement or technical consultation. 
            All requests are verified by our core engineering team.
          </p>
        </div>

        {success ? (
          <div className={styles.successMessage}>
            // MESSAGE_RECEIVED. OUR TEAM WILL REACH OUT SHORTLY via CORPORATE CHANNEL.
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="d5e5c806-15f3-4949-adea-07065ce92625" />
            
            <div className={styles.formGroup}>
              <label className={styles.fieldLabel}>FULL_NAME</label>
              <input className={styles.input} type="text" name="name" placeholder="[ CLIENT_NAME / COMPANY_NAME ]" required />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.fieldLabel}>CORPORATE_EMAIL</label>
              <input className={styles.input} type="email" name="email" placeholder="id@company.com" required />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.fieldLabel}>COMPANY_NAME</label>
              <input className={styles.input} type="text" name="company" placeholder="Legal Entity..." required />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.fieldLabel}>CONTACT_PHONE</label>
              <input className={styles.input} type="tel" name="phone" placeholder="[ TECHNICAL_CONTACT_NUMBER ]" />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.fieldLabel}>PROJECT_REQUIREMENTS</label>
              <textarea className={styles.textarea} name="needs" placeholder="Briefly describe your objectives..." required />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={pending}>
              {pending ? "TRANSMITTING..." : "SEND_MESSAGE"}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
