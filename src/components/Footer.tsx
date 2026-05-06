"use client";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 28px 28px",
        borderTop: "1px solid var(--line)",
        marginTop: 40,
        color: "var(--fg-3)",
        fontSize: 12,
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>TEMEN © 2026 · 내 정보의 모든 것</div>
        <div style={{ display: "flex", gap: 24 }}>
          {["About", "Privacy", "Backup", "Help"].map((label) => (
            <a
              key={label}
              href="#"
              style={{ color: "var(--fg-3)", transition: "color 0.15s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--fg)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--fg-3)")}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
