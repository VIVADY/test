"use client";

import { Search, Bell } from "lucide-react";

export default function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "grid",
        gridTemplateColumns: "200px 1fr 200px",
        alignItems: "center",
        padding: "18px 28px",
        background:
          "linear-gradient(180deg, rgba(11,13,14,0.85) 0%, rgba(11,13,14,0.0) 100%)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          letterSpacing: "0.42em",
          fontWeight: 600,
          fontSize: 14,
          color: "var(--fg)",
        }}
      >
        T E M E N
      </div>

      <div
        style={{
          display: "flex",
          gap: 32,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {[
          { label: "대시보드", href: "#dashboard", active: true },
          { label: "가계부", href: "#ledger" },
          { label: "자동차", href: "#car" },
          { label: "살펴보기", href: "#more" },
        ].map(({ label, href, active }) => (
          <a
            key={label}
            href={href}
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: active ? "var(--fg)" : "var(--fg-2)",
              padding: "6px 10px",
              borderRadius: 8,
              transition: "background 0.15s, color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,0.06)";
              (e.currentTarget as HTMLElement).style.color = "var(--fg)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = active
                ? "var(--fg)"
                : "var(--fg-2)";
            }}
          >
            {label}
          </a>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: 14,
          justifyContent: "flex-end",
          alignItems: "center",
          color: "var(--fg-3)",
        }}
      >
        {[Search, Bell].map((Icon, i) => (
          <button
            key={i}
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--fg-3)",
              transition: "background 0.15s, color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLElement).style.color = "var(--fg)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--fg-3)";
            }}
          >
            <Icon size={16} strokeWidth={1.6} />
          </button>
        ))}
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #3a4148, #1d2125)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            fontWeight: 600,
            color: "var(--fg)",
            cursor: "default",
          }}
        >
          JK
        </div>
      </div>
    </nav>
  );
}
