"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const emails = [
  {
    id: 1,
    tag: "Cold outreach · Any role",
    name: "The Problem-First",
    hook: "Lead with friction they already feel — before you mention your name.",
    why: [
      "Opens with a problem the prospect recognizes from their own week. You earn the right to be read before you pitch anything.",
      "Thuy becomes the answer to a problem they already have — not a vendor asking for time.",
      "The four services are presented as solutions to three named frictions. Each one earns its place.",
    ],
    solves: "Prospects who scan and delete anything that feels like a pitch.",
    body: `Hi {{first_name}},

I'm Thuy Cao, owner of Voshell's Pharmacy — a 503A licensed compounding pharmacy in Maryland.

I work with hospital social workers and genetics/metabolism teams who support families managing injectable B12 at home.

Here's the problem I keep hearing about:

Families leave the clinic with a vial, a needle, and no real plan. Caregivers make prep errors. Your coordinators field the callbacks. Refills fall through the gap between your team and the pharmacy.

We fix all three.

For your appropriate B12 patients, Voshell's provides:

• Single-dose vials — safer for home administration, no multi-dose risk
• Pre-loaded syringes — when clinically appropriate, ready to inject, no measuring
• Multilingual caregiver instructions — English and Spanish, written for families not clinicians
• Direct coordination with your team — one contact for refills, Rx changes, and caregiver questions. They call us, not you.

None of this changes your existing clinical protocols.

Two ways to connect:
1. A 20-minute call to walk through how this works for your patients
2. I can send a one-page overview you can review on your own time

Just reply and let me know which works better.

Best,
Thuy Cao, PharmD
Owner, Voshell's Pharmacy
503A Compounding · Maryland
thuy@voshellspharmacy.com`,
  },
  {
    id: 2,
    tag: "Medical directors · Dept. heads",
    name: "The One-Question",
    hook: "Busy people don't read. They answer questions.",
    why: [
      "Medical directors delete long emails. A single direct question is harder to ignore than three paragraphs of context.",
      "This version qualifies rather than sells. If they answer yes, the conversation has already started.",
      "Brevity signals respect for their time — which builds trust before the first call.",
    ],
    solves: "Senior contacts who won't read a long email but will answer a good question.",
    body: `Hi {{first_name}},

Quick question — are families at {{company}} still going home on injectable B12 without a standardized prep and refill setup?

I ask because we've built a program specifically for genetics and metabolism practices that handles the pharmacy side — pre-loaded syringes, multilingual caregiver instructions, and direct coordination with your team — without changing your clinical protocols.

Worth a 20-minute conversation?

Thuy Cao, PharmD
Owner, Voshell's Pharmacy · Maryland
thuy@voshellspharmacy.com`,
  },
  {
    id: 3,
    tag: "Social workers · Discharge coordinators",
    name: "The Discharge Handoff",
    hook: "Speak the language of the person reading it.",
    why: [
      "Social workers think in discharge plans and family readiness — not pharmacy fills. This email speaks that language exactly.",
      "\"What happens after discharge\" is the specific moment where their work is most at risk. Naming it precisely signals Thuy understands their world.",
      "The value here isn't the medication format. It's that Voshell's removes a post-discharge liability from their caseload.",
    ],
    solves: "Social workers buried in discharge coordination who don't see pharmacy as a partner.",
    body: `Hi {{first_name}},

When you're coordinating discharge for a patient going home on injectable B12, what does the handoff to home care actually look like?

I'm Thuy Cao, PharmD — owner of Voshell's Pharmacy in Maryland. We work specifically with social work teams to make that handoff cleaner.

What that means in practice:

• Families leave with pre-loaded syringes or single-dose vials — nothing to measure, nothing to draw
• Written caregiver instructions in English and Spanish — clear enough for any family member
• Direct line to our pharmacy for questions — they call us, not your office
• We coordinate refills and Rx changes directly with your clinic

The goal is simple: reduce what comes back to you after discharge.

If this is relevant to your current patients, I'd welcome a 20-minute call — or I can send a one-page overview. Just reply with "overview" and I'll get it to you.

Best,
Thuy Cao, PharmD
Owner, Voshell's Pharmacy · Maryland
thuy@voshellspharmacy.com`,
  },
  {
    id: 4,
    tag: "Skeptical contacts · Peer-motivated buyers",
    name: "The Social Proof",
    hook: "If peers are doing it, the risk of engaging drops to zero.",
    why: [
      "Some contacts don't respond to problem framing — they respond to what similar organizations are already doing. Social proof removes the perceived risk of being first.",
      "\"Teams like yours\" does more persuasive work than any feature list. It implies this is a known solution, not an experiment.",
      "Works as a follow-up to a non-response on Version 1 — it shifts the frame from pitch to peer activity.",
    ],
    solves: "Contacts who are interested but cautious — they want to know someone else has already tried this.",
    body: `Hi {{first_name}},

Several genetics and metabolism teams in Maryland and Pennsylvania have started using a standardized home B12 setup through our pharmacy — and the biggest feedback we hear is that it reduces coordination callbacks to the clinic.

I'm Thuy Cao, owner of Voshell's Pharmacy in Maryland (503A licensed). We support families with:

• Pre-loaded syringes or single-dose vials — removes prep variability at home
• Multilingual written instructions — English and Spanish for caregivers
• One direct contact for your team — refills, Rx changes, caregiver questions all go through us

The workflow doesn't change anything on your end. We fit into your existing discharge process.

If it's useful, I can share a one-page overview of how other practices have set this up — or we can do a quick 20-minute call.

Best,
Thuy Cao, PharmD
Owner, Voshell's Pharmacy · Maryland
thuy@voshellspharmacy.com`,
  },
  {
    id: 5,
    tag: "Non-responders · Re-engagement",
    name: "The No-Ask",
    hook: "Give something useful. Don't ask for anything.",
    why: [
      "If previous emails haven't gotten a response, asking for a meeting again won't work. This version breaks the pattern — it offers something with no strings attached.",
      "A useful resource sent without a meeting request builds goodwill. When the prospect is ready, Thuy is already in their inbox as someone who gave before they took.",
      "\"Reply with 'guide'\" is the lowest-friction CTA possible. It requires one word. That's the point.",
    ],
    solves: "Contacts who haven't responded to multiple touchpoints — you need to reset the relationship.",
    body: `Hi {{first_name}},

I put together a one-page guide on how to set up home B12 administration for caregivers — covering format options, prep instructions, and what the refill coordination pathway looks like.

I thought it might be useful for your team, especially for families navigating this for the first time.

No agenda — happy to send it if it's helpful. Just reply with "guide."

Thuy Cao, PharmD
Owner, Voshell's Pharmacy · Maryland
thuy@voshellspharmacy.com`,
  },
];

export default function Page() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [copied, setCopied] = useState(false);

  const go = (next: number) => {
    setDirection(next > active ? 1 : -1);
    setActive(next);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(emails[active].body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const current = emails[active];

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  return (
    <main style={{ backgroundColor: "var(--cream)", color: "var(--ink)", minHeight: "100vh" }}>

      {/* ── Header ── */}
      <header
        className="sticky top-0 z-50 px-6 md:px-10 flex items-center justify-between"
        style={{
          height: "54px",
          backgroundColor: "rgba(244,239,230,0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(14,26,20,0.08)",
        }}
      >
        <span className="serif text-sm" style={{ color: "var(--ink)" }}>
          Voshell&apos;s Pharmacy
        </span>
        <span className="text-xs font-light" style={{ color: "rgba(14,26,20,0.35)" }}>
          B12 Outreach Toolkit · 5 Templates
        </span>
      </header>

      {/* ── Intro ── */}
      <div className="px-6 md:px-10 pt-10 pb-8 max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase font-medium mb-3" style={{ color: "var(--sage)" }}>
          Swipe or use arrows to browse
        </p>
        <h1 className="serif text-4xl md:text-5xl leading-tight tracking-tight" style={{ color: "var(--ink)" }}>
          Pick the version that fits<br />
          <span className="serif-italic" style={{ color: "var(--gold)" }}>who you&apos;re writing to.</span>
        </h1>
      </div>

      {/* ── Dot indicators ── */}
      <div className="flex items-center gap-2 px-6 md:px-10 mb-6">
        {emails.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: active === i ? "24px" : "8px",
              height: "8px",
              backgroundColor: active === i ? "var(--ink)" : "rgba(14,26,20,0.2)",
            }}
            aria-label={`Version ${i + 1}`}
          />
        ))}
        <span className="ml-3 text-xs font-light" style={{ color: "rgba(14,26,20,0.35)" }}>
          {active + 1} / {emails.length}
        </span>
      </div>

      {/* ── Carousel ── */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60 && active < emails.length - 1) go(active + 1);
              if (info.offset.x > 60 && active > 0) go(active - 1);
            }}
            className="max-w-5xl mx-auto px-6 md:px-10 pb-12 cursor-grab active:cursor-grabbing"
          >
            {/* Version header */}
            <div className="mb-6">
              <span
                className="inline-block text-xs tracking-[0.14em] uppercase font-medium px-3 py-1.5 mb-3"
                style={{ backgroundColor: "rgba(14,26,20,0.06)", color: "var(--sage)" }}
              >
                {current.tag}
              </span>
              <h2 className="serif text-3xl md:text-4xl mb-1" style={{ color: "var(--ink)" }}>
                {current.name}
              </h2>
              <p className="text-sm font-light" style={{ color: "rgba(14,26,20,0.5)" }}>
                {current.hook}
              </p>
            </div>

            {/* Two-column: email + rationale */}
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-px"
              style={{ backgroundColor: "rgba(14,26,20,0.1)" }}
            >
              {/* Email */}
              <div className="p-8 flex flex-col gap-4" style={{ backgroundColor: "var(--cream)" }}>
                <div className="flex items-center justify-between">
                  <p className="text-xs tracking-[0.14em] uppercase font-medium" style={{ color: "rgba(14,26,20,0.35)" }}>
                    Email copy
                  </p>
                  <button
                    onClick={handleCopy}
                    className="text-xs tracking-wide font-medium px-3 py-1.5 border transition-all duration-200"
                    style={{
                      borderColor: copied ? "var(--sage)" : "rgba(14,26,20,0.15)",
                      color: copied ? "var(--sage)" : "rgba(14,26,20,0.45)",
                    }}
                  >
                    {copied ? "Copied ✓" : "Copy"}
                  </button>
                </div>
                <pre
                  className="text-sm font-light leading-relaxed whitespace-pre-wrap select-text"
                  style={{ color: "rgba(14,26,20,0.8)", fontFamily: "inherit" }}
                >
                  {current.body}
                </pre>
              </div>

              {/* Rationale */}
              <div className="p-8 flex flex-col gap-6" style={{ backgroundColor: "var(--mist)" }}>
                <p className="text-xs tracking-[0.14em] uppercase font-medium" style={{ color: "rgba(14,26,20,0.35)" }}>
                  Why this version works
                </p>

                <div className="flex flex-col gap-5">
                  {current.why.map((w, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="serif text-base flex-shrink-0 mt-0.5" style={{ color: "rgba(14,26,20,0.2)" }}>
                        {i + 1}.
                      </span>
                      <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(14,26,20,0.65)" }}>
                        {w}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  className="p-5 border-l-2"
                  style={{ borderColor: "var(--gold)", backgroundColor: "rgba(184,151,90,0.06)" }}
                >
                  <p className="text-xs tracking-[0.12em] uppercase font-medium mb-2" style={{ color: "var(--gold)" }}>
                    Best used for
                  </p>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(14,26,20,0.6)" }}>
                    {current.solves}
                  </p>
                </div>
              </div>
            </div>

            {/* Prev / Next */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={() => active > 0 && go(active - 1)}
                disabled={active === 0}
                className="text-xs tracking-[0.12em] uppercase font-medium px-5 py-2.5 border transition-all duration-200 disabled:opacity-20"
                style={{ borderColor: "rgba(14,26,20,0.15)", color: "rgba(14,26,20,0.6)" }}
              >
                ← Previous
              </button>
              <button
                onClick={() => active < emails.length - 1 && go(active + 1)}
                disabled={active === emails.length - 1}
                className="text-xs tracking-[0.12em] uppercase font-medium px-5 py-2.5 border transition-all duration-200 disabled:opacity-20"
                style={{ borderColor: "rgba(14,26,20,0.15)", color: "rgba(14,26,20,0.6)" }}
              >
                Next →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Footer ── */}
      <div className="border-t px-6 md:px-10 py-7" style={{ borderColor: "rgba(14,26,20,0.1)" }}>
        <p className="text-xs font-light text-center" style={{ color: "rgba(14,26,20,0.3)" }}>
          Thuy Cao, PharmD · Voshell&apos;s Pharmacy · 503A Compounding · Maryland ·{" "}
          <a href="mailto:thuy@voshellspharmacy.com" className="underline underline-offset-2">
            thuy@voshellspharmacy.com
          </a>
        </p>
      </div>
    </main>
  );
}
