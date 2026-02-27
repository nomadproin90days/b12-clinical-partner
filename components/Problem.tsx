"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const frictions = [
  {
    number: "01",
    title: "Prep variability",
    body: "Caregivers measuring and drawing doses at home leads to inconsistent administration — especially across language barriers. One unclear instruction is one near-miss.",
  },
  {
    number: "02",
    title: "Coordination burden",
    body: "Your coordinators field calls about refills, supply questions, and caregiver confusion. That time is invisible on a report but very visible to your staff.",
  },
  {
    number: "03",
    title: "Continuity gaps",
    body: "When a patient transitions home, the pharmacy relationship often becomes fragmented. Refill delays and lost instructions break the clinical handoff you built.",
  },
];

export default function Problem() {
  return (
    <section
      className="relative py-28 md:py-40"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-3 mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="w-8 h-px" style={{ backgroundColor: "var(--ink)", opacity: 0.3 }} />
          <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: "var(--sage)" }}>
            The friction is real
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          className="mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            className="serif text-5xl md:text-7xl leading-tight tracking-tight max-w-3xl"
            style={{ color: "var(--ink)" }}
            variants={fadeUp}
          >
            Three places where home B12 programs
            <span className="serif-italic" style={{ color: "var(--sage)" }}> quietly break.</span>
          </motion.h2>
        </motion.div>

        {/* Friction cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ backgroundColor: "rgba(14,26,20,0.1)" }}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {frictions.map((item) => (
            <motion.div
              key={item.number}
              className="group relative p-10 md:p-12 flex flex-col gap-6 transition-all duration-500"
              style={{ backgroundColor: "var(--cream)" }}
              variants={fadeUp}
              whileHover={{ backgroundColor: "var(--ink)" }}
            >
              <span
                className="serif text-6xl font-normal leading-none transition-colors duration-500"
                style={{ color: "rgba(14,26,20,0.12)" }}
              >
                {item.number}
              </span>
              <h3
                className="serif text-2xl md:text-3xl leading-tight transition-colors duration-500 group-hover:text-[var(--cream)]"
                style={{ color: "var(--ink)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed font-light transition-colors duration-500 group-hover:text-[rgba(244,239,230,0.6)]"
                style={{ color: "rgba(14,26,20,0.6)" }}
              >
                {item.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pull quote */}
        <motion.div
          className="mt-20 pt-16 border-t"
          style={{ borderColor: "rgba(14,26,20,0.1)" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <blockquote
            className="serif-italic text-3xl md:text-4xl leading-snug max-w-3xl"
            style={{ color: "var(--sage)" }}
          >
            &ldquo;The hardest part isn&apos;t the medication. It&apos;s what happens after the patient leaves your office.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm tracking-wide font-light" style={{ color: "rgba(14,26,20,0.45)" }}>
            — Thuy Cao, PharmD · Voshell&apos;s Pharmacy
          </p>
        </motion.div>
      </div>
    </section>
  );
}
