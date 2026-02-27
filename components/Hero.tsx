"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp, stagger } from "@/lib/motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ backgroundColor: "var(--ink)" }}
    >
      {/* Background grid */}
      <motion.div className="absolute inset-0" style={{ y, opacity: 0.06 }} aria-hidden>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      {/* Accent glow */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(184,151,90,0.12) 0%, transparent 70%)",
          transform: "translate(30%, -20%)",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        aria-hidden
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28"
        style={{ opacity }}
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Credential badge */}
        <motion.div className="flex flex-wrap items-center gap-4 mb-10" variants={fadeUp}>
          <span
            className="text-xs tracking-[0.18em] uppercase font-medium px-3 py-1.5 border"
            style={{ color: "var(--gold)", borderColor: "rgba(184,151,90,0.35)" }}
          >
            503A Licensed Compounding Pharmacy
          </span>
          <span
            className="text-xs tracking-[0.18em] uppercase font-medium"
            style={{ color: "rgba(244,239,230,0.3)" }}
          >
            Maryland · Mid-Atlantic
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="serif text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight mb-8"
          style={{ color: "var(--cream)" }}
          variants={stagger}
        >
          <motion.span className="block" variants={fadeUp}>Your B12</motion.span>
          <motion.span className="block serif-italic" style={{ color: "var(--gold)" }} variants={fadeUp}>
            home program.
          </motion.span>
          <motion.span className="block" variants={fadeUp}>Standardized.</motion.span>
        </motion.h1>

        {/* Sub — mirrors Thuy's email voice */}
        <motion.p
          className="text-lg md:text-xl font-light max-w-xl leading-relaxed mb-6"
          style={{ color: "rgba(244,239,230,0.55)" }}
          variants={fadeUp}
        >
          This is the overview Thuy mentioned. Voshell&apos;s Pharmacy supports
          genetics and metabolism teams by standardizing the home B12 experience —
          without changing your existing clinical protocols.
        </motion.p>

        {/* Trust line */}
        <motion.p
          className="text-sm font-light mb-12 flex items-center gap-2"
          style={{ color: "rgba(184,151,90,0.7)" }}
          variants={fadeUp}
        >
          <span style={{ color: "var(--gold)" }}>—</span>
          Already supporting families across Maryland, Pennsylvania, and Delaware
        </motion.p>

        {/* CTAs */}
        <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeUp}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm tracking-[0.1em] uppercase font-medium transition-all duration-300 group"
            style={{ backgroundColor: "var(--gold)", color: "var(--ink)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#c8a86a"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--gold)"; }}
          >
            Book the 20-minute call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-[0.1em] uppercase font-medium border transition-all duration-300"
            style={{ borderColor: "rgba(244,239,230,0.25)", color: "rgba(244,239,230,0.7)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(244,239,230,0.6)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--cream)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(244,239,230,0.25)";
              (e.currentTarget as HTMLAnchorElement).style.color = "rgba(244,239,230,0.7)";
            }}
          >
            See the workflow
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        aria-hidden
      >
        <motion.div
          className="w-px h-16 mx-auto"
          style={{ backgroundColor: "rgba(244,239,230,0.2)" }}
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
