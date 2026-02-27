"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const services = [
  {
    label: "01",
    title: "Single-dose B12 vials",
    body: "Safer for caregivers new to injectable administration. Single-use, pre-labeled — eliminates multi-dose cross-contamination risk.",
  },
  {
    label: "02",
    title: "Pre-loaded syringes",
    body: "When clinically appropriate, we supply ready-to-inject syringes. No drawing, no measuring — maximum consistency at home.",
  },
  {
    label: "03",
    title: "Multilingual caregiver education",
    body: "Written administration guides in English and Spanish. Clear enough for any family member — without calling your office.",
  },
  {
    label: "04",
    title: "Direct coordination with your team",
    body: "We work directly with social work and clinic staff on refills, Rx changes, and caregiver questions. One contact. No runaround.",
  },
];

const frictions = [
  { n: "01", text: "Caregivers go home with a vial, a needle, and no real plan." },
  { n: "02", text: "Your coordinators field the callbacks that follow." },
  { n: "03", text: "Refills fall through the gap between clinic, family, and pharmacy." },
];

export default function Page() {
  return (
    <main style={{ backgroundColor: "var(--cream)", color: "var(--ink)" }}>

      {/* ── Sticky nav bar ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10"
        style={{
          height: "56px",
          backgroundColor: "rgba(244,239,230,0.92)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(14,26,20,0.08)",
        }}
      >
        <span className="serif text-sm" style={{ color: "var(--ink)" }}>
          Voshell&apos;s Pharmacy
        </span>
        <a
          href="#cta"
          className="text-xs tracking-[0.14em] uppercase font-medium px-4 py-2 transition-all duration-300"
          style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--sage)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--ink)"; }}
        >
          Book a call
        </a>
      </header>

      {/* ── Problem ── */}
      <section className="pt-32 pb-20 px-6 md:px-14 max-w-4xl mx-auto">
        <motion.div variants={stagger} initial="hidden" animate="visible">

          <motion.p
            className="text-xs tracking-[0.2em] uppercase font-medium mb-8"
            style={{ color: "var(--sage)" }}
            variants={fadeUp}
          >
            Why Thuy reached out
          </motion.p>

          <motion.h1
            className="serif text-5xl md:text-7xl leading-tight tracking-tight mb-14"
            style={{ color: "var(--ink)" }}
            variants={fadeUp}
          >
            Home B12 breaks<br />
            <span className="serif-italic" style={{ color: "var(--sage)" }}>in three places.</span>
          </motion.h1>

          <motion.div className="flex flex-col gap-0" variants={stagger}>
            {frictions.map((f) => (
              <motion.div
                key={f.n}
                className="flex gap-6 items-start py-6 border-t"
                style={{ borderColor: "rgba(14,26,20,0.1)" }}
                variants={fadeUp}
              >
                <span className="serif text-2xl w-10 flex-shrink-0" style={{ color: "rgba(14,26,20,0.2)" }}>
                  {f.n}
                </span>
                <p className="text-base md:text-lg font-light leading-relaxed pt-1" style={{ color: "rgba(14,26,20,0.7)" }}>
                  {f.text}
                </p>
              </motion.div>
            ))}
            <div className="border-t" style={{ borderColor: "rgba(14,26,20,0.1)" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Thuy bridge ── */}
      <section
        className="py-16 px-6 md:px-14"
        style={{ backgroundColor: "var(--ink)" }}
      >
        <motion.div
          className="max-w-4xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            className="serif-italic text-3xl md:text-5xl leading-snug mb-8"
            style={{ color: "var(--cream)" }}
            variants={fadeUp}
          >
            &ldquo;We handle the pharmacy side so your team doesn&apos;t have to — without touching your clinical protocols.&rdquo;
          </motion.p>
          <motion.div className="flex flex-wrap items-center gap-6" variants={fadeUp}>
            <div>
              <p className="text-sm font-medium" style={{ color: "rgba(244,239,230,0.9)" }}>Thuy Cao, PharmD</p>
              <p className="text-xs font-light mt-0.5" style={{ color: "rgba(244,239,230,0.4)" }}>Owner · Voshell&apos;s Pharmacy</p>
            </div>
            <div className="h-6 w-px hidden sm:block" style={{ backgroundColor: "rgba(244,239,230,0.15)" }} />
            <span
              className="text-xs tracking-[0.15em] uppercase font-medium px-3 py-1.5 border"
              style={{ color: "var(--gold)", borderColor: "rgba(184,151,90,0.3)" }}
            >
              503A Licensed · Maryland
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 4 Services ── */}
      <section className="py-20 px-6 md:px-14 max-w-4xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            className="text-xs tracking-[0.2em] uppercase font-medium mb-10"
            style={{ color: "var(--sage)" }}
            variants={fadeUp}
          >
            Here&apos;s what we provide
          </motion.p>

          <motion.div className="flex flex-col gap-0" variants={stagger}>
            {services.map((s) => (
              <motion.div
                key={s.label}
                className="grid grid-cols-12 gap-6 py-8 border-t items-start group cursor-default transition-all duration-300"
                style={{ borderColor: "rgba(14,26,20,0.1)" }}
                variants={fadeUp}
                whileHover={{ x: 4 }}
              >
                <span
                  className="col-span-1 serif text-lg pt-0.5 transition-colors duration-300 group-hover:text-[var(--gold)]"
                  style={{ color: "rgba(14,26,20,0.2)" }}
                >
                  {s.label}
                </span>
                <div className="col-span-11 md:col-span-5">
                  <h3 className="serif text-xl md:text-2xl leading-tight" style={{ color: "var(--ink)" }}>
                    {s.title}
                  </h3>
                </div>
                <p
                  className="col-span-11 col-start-2 md:col-span-6 md:col-start-auto text-sm font-light leading-relaxed"
                  style={{ color: "rgba(14,26,20,0.55)" }}
                >
                  {s.body}
                </p>
              </motion.div>
            ))}
            <div className="border-t" style={{ borderColor: "rgba(14,26,20,0.1)" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section
        id="cta"
        className="py-20 px-6 md:px-14"
        style={{ backgroundColor: "var(--mist)" }}
      >
        <motion.div
          className="max-w-4xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            className="text-xs tracking-[0.2em] uppercase font-medium mb-10"
            style={{ color: "var(--sage)" }}
            variants={fadeUp}
          >
            Thuy offered two options
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-px"
            style={{ backgroundColor: "rgba(14,26,20,0.1)" }}
            variants={stagger}
          >
            {/* Option A */}
            <motion.div
              className="p-8 md:p-10 flex flex-col gap-5"
              style={{ backgroundColor: "var(--ink)" }}
              variants={fadeUp}
            >
              <span className="text-xs tracking-[0.15em] uppercase" style={{ color: "var(--gold)" }}>Option A</span>
              <h2 className="serif text-3xl md:text-4xl leading-tight" style={{ color: "var(--cream)" }}>
                20-minute call
              </h2>
              <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(244,239,230,0.55)" }}>
                Walk through your current discharge process for B12 patients. Thuy will show you exactly how Voshell&apos;s fits in — no protocol changes, no new burden on your team.
              </p>
              <p className="text-xs font-light" style={{ color: "rgba(184,151,90,0.6)" }}>
                Best for: social workers, care coordinators, nurse managers
              </p>
              <a
                href="mailto:thuy@voshellspharmacy.com?subject=B12 Partnership — 20-Minute Call"
                className="mt-2 inline-flex items-center gap-3 px-6 py-3.5 text-sm tracking-[0.1em] uppercase font-medium transition-all duration-300 self-start group"
                style={{ backgroundColor: "var(--gold)", color: "var(--ink)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#c8a86a"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--gold)"; }}
              >
                Schedule with Thuy
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>

            {/* Option B */}
            <motion.div
              className="p-8 md:p-10 flex flex-col gap-5"
              style={{ backgroundColor: "var(--cream)" }}
              variants={fadeUp}
            >
              <span className="text-xs tracking-[0.15em] uppercase" style={{ color: "var(--sage)" }}>Option B</span>
              <h2 className="serif text-3xl md:text-4xl leading-tight" style={{ color: "var(--ink)" }}>
                One-page guide
              </h2>
              <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(14,26,20,0.55)" }}>
                Thuy offered to send a brief overview. Reply to her email with &ldquo;guide&rdquo; and she&apos;ll send the caregiver workflow document — the same one your families would receive on discharge.
              </p>
              <p className="text-xs font-light" style={{ color: "rgba(14,26,20,0.35)" }}>
                Best for: physicians, medical directors, reviewing teams
              </p>
              <a
                href="mailto:thuy@voshellspharmacy.com?subject=guide"
                className="mt-2 inline-flex items-center gap-2 px-6 py-3.5 text-sm tracking-[0.1em] uppercase font-medium border transition-all duration-300 self-start"
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

          {/* Footer line */}
          <motion.p
            className="mt-10 text-xs font-light text-center"
            style={{ color: "rgba(14,26,20,0.3)" }}
            variants={fadeUp}
          >
            Thuy Cao, PharmD · Voshell&apos;s Pharmacy · 503A Compounding · Maryland ·{" "}
            <a
              href="mailto:thuy@voshellspharmacy.com"
              className="underline underline-offset-2 transition-colors duration-200 hover:text-[var(--ink)]"
            >
              thuy@voshellspharmacy.com
            </a>
          </motion.p>
        </motion.div>
      </section>

    </main>
  );
}
