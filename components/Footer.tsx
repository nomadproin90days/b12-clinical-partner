"use client";

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 md:px-12"
      style={{ backgroundColor: "var(--ink)", borderTop: "1px solid rgba(244,239,230,0.06)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="serif text-sm" style={{ color: "rgba(244,239,230,0.4)" }}>
          Voshell&apos;s Pharmacy
        </span>
        <p className="text-xs font-light text-center" style={{ color: "rgba(244,239,230,0.2)" }}>
          Licensed compounding pharmacy · USP 797 · PA / DE
        </p>
        <p className="text-xs font-light" style={{ color: "rgba(244,239,230,0.2)" }}>
          © {new Date().getFullYear()} Voshell&apos;s Pharmacy
        </p>
      </div>
    </footer>
  );
}
