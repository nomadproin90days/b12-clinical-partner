"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Nav() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{}}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(244, 239, 230, 0.92)",
          backdropFilter: "blur(12px)",
          opacity: bgOpacity,
          borderBottom: "1px solid rgba(14,26,20,0.08)",
        }}
      />
      <div
        className="relative max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between"
        style={{ height: "64px" }}
      >
        <span
          className="serif text-base tracking-wide"
          style={{ color: "var(--ink)" }}
        >
          Voshell&apos;s Pharmacy
        </span>
        <a
          href="#contact"
          className="text-xs tracking-[0.15em] uppercase font-medium px-5 py-2.5 transition-all duration-300"
          style={{
            backgroundColor: "var(--ink)",
            color: "var(--cream)",
            letterSpacing: "0.12em",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--sage)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--ink)";
          }}
        >
          Book intro call
        </a>
      </div>
    </motion.header>
  );
}
