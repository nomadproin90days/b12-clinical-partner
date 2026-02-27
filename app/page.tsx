"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const emails = [
  // ── TIER 1: CORE OUTREACH ──────────────────────────────────────────────────
  {
    id: 1,
    tier: "Core",
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
    tier: "Core",
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
    tier: "Core",
    tag: "Social workers · Discharge coordinators",
    name: "The Discharge Handoff",
    hook: "Speak the language of the person reading it.",
    why: [
      "Social workers think in discharge plans and family readiness — not pharmacy fills. This email speaks that language exactly.",
      "\"What happens after discharge\" is the specific moment where their work is most at risk. Naming it precisely signals Thuy understands their world.",
      "The value here isn't the medication format. It's that Voshell's removes a post-discharge liability from the social worker's caseload.",
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
    tier: "Core",
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
    tier: "Core",
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

  // ── TIER 2: STRATEGIC EXPANSION ───────────────────────────────────────────
  {
    id: 6,
    tier: "Strategic",
    tag: "Delaware · PA · MD · Medicaid patients",
    name: "The Coverage Unlock",
    hook: "Medicaid approval removes the #1 reason families fall through the gap.",
    why: [
      "Medicaid acceptance is news — it gives a specific, time-relevant reason to reach out that isn't a cold pitch. It's an announcement of access.",
      "Names the exact patient barrier (cost of compounded medications) that the approval removes. The prospect immediately thinks of specific patients this affects.",
      "Delaware approval is brand new as of early 2026. Clinics that couldn't partner before due to coverage gaps now have a clear path. This email captures that moment.",
    ],
    solves: "Clinics in Delaware that couldn't refer before due to Medicaid coverage gaps — and any previously cold contact in PA or MD who cited insurance as a barrier.",
    body: `Hi {{first_name}},

Quick update that may be relevant to your patients at {{company}}:

Voshell's Pharmacy is now Medicaid-approved in Delaware — adding to our existing coverage in Maryland and Pennsylvania. Washington DC is in process.

For genetics and metabolism practices, this matters because it removes the most common barrier we hear: families who need home B12 therapy but can't absorb the out-of-pocket cost of compounded medications.

We're a 503A compounding pharmacy providing:
• Pre-loaded syringes and single-dose B12 vials
• Multilingual caregiver instructions
• Direct coordination with your team on refills and Rx changes

If you have Medicaid patients managing B12 at home without a reliable pharmacy partner, this may be the right time to connect.

Happy to do a 20-minute call, or I can send a one-page overview of how the program works.

Best,
Thuy Cao, PharmD
Owner, Voshell's Pharmacy
503A · Medicaid: MD, PA, DE · DC pending
thuy@voshellspharmacy.com`,
  },
  {
    id: 7,
    tier: "Strategic",
    tag: "Pediatric geneticists · Metabolic teams · Genetic counselors",
    name: "The Clinical Peer",
    hook: "When you speak the diagnosis, they know you're not just another pharmacy.",
    why: [
      "Opening with diagnosis names — MMA, PA, cobalamin metabolism disorders — immediately signals clinical credibility. Most pharmacies can't name these conditions. Thuy can. That distinction is felt in the first sentence.",
      "\"We don't change your protocol. We execute it at home.\" is the most reassuring line possible for a metabolic specialist who has spent years calibrating a patient's regimen.",
      "Specifying OHCbl / AdoCbl / MeCbl shows Thuy knows the product differences that matter clinically. This isn't a general B12 email — it's a specialist-to-specialist communication.",
    ],
    solves: "Pediatric geneticists, metabolic dietitians, and genetic counselors at children's hospitals who need a pharmacy that understands their patients' diagnoses — not just the medication.",
    body: `Hi {{first_name}},

For practices managing methylmalonic acidemia, propionic acidemia, and related cobalamin metabolism disorders, home B12 administration is often a long-term reality for families.

I'm Thuy Cao, PharmD — owner of Voshell's Pharmacy in Maryland (503A). We work specifically with genetics and metabolism teams on the compounding and home logistics side of B12 therapy.

For your patients, we provide:

• OHCbl, AdoCbl/MeCbl combinations in the format your team specifies
• Single-dose vials and pre-loaded syringes calibrated to your prescribed doses
• Bilingual caregiver administration guides — English and Spanish
• Direct pharmacy coordination with your metabolic team for refills, dose changes, and caregiver questions

We don't change your protocol. We execute it at home.

If you're currently working with a general pharmacy and running into prep variability or coordination friction, I'd welcome a conversation.

20 minutes by phone, or I can send an overview first.

Best,
Thuy Cao, PharmD
Owner, Voshell's Pharmacy · Maryland
503A · thuy@voshellspharmacy.com`,
  },
  {
    id: 8,
    tier: "Strategic",
    tag: "Medical directors · Practice administrators · Quality leads",
    name: "The Risk Frame",
    hook: "Administrators respond to risk and cost — not clinical features.",
    why: [
      "Frames the pharmacy problem as an operational and liability issue — the language medical directors and administrators actually use in meetings.",
      "\"Readmission risk\" is a word that gets attention in any hospital system. It ties directly to quality metrics, reimbursement rates, and institutional reputation.",
      "\"Recurring coordination cost your team currently absorbs\" names a hidden cost they recognize without having to calculate it. This is the line that gets forwarded.",
    ],
    solves: "Medical directors, department chairs, and practice administrators who think in risk reduction and operational efficiency — not clinical features.",
    body: `Hi {{first_name}},

Most discharge friction in B12 home therapy isn't clinical — it's logistical. And it almost always ends up back on someone's desk at your clinic.

I'm Thuy Cao, PharmD, owner of Voshell's Pharmacy in Maryland (503A licensed). We partner with genetics and metabolism practices to close that gap before the patient gets home.

Here's what typically breaks without a dedicated pharmacy partner:

• No standardized prep instruction → caregiver calls back within 48 hours
• Multi-dose vials → measuring errors, contamination risk, family anxiety
• No dedicated refill pathway → expired Rx, missed doses, avoidable readmission risk

Voshell's handles all three: pre-loaded syringes, multilingual caregiver education, and a single coordination contact for your team.

The business case is simple: one 20-minute onboarding call with us eliminates a recurring coordination cost your team currently absorbs on every B12 discharge.

Worth a conversation?

Thuy Cao, PharmD
Owner, Voshell's Pharmacy · Maryland
thuy@voshellspharmacy.com`,
  },
  {
    id: 9,
    tier: "Strategic",
    tag: "Korean · Vietnamese · Spanish-speaking patient populations",
    name: "The Language Bridge",
    hook: "Language barriers are the most preventable cause of B12 adherence failure.",
    why: [
      "Thuy's identity is the credential here. A Korean-American pharmacist reaching out to clinics serving Korean-American families is a cultural trust signal no other pharmacy in the region can replicate authentically.",
      "\"Families who understand their medication give it correctly\" is one sentence that captures the entire value proposition for this audience. Nothing more is needed.",
      "This email is highly differentiated — no other 503A compounding pharmacy in the Mid-Atlantic can send this email with genuine credibility. It's Thuy's unique market position.",
    ],
    solves: "Clinics serving Korean-American, Vietnamese-American, or Spanish-speaking patient populations where language is the primary home adherence barrier.",
    body: `Hi {{first_name}},

If your practice serves Korean-American or Vietnamese-American families managing injectable B12 at home, language access is often the most preventable source of adherence failure.

I'm Thuy Cao, PharmD — a Korean-American pharmacist and owner of Voshell's Pharmacy in Maryland. We provide multilingual pharmacy support specifically for genetics and metabolism patients.

For your patients, we offer:

• Injectable B12 in single-dose and pre-loaded formats — no measuring required
• Caregiver administration guides in English, Korean, Vietnamese, and Spanish
• A pharmacy team that can communicate directly with Korean and Vietnamese-speaking caregivers
• Direct coordination with your clinic on refills and clinical questions

Families who understand their medication give it correctly.

If you have patients currently managing home B12 with instruction sheets their caregivers can't fully read, I'd welcome a 20-minute call to discuss how we can support them.

Best,
Thuy Cao, PharmD
Owner, Voshell's Pharmacy · Maryland
503A Compounding · thuy@voshellspharmacy.com`,
  },
  {
    id: 10,
    tier: "Strategic",
    tag: "Previously contacted · Medicaid re-engagement",
    name: "The New Development",
    hook: "Something changed. Give them a real reason to reply — not a follow-up.",
    why: [
      "The Medicaid expansion is the \"new development\" that makes a follow-up email feel like news, not a nag. \"Just following up\" never works. New information does.",
      "\"If coverage was a factor before\" gives the prospect an honorable explanation for why they didn't respond. It removes the awkwardness of re-engagement and lets them reply without admitting they ignored the last email.",
      "DC Medicaid pending adds forward momentum — this isn't the last expansion. The story is still developing, which creates reasons for future touchpoints too.",
    ],
    solves: "Any contact who received a previous email and didn't respond. The Medicaid expansion gives a legitimate, non-salesy reason to re-engage without repeating the original pitch.",
    body: `Hi {{first_name}},

I reached out a few weeks ago about our home B12 program for genetics and metabolism patients. I wanted to follow up with a development that may change the picture:

Voshell's Pharmacy is now Medicaid-approved in Delaware, Pennsylvania, and Maryland. Washington DC is in process.

If coverage was a factor before — for your patients or your team's referral comfort — that barrier is now removed for most families in the region.

The program is the same:
• Pre-loaded syringes and single-dose B12 vials
• Bilingual caregiver instructions
• Direct coordination with your team
• No changes to your clinical protocols

If now is a better time to connect, I'd welcome a 20-minute call — or I can send a one-page overview.

Best,
Thuy Cao, PharmD
Owner, Voshell's Pharmacy · Maryland
thuy@voshellspharmacy.com`,
  },
];

const tiers = ["All", "Core", "Strategic"] as const;
type Tier = typeof tiers[number];

export default function Page() {
  const [activeTier, setActiveTier] = useState<Tier>("All");
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [copied, setCopied] = useState(false);

  const filtered = activeTier === "All" ? emails : emails.filter(e => e.tier === activeTier);
  const current = filtered[active] ?? filtered[0];

  const go = (next: number) => {
    setDirection(next > active ? 1 : -1);
    setActive(Math.max(0, Math.min(filtered.length - 1, next)));
    setCopied(false);
  };

  const handleTier = (t: Tier) => {
    setActiveTier(t);
    setActive(0);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(current.body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 50 : -50 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -50 : 50 }),
  };

  return (
    <main style={{ backgroundColor: "var(--cream)", color: "var(--ink)", minHeight: "100vh" }}>

      {/* ── Header ── */}
      <header
        className="sticky top-0 z-50 px-6 md:px-10 flex items-center justify-between"
        style={{
          height: "54px",
          backgroundColor: "rgba(244,239,230,0.96)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(14,26,20,0.08)",
        }}
      >
        <span className="serif text-sm" style={{ color: "var(--ink)" }}>
          Voshell&apos;s Pharmacy
        </span>
        <span className="text-xs font-light hidden sm:block" style={{ color: "rgba(14,26,20,0.35)" }}>
          B12 Outreach Toolkit · Strategy by Ryan Christmas
        </span>
      </header>

      {/* ── Intro ── */}
      <div className="px-6 md:px-10 pt-10 pb-6 max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase font-medium mb-3" style={{ color: "var(--sage)" }}>
          10 templates · 2 tiers · swipe to browse
        </p>
        <h1 className="serif text-4xl md:text-5xl leading-tight tracking-tight mb-3" style={{ color: "var(--ink)" }}>
          The right message<br />
          <span className="serif-italic" style={{ color: "var(--gold)" }}>for every contact.</span>
        </h1>
        <p className="text-sm font-light leading-relaxed max-w-2xl" style={{ color: "rgba(14,26,20,0.5)" }}>
          <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Core templates</strong> cover the full cold outreach sequence.{" "}
          <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Strategic templates</strong> are built around Thuy&apos;s specific
          advantages — Medicaid approval in MD, PA, and DE; pediatric genetics expertise;
          Korean and Vietnamese language capability; and the clinical credibility of a 503A
          specialist. Use these where the generic outreach won&apos;t land.
        </p>
      </div>

      {/* ── Tier filter ── */}
      <div
        className="sticky top-[54px] z-40 px-6 md:px-10 flex items-center gap-2"
        style={{
          backgroundColor: "rgba(244,239,230,0.96)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(14,26,20,0.08)",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <span className="text-xs font-light mr-2" style={{ color: "rgba(14,26,20,0.3)" }}>Filter:</span>
        {tiers.map((t) => (
          <button
            key={t}
            onClick={() => handleTier(t)}
            className="px-4 py-1.5 text-xs tracking-[0.1em] uppercase font-medium border transition-all duration-200"
            style={{
              backgroundColor: activeTier === t ? "var(--ink)" : "transparent",
              color: activeTier === t ? "var(--cream)" : "rgba(14,26,20,0.45)",
              borderColor: activeTier === t ? "var(--ink)" : "rgba(14,26,20,0.12)",
            }}
          >
            {t === "All" ? `All (${emails.length})` : `${t} (${emails.filter(e => e.tier === t).length})`}
          </button>
        ))}

        {/* Dot indicators */}
        <div className="flex items-center gap-1.5 ml-auto">
          {filtered.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: active === i ? "20px" : "7px",
                height: "7px",
                backgroundColor: active === i ? "var(--ink)" : "rgba(14,26,20,0.18)",
              }}
              aria-label={`Template ${i + 1}`}
            />
          ))}
          <span className="ml-2 text-xs font-light" style={{ color: "rgba(14,26,20,0.3)" }}>
            {active + 1}/{filtered.length}
          </span>
        </div>
      </div>

      {/* ── Carousel ── */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`${activeTier}-${active}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60 && active < filtered.length - 1) go(active + 1);
              if (info.offset.x > 60 && active > 0) go(active - 1);
            }}
            className="max-w-5xl mx-auto px-6 md:px-10 py-10 cursor-grab active:cursor-grabbing"
          >
            {/* Version header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-xs tracking-[0.14em] uppercase font-medium px-2.5 py-1"
                    style={{
                      backgroundColor: current.tier === "Strategic" ? "rgba(61,90,74,0.1)" : "rgba(14,26,20,0.06)",
                      color: current.tier === "Strategic" ? "var(--sage)" : "rgba(14,26,20,0.5)",
                    }}
                  >
                    {current.tier}
                  </span>
                  <span className="text-xs font-light" style={{ color: "rgba(14,26,20,0.35)" }}>
                    {current.tag}
                  </span>
                </div>
                <h2 className="serif text-3xl md:text-4xl" style={{ color: "var(--ink)" }}>
                  {current.name}
                </h2>
                <p className="text-sm font-light mt-1" style={{ color: "rgba(14,26,20,0.5)" }}>
                  {current.hook}
                </p>
              </div>
              <span
                className="serif text-5xl font-normal"
                style={{ color: "rgba(14,26,20,0.07)" }}
                aria-hidden
              >
                {String(current.id).padStart(2, "0")}
              </span>
            </div>

            {/* Two-column */}
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-px"
              style={{ backgroundColor: "rgba(14,26,20,0.1)" }}
            >
              {/* Email */}
              <div className="p-8 flex flex-col gap-4" style={{ backgroundColor: "var(--cream)" }}>
                <div className="flex items-center justify-between">
                  <p className="text-xs tracking-[0.14em] uppercase font-medium" style={{ color: "rgba(14,26,20,0.3)" }}>
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
                <p className="text-xs tracking-[0.14em] uppercase font-medium" style={{ color: "rgba(14,26,20,0.3)" }}>
                  Why this version works
                </p>
                <div className="flex flex-col gap-5">
                  {current.why.map((w, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="serif text-sm flex-shrink-0 mt-0.5 w-4" style={{ color: "rgba(14,26,20,0.2)" }}>
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
                onClick={() => go(active - 1)}
                disabled={active === 0}
                className="text-xs tracking-[0.12em] uppercase font-medium px-5 py-2.5 border transition-all duration-200 disabled:opacity-20"
                style={{ borderColor: "rgba(14,26,20,0.15)", color: "rgba(14,26,20,0.6)" }}
              >
                ← Previous
              </button>
              <div className="text-xs font-light text-center" style={{ color: "rgba(14,26,20,0.3)" }}>
                {active + 1} of {filtered.length}
                {activeTier !== "All" && (
                  <span className="ml-2" style={{ color: "rgba(14,26,20,0.2)" }}>
                    · {activeTier} templates
                  </span>
                )}
              </div>
              <button
                onClick={() => go(active + 1)}
                disabled={active === filtered.length - 1}
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
      <div className="border-t px-6 md:px-10 py-7 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "rgba(14,26,20,0.1)" }}>
        <p className="text-xs font-light" style={{ color: "rgba(14,26,20,0.3)" }}>
          Thuy Cao, PharmD · Voshell&apos;s Pharmacy · 503A · Maryland ·{" "}
          <a href="mailto:thuy@voshellspharmacy.com" className="underline underline-offset-2">
            thuy@voshellspharmacy.com
          </a>
        </p>
        <p className="text-xs font-light" style={{ color: "rgba(14,26,20,0.2)" }}>
          Outreach strategy by Ryan Christmas
        </p>
      </div>

    </main>
  );
}
