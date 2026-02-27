"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, scaleIn, viewportOnce } from "@/lib/motion";

const pillars = [
  {
    label: "Format",
    title: "Pre-loaded, single-dose syringes",
    detail: "No measuring. No drawing. No variability. Each syringe is prepared under USP 797 standards, labeled clearly, and ready for home use.",
    icon: "◈",
  },
  {
    label: "Instructions",
    title: "Bilingual caregiver guides",
    detail: "English and Spanish administration instructions — clear enough for a family member with no medical training to follow without a call to your office.",
    icon: "◉",
  },
  {
    label: "Coordination",
    title: "One direct line. No runaround.",
    detail: "Designate a single contact at your clinic. We handle refill coordination, Rx verification, and caregiver questions end-to-end.",
    icon: "◎",
  },
];

export default function Solution() {
  return (
    <section
      style={{ backgroundColor: "var(--mist)" }}
      className="relative py-28 md:py-40 overflow-hidden"
    >
      {/* Background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
        aria-hidden
      >
        <span
          className="serif text-[clamp(8rem,20vw,18rem)] font-normal leading-none whitespace-nowrap"
          style={{ color: "rgba(14,26,20,0.04)" }}
        >
          Partner
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Label */}
        <motion.div
          className="flex items-center gap-3 mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="w-8 h-px" style={{ backgroundColor: "var(--sage)", opacity: 0.5 }} />
          <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: "var(--sage)" }}>
            The Voshell&apos;s solution
          </span>
        </motion.div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: headline */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              className="serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-8"
              style={{ color: "var(--ink)" }}
              variants={fadeUp}
            >
              Clinical partner.<br />
              <span className="serif-italic" style={{ color: "var(--gold)" }}>Not just a fill.</span>
            </motion.h2>
            <motion.p
              className="text-base md:text-lg font-light leading-relaxed max-w-md"
              style={{ color: "rgba(14,26,20,0.6)" }}
              variants={fadeUp}
            >
              Most pharmacies ship a vial and wait for the next prescription. We
              build the infrastructure your patients and coordinators rely on —
              before, during, and after every refill cycle.
            </motion.p>

            {/* Stat row */}
            <motion.div
              className="grid grid-cols-2 gap-6 mt-14 pt-14 border-t"
              style={{ borderColor: "rgba(14,26,20,0.1)" }}
              variants={stagger}
            >
              {[
                { n: "USP 797", label: "Compounding standard" },
                { n: "~20 min", label: "Clinic onboarding time" },
                { n: "PA / DE", label: "Regional service area" },
                { n: "1 line", label: "Refill coordination pathway" },
              ].map((s) => (
                <motion.div key={s.label} variants={fadeUp}>
                  <p className="serif text-3xl md:text-4xl" style={{ color: "var(--ink)" }}>{s.n}</p>
                  <p className="text-xs tracking-wide mt-1 font-light" style={{ color: "rgba(14,26,20,0.5)" }}>{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: pillars */}
          <motion.div
            className="flex flex-col gap-px"
            style={{ backgroundColor: "rgba(14,26,20,0.08)" }}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {pillars.map((p) => (
              <motion.div
                key={p.label}
                className="group p-8 md:p-10 flex gap-6 transition-all duration-500 cursor-default"
                style={{ backgroundColor: "var(--mist)" }}
                variants={scaleIn}
                whileHover={{ backgroundColor: "var(--sage)", x: 4 }}
              >
                <span
                  className="text-2xl leading-none mt-1 transition-colors duration-500 group-hover:text-[var(--gold)]"
                  style={{ color: "var(--gold)" }}
                  aria-hidden
                >
                  {p.icon}
                </span>
                <div>
                  <p
                    className="text-xs tracking-[0.15em] uppercase mb-2 transition-colors duration-500 group-hover:text-[rgba(244,239,230,0.5)]"
                    style={{ color: "rgba(14,26,20,0.4)" }}
                  >
                    {p.label}
                  </p>
                  <h3
                    className="serif text-xl md:text-2xl mb-3 transition-colors duration-500 group-hover:text-[var(--cream)]"
                    style={{ color: "var(--ink)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm font-light leading-relaxed transition-colors duration-500 group-hover:text-[rgba(244,239,230,0.65)]"
                    style={{ color: "rgba(14,26,20,0.55)" }}
                  >
                    {p.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
