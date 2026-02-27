"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, scaleIn, viewportOnce } from "@/lib/motion";

const outcomes = [
  {
    metric: "↓ Clarification calls",
    context: "Bilingual instructions reduce caregiver callbacks before they happen.",
  },
  {
    metric: "↓ Coordination burden",
    context: "One pathway replaces multi-step back-and-forth between clinic, pharmacy, and patient.",
  },
  {
    metric: "↓ Prep variability",
    context: "Pre-loaded single-dose format eliminates the measuring and drawing step entirely.",
  },
  {
    metric: "↑ Continuity after discharge",
    context: "Patients leave with everything they need. Refills are tracked and initiated on schedule.",
  },
];

export default function WhyItWorks() {
  return (
    <section
      className="py-28 md:py-40 relative overflow-hidden"
      style={{ backgroundColor: "var(--sage)" }}
    >
      {/* Large background circle */}
      <div
        className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(184,151,90,0.1) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Label */}
        <motion.div
          className="flex items-center gap-3 mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="w-8 h-px" style={{ backgroundColor: "var(--gold)", opacity: 0.6 }} />
          <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: "var(--gold)" }}>
            Why it works
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              className="serif text-5xl md:text-6xl leading-tight tracking-tight mb-8"
              style={{ color: "var(--cream)" }}
              variants={fadeUp}
            >
              What practices in PA and DE are seeing.
            </motion.h2>
            <motion.p
              className="text-base md:text-lg font-light leading-relaxed"
              style={{ color: "rgba(244,239,230,0.6)" }}
              variants={fadeUp}
            >
              Standardizing the workflow is the intervention. Once caregiver
              instructions are consistent and logistics run on a single pathway,
              the friction disappears — for coordinators and for patients.
            </motion.p>
          </motion.div>

          {/* Right: outcome list */}
          <motion.div
            className="flex flex-col gap-px"
            style={{ backgroundColor: "rgba(244,239,230,0.08)" }}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {outcomes.map((o) => (
              <motion.div
                key={o.metric}
                className="group flex gap-6 items-start p-8 transition-all duration-400"
                style={{ backgroundColor: "rgba(61,90,74,0.01)" }}
                variants={scaleIn}
                whileHover={{ backgroundColor: "rgba(244,239,230,0.06)", x: 4 }}
              >
                <div
                  className="w-1 flex-shrink-0 self-stretch rounded-full"
                  style={{ backgroundColor: "var(--gold)", opacity: 0.6 }}
                />
                <div>
                  <p
                    className="serif text-2xl mb-2 transition-colors duration-300"
                    style={{ color: "var(--cream)" }}
                  >
                    {o.metric}
                  </p>
                  <p
                    className="text-sm font-light leading-relaxed"
                    style={{ color: "rgba(244,239,230,0.5)" }}
                  >
                    {o.context}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Attribution note */}
        <motion.p
          className="mt-16 text-xs font-light tracking-wide"
          style={{ color: "rgba(244,239,230,0.3)" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          Based on program outcomes across genetics and metabolism practices in PA and DE served by Voshell&apos;s Pharmacy.
        </motion.p>
      </div>
    </section>
  );
}
