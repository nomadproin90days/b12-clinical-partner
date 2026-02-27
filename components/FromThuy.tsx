"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export default function FromThuy() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--mist)", borderTop: "1px solid rgba(14,26,20,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Left label */}
          <motion.div className="lg:col-span-3 flex flex-col gap-3" variants={fadeUp}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px" style={{ backgroundColor: "var(--sage)", opacity: 0.4 }} />
              <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: "var(--sage)" }}>
                A note from Thuy
              </span>
            </div>
            {/* Avatar placeholder — initials */}
            <div
              className="mt-4 w-14 h-14 rounded-full flex items-center justify-center serif text-xl"
              style={{ backgroundColor: "var(--sage)", color: "var(--cream)" }}
            >
              TC
            </div>
            <p className="text-sm font-medium mt-2" style={{ color: "var(--ink)" }}>Thuy Cao, PharmD</p>
            <p className="text-xs font-light" style={{ color: "rgba(14,26,20,0.45)" }}>Owner, Voshell&apos;s Pharmacy</p>
            <p className="text-xs font-light" style={{ color: "rgba(14,26,20,0.35)" }}>503A · Maryland</p>
          </motion.div>

          {/* Right: the letter */}
          <motion.div className="lg:col-span-9" variants={stagger}>
            <motion.blockquote
              className="serif-italic text-2xl md:text-3xl lg:text-4xl leading-snug mb-8"
              style={{ color: "var(--ink)" }}
              variants={fadeUp}
            >
              &ldquo;I started this program because I kept hearing the same thing from social workers: families were going home with a vial, a syringe, and no real plan. We can fix that — without touching anything in your clinical workflow.&rdquo;
            </motion.blockquote>

            <motion.div
              className="flex flex-col gap-4 text-sm font-light leading-relaxed max-w-2xl"
              style={{ color: "rgba(14,26,20,0.6)" }}
              variants={stagger}
            >
              <motion.p variants={fadeUp}>
                If you received my email, you work with families navigating injectable B12 therapy at home — and you know how quickly things break down without the right support structure. Prep errors, missed refills, caregiver confusion at 8pm on a Friday.
              </motion.p>
              <motion.p variants={fadeUp}>
                Voshell&apos;s handles the pharmacy side so your team doesn&apos;t have to. Below is exactly what that looks like in practice.
              </motion.p>
            </motion.div>

            {/* Credential strip */}
            <motion.div
              className="flex flex-wrap gap-6 mt-10 pt-8 border-t"
              style={{ borderColor: "rgba(14,26,20,0.1)" }}
              variants={stagger}
            >
              {[
                "503A Licensed",
                "USP 797 Compounding",
                "Maryland · PA · DE",
                "Social Work Coordination",
              ].map((tag) => (
                <motion.span
                  key={tag}
                  className="text-xs tracking-[0.12em] uppercase font-medium"
                  style={{ color: "rgba(14,26,20,0.4)" }}
                  variants={fadeUp}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
