"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, scaleIn, viewportOnce } from "@/lib/motion";

// These 4 map 1:1 to the services Thuy names in her outbound email
const pillars = [
  {
    label: "Format A",
    title: "Single-dose B12 vials",
    detail: "Safer for caregivers who are new to injectable administration. Each vial is pre-labeled, single-use, and eliminates multi-dose cross-contamination risk.",
    icon: "◈",
  },
  {
    label: "Format B",
    title: "Pre-loaded syringes",
    detail: "When clinically appropriate, we supply ready-to-inject syringes — no drawing, no measuring. Maximum consistency across every administration.",
    icon: "◉",
  },
  {
    label: "Education",
    title: "Multilingual caregiver education",
    detail: "Written administration guides in English and Spanish — clear enough for a family member with no medical training to follow without calling your office.",
    icon: "◎",
  },
  {
    label: "Coordination",
    title: "Direct line to social work and clinic staff",
    detail: "We coordinate directly with your team on refills, Rx changes, and caregiver questions. One contact. No ticket system. No hold music back to the pharmacy.",
    icon: "◐",
  },
];

export default function Solution() {
  return (
    <section
      style={{ backgroundColor: "var(--mist)" }}
      className="relative py-28 md:py-40 overflow-hidden"
    >
      {/* Watermark */}
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
          className="flex items-center gap-3 mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="w-8 h-px" style={{ backgroundColor: "var(--sage)", opacity: 0.5 }} />
          <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: "var(--sage)" }}>
            What Voshell&apos;s provides
          </span>
        </motion.div>

        {/* Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-16">
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
              className="text-base md:text-lg font-light leading-relaxed max-w-md mb-6"
              style={{ color: "rgba(14,26,20,0.6)" }}
              variants={fadeUp}
            >
              These are the four things Thuy referenced in her email — in detail.
              Each one is designed to remove a burden from your team, not add one.
            </motion.p>
            <motion.p
              className="text-sm font-medium px-4 py-3 border-l-2 max-w-md"
              style={{
                color: "var(--sage)",
                borderColor: "var(--sage)",
                backgroundColor: "rgba(61,90,74,0.06)",
              }}
              variants={fadeUp}
            >
              None of this requires changing your existing clinical protocols.
            </motion.p>

            {/* Quick stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 mt-14 pt-14 border-t"
              style={{ borderColor: "rgba(14,26,20,0.1)" }}
              variants={stagger}
            >
              {[
                { n: "503A", label: "Licensed compounding" },
                { n: "~20 min", label: "Clinic onboarding" },
                { n: "MD · PA · DE", label: "Service region" },
                { n: "1 contact", label: "Coordination pathway" },
              ].map((s) => (
                <motion.div key={s.label} variants={fadeUp}>
                  <p className="serif text-3xl md:text-4xl" style={{ color: "var(--ink)" }}>{s.n}</p>
                  <p className="text-xs tracking-wide mt-1 font-light" style={{ color: "rgba(14,26,20,0.5)" }}>{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Pillar cards */}
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
