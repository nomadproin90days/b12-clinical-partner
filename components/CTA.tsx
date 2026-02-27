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
      {/* Top border */}
      <div className="absolute top-0 left-12 right-12 h-px" style={{ backgroundColor: "rgba(14,26,20,0.1)" }} />

      {/* Background serif watermark */}
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
          <motion.div
            className="flex items-center justify-center gap-3 mb-12"
            variants={fadeUp}
          >
            <div className="w-8 h-px" style={{ backgroundColor: "var(--gold)", opacity: 0.6 }} />
            <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: "var(--sage)" }}>
              Ready to standardize
            </span>
            <div className="w-8 h-px" style={{ backgroundColor: "var(--gold)", opacity: 0.6 }} />
          </motion.div>

          <motion.h2
            className="serif text-6xl md:text-8xl leading-none tracking-tight mb-8"
            style={{ color: "var(--ink)" }}
            variants={fadeUp}
          >
            Start with a<br />
            <span className="serif-italic" style={{ color: "var(--gold)" }}>10-minute call.</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl font-light leading-relaxed mb-14 mx-auto max-w-xl"
            style={{ color: "rgba(14,26,20,0.55)" }}
            variants={fadeUp}
          >
            No pitch deck. No sales cycle. We walk through your current B12
            workflow, identify where the friction lives, and show you exactly
            how onboarding works — in under 10 minutes.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeUp}
          >
            <a
              href="mailto:thuy@voshellspharmacy.com?subject=B12 Clinical Partnership — Intro Call"
              className="inline-flex items-center gap-3 px-10 py-5 text-sm tracking-[0.12em] uppercase font-medium transition-all duration-300 group"
              style={{
                backgroundColor: "var(--ink)",
                color: "var(--cream)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--sage)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--ink)";
              }}
            >
              Schedule intro call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="mailto:thuy@voshellspharmacy.com?subject=B12 Workflow Guide Request"
              className="inline-flex items-center gap-2 px-10 py-5 text-sm tracking-[0.12em] uppercase font-medium border transition-all duration-300"
              style={{
                borderColor: "rgba(14,26,20,0.2)",
                color: "rgba(14,26,20,0.6)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--ink)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--ink)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(14,26,20,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(14,26,20,0.6)";
              }}
            >
              Request workflow guide
            </a>
          </motion.div>

          {/* Contact details */}
          <motion.div
            className="mt-20 pt-12 border-t flex flex-col sm:flex-row items-center justify-center gap-8 text-sm font-light"
            style={{ borderColor: "rgba(14,26,20,0.1)", color: "rgba(14,26,20,0.4)" }}
            variants={fadeUp}
          >
            <span>Thuy Cao, PharmD</span>
            <span className="hidden sm:block" style={{ color: "rgba(14,26,20,0.15)" }}>·</span>
            <span>Voshell&apos;s Pharmacy</span>
            <span className="hidden sm:block" style={{ color: "rgba(14,26,20,0.15)" }}>·</span>
            <span>PA / DE Regional Service</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
