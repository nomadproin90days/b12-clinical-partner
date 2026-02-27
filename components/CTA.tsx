"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="absolute top-0 left-12 right-12 h-px" style={{ backgroundColor: "rgba(14,26,20,0.1)" }} />

      {/* Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
        aria-hidden
      >
        <span
          className="serif text-[clamp(6rem,18vw,16rem)] font-normal leading-none whitespace-nowrap"
          style={{ color: "rgba(14,26,20,0.03)" }}
        >
          Voshell&apos;s
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div className="flex items-center justify-center gap-3 mb-12" variants={fadeUp}>
            <div className="w-8 h-px" style={{ backgroundColor: "var(--gold)", opacity: 0.6 }} />
            <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: "var(--sage)" }}>
              Two ways to move forward
            </span>
            <div className="w-8 h-px" style={{ backgroundColor: "var(--gold)", opacity: 0.6 }} />
          </motion.div>

          <motion.h2
            className="serif text-6xl md:text-8xl leading-none tracking-tight mb-8"
            style={{ color: "var(--ink)" }}
            variants={fadeUp}
          >
            Ready when<br />
            <span className="serif-italic" style={{ color: "var(--gold)" }}>you are.</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl font-light leading-relaxed mb-16 mx-auto max-w-xl"
            style={{ color: "rgba(14,26,20,0.55)" }}
            variants={fadeUp}
          >
            Thuy mentioned two options in her email. Both are available now. No
            commitment, no pitch — just a conversation about where your families
            face the most friction after discharge.
          </motion.p>

          {/* Two-option cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-px mb-16"
            style={{ backgroundColor: "rgba(14,26,20,0.1)" }}
            variants={stagger}
          >
            {/* Option A: Call */}
            <motion.div
              className="p-10 flex flex-col items-start gap-4 text-left"
              style={{ backgroundColor: "var(--cream)" }}
              variants={fadeUp}
            >
              <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: "var(--gold)" }}>
                Option A
              </span>
              <h3 className="serif text-3xl" style={{ color: "var(--ink)" }}>
                20-minute call with Thuy
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(14,26,20,0.55)" }}>
                Walk through your current discharge process for B12 patients. Thuy will identify exactly where Voshell&apos;s can reduce burden — without touching your clinical protocols.
              </p>
              <p className="text-xs font-light" style={{ color: "rgba(14,26,20,0.35)" }}>
                Best for: social workers, care coordinators, nurse managers
              </p>
              <a
                href="mailto:thuy@voshellspharmacy.com?subject=B12 Partnership — 20-Minute Call Request"
                className="mt-4 inline-flex items-center gap-3 px-7 py-3.5 text-sm tracking-[0.1em] uppercase font-medium transition-all duration-300 group"
                style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--sage)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--ink)"; }}
              >
                Schedule the call
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>

            {/* Option B: Guide */}
            <motion.div
              className="p-10 flex flex-col items-start gap-4 text-left"
              style={{ backgroundColor: "var(--mist)" }}
              variants={fadeUp}
            >
              <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: "var(--sage)" }}>
                Option B
              </span>
              <h3 className="serif text-3xl" style={{ color: "var(--ink)" }}>
                The one-page workflow guide
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(14,26,20,0.55)" }}>
                Thuy also offered to send a brief overview. Email her directly with &ldquo;guide&rdquo; in the subject and she&apos;ll send the caregiver workflow document used in onboarding — the same one your families would receive.
              </p>
              <p className="text-xs font-light" style={{ color: "rgba(14,26,20,0.35)" }}>
                Best for: physicians, medical directors, new to the program
              </p>
              <a
                href="mailto:thuy@voshellspharmacy.com?subject=guide"
                className="mt-4 inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-[0.1em] uppercase font-medium border transition-all duration-300"
                style={{ borderColor: "rgba(14,26,20,0.2)", color: "rgba(14,26,20,0.65)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--ink)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--ink)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(14,26,20,0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(14,26,20,0.65)";
                }}
              >
                Request the guide
              </a>
            </motion.div>
          </motion.div>

          {/* Contact line */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-light"
            style={{ color: "rgba(14,26,20,0.35)" }}
            variants={fadeUp}
          >
            <span>Thuy Cao, PharmD · Owner</span>
            <span className="hidden sm:block" style={{ color: "rgba(14,26,20,0.15)" }}>·</span>
            <span>Voshell&apos;s Pharmacy · Maryland</span>
            <span className="hidden sm:block" style={{ color: "rgba(14,26,20,0.15)" }}>·</span>
            <a
              href="mailto:thuy@voshellspharmacy.com"
              className="transition-colors duration-200 hover:text-[var(--ink)]"
              style={{ color: "rgba(14,26,20,0.35)" }}
            >
              thuy@voshellspharmacy.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
