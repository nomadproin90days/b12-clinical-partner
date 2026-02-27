"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, slideLeft, viewportOnce } from "@/lib/motion";

const steps = [
  {
    n: "01",
    title: "Align on patient criteria",
    body: "Share your candidate profile — diagnosis, dose frequency, format preference. We configure our fulfillment setup before the first patient is sent home.",
    time: "Day 1 · ~10 min",
  },
  {
    n: "02",
    title: "Select format and receive samples",
    body: "Choose syringe type and dose volume. We ship a sample set to your clinic before go-live so your team can review what patients will actually receive.",
    time: "Day 2–3",
  },
  {
    n: "03",
    title: "Set the single communication pathway",
    body: "One coordinator, one contact. We establish a secure line for refill requests, clinical questions, and Rx updates. No ticket systems, no hold music.",
    time: "Day 3 · ~10 min",
  },
  {
    n: "04",
    title: "Discharge with caregiver instructions",
    body: "Bilingual instruction sheets — print and digital — go into every discharge packet. Caregivers leave with what they need to succeed at home.",
    time: "Go-live",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-28 md:py-40 relative overflow-hidden"
      style={{ backgroundColor: "var(--ink)" }}
    >
      {/* Accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(184,151,90,0.3), transparent)" }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
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
            Onboarding
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="serif text-5xl md:text-7xl leading-tight tracking-tight mb-20"
          style={{ color: "var(--cream)" }}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span className="block" variants={fadeUp}>Four steps.</motion.span>
          <motion.span className="block serif-italic" style={{ color: "var(--gold)" }} variants={fadeUp}>
            Twenty minutes.
          </motion.span>
        </motion.h2>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ backgroundColor: "rgba(244,239,230,0.07)" }}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {steps.map((step) => (
            <motion.div
              key={step.n}
              className="group relative p-10 md:p-12 flex flex-col gap-4 overflow-hidden transition-all duration-500"
              style={{ backgroundColor: "var(--ink)" }}
              variants={slideLeft}
              whileHover={{ backgroundColor: "rgba(61,90,74,0.25)" }}
            >
              {/* Step number watermark */}
              <span
                className="absolute top-6 right-8 serif text-7xl font-normal select-none pointer-events-none transition-opacity duration-500 group-hover:opacity-20"
                style={{ color: "rgba(244,239,230,0.05)" }}
                aria-hidden
              >
                {step.n}
              </span>

              <span
                className="text-xs tracking-[0.15em] uppercase font-medium"
                style={{ color: "var(--gold)" }}
              >
                {step.n}
              </span>
              <h3
                className="serif text-2xl md:text-3xl leading-tight"
                style={{ color: "var(--cream)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm font-light leading-relaxed"
                style={{ color: "rgba(244,239,230,0.5)" }}
              >
                {step.body}
              </p>
              <p
                className="text-xs tracking-wide mt-2 font-medium"
                style={{ color: "rgba(184,151,90,0.7)" }}
              >
                {step.time}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          className="mt-12 text-sm font-light text-center"
          style={{ color: "rgba(244,239,230,0.3)" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          No disruption to existing workflows. No new software for your team.
        </motion.p>
      </div>
    </section>
  );
}
