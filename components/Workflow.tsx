"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const nodes = [
  { label: "Refill due", sub: "5 business days before supply runs out", side: "left" },
  { label: "Coordinator contacts Voshell's", sub: "One call or message to designated line", side: "right" },
  { label: "Rx verified", sub: "We confirm active prescription within 1 business day", side: "left" },
  { label: "Syringe prepared", sub: "USP 797 compounding, labeled, quality-checked", side: "right" },
  { label: "Direct ship to patient", sub: "Delivered to patient's home with instructions", side: "left" },
];

export default function Workflow() {
  return (
    <section
      className="py-28 md:py-40"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Label + headline */}
        <motion.div
          className="flex items-center gap-3 mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="w-8 h-px" style={{ backgroundColor: "var(--sage)", opacity: 0.4 }} />
          <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: "var(--sage)" }}>
            The refill pathway
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: headline + context */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              className="serif text-5xl md:text-6xl leading-tight tracking-tight mb-8"
              style={{ color: "var(--ink)" }}
              variants={fadeUp}
            >
              One pathway.<br />
              <span className="serif-italic" style={{ color: "var(--sage)" }}>Zero back-and-forth.</span>
            </motion.h2>
            <motion.p
              className="text-base md:text-lg font-light leading-relaxed max-w-md mb-12"
              style={{ color: "rgba(14,26,20,0.55)" }}
              variants={fadeUp}
            >
              Every refill cycle follows the same sequence. Your team sends one
              message. We handle everything after that — verification, compounding,
              delivery, and caregiver follow-up.
            </motion.p>

            {/* Detail boxes */}
            <motion.div className="flex flex-col gap-4" variants={stagger}>
              {[
                { label: "Rx changes", detail: "Send via eRx or secure fax. Confirmed within 1 business day." },
                { label: "Clinical questions", detail: "Pharmacist available within 4 business hours." },
                { label: "Caregiver support", detail: "Patients call Voshell's directly — not your office." },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className="flex gap-4 p-5 border transition-all duration-300"
                  style={{ borderColor: "rgba(14,26,20,0.1)" }}
                  variants={fadeUp}
                  whileHover={{ borderColor: "var(--sage)", x: 4 }}
                >
                  <div className="w-1 flex-shrink-0 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: "var(--ink)" }}>{item.label}</p>
                    <p className="text-xs font-light leading-relaxed" style={{ color: "rgba(14,26,20,0.5)" }}>{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: visual timeline */}
          <motion.div
            className="relative"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Vertical line */}
            <motion.div
              className="absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2"
              style={{ backgroundColor: "rgba(14,26,20,0.1)" }}
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={viewportOnce}
            />

            <div className="flex flex-col gap-8">
              {nodes.map((node, i) => (
                <motion.div
                  key={node.label}
                  className="relative flex items-center gap-4"
                  style={{
                    flexDirection: node.side === "left" ? "row" : "row-reverse",
                  }}
                  variants={fadeUp}
                  custom={i}
                >
                  {/* Content */}
                  <div
                    className="flex-1 p-5 border transition-all duration-300"
                    style={{
                      borderColor: "rgba(14,26,20,0.1)",
                      backgroundColor: i % 2 === 0 ? "var(--mist)" : "var(--cream)",
                    }}
                  >
                    <p className="text-sm font-medium mb-1" style={{ color: "var(--ink)" }}>
                      {node.label}
                    </p>
                    <p className="text-xs font-light" style={{ color: "rgba(14,26,20,0.5)" }}>
                      {node.sub}
                    </p>
                  </div>

                  {/* Node dot */}
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0 z-10 border-2"
                    style={{
                      backgroundColor: i === nodes.length - 1 ? "var(--gold)" : "var(--cream)",
                      borderColor: i === nodes.length - 1 ? "var(--gold)" : "var(--sage)",
                    }}
                  />

                  {/* Empty half */}
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
