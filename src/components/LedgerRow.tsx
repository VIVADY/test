"use client";

import { useEffect, useRef } from "react";

const panelStyle: React.CSSProperties = {
  background: "rgba(20,23,26,0.72)",
  backdropFilter: "blur(18px)",
  border: "1px solid var(--line-2)",
  borderRadius: "var(--radius)",
  padding: 22,
};

const SPEND_DATA = [42, 28, 65, 18, 33, 71, 55, 12, 48, 25, 60, 38, 82, 46, 30];
const CATEGORIES = [
  { name: "식비", pct: 84, amount: "624,800" },
  { name: "교통", pct: 62, amount: "421,000" },
  { name: "주거", pct: 48, amount: "350,000" },
  { name: "쇼핑", pct: 36, amount: "238,400" },
  { name: "기타", pct: 30, amount: "213,000" },
];

function DailySpendPanel() {
  const max = Math.max(...SPEND_DATA);
  const today = new Date().getDate();

  return (
    <div style={panelStyle}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 18,
        }}
      >
        <span
          style={{
            fontSize: 12,
            color: "var(--fg-3)",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          — Daily Spend · 11월
        </span>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            fontWeight: 500,
          }}
        >
          ₩ 1,847,200
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 10,
          height: 120,
          paddingTop: 10,
        }}
      >
        {SPEND_DATA.map((v, i) => {
          const isDim = i < SPEND_DATA.length - 5;
          const dayLabel = today - (SPEND_DATA.length - 1 - i);
          return (
            <div
              key={i}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: `${10 + (v / max) * 90}%`,
                  background: isDim ? "var(--fg-4)" : "var(--fg)",
                  borderRadius: "3px 3px 0 0",
                  opacity: isDim ? 0.6 : 0.85,
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "var(--fg-3)",
                  letterSpacing: "0.06em",
                }}
              >
                {dayLabel > 0 ? dayLabel : ""}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CategoryPanel() {
  return (
    <div style={panelStyle}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 18,
        }}
      >
        <span
          style={{
            fontSize: 12,
            color: "var(--fg-3)",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          — By Category
        </span>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            fontWeight: 500,
          }}
        >
          5
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {CATEGORIES.map(({ name, pct, amount }) => (
          <div
            key={name}
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              gap: 12,
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 13, color: "var(--fg-2)", minWidth: 32 }}>{name}</span>
            <div
              style={{
                height: 4,
                background: "rgba(255,255,255,0.08)",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${pct}%`,
                  background: "var(--fg)",
                  borderRadius: 4,
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--fg)",
              }}
            >
              {amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const btnBase: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: 42,
  padding: "0 28px",
  borderRadius: 22,
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: "0.02em",
  border: "1px solid transparent",
  cursor: "pointer",
  minWidth: 160,
  textDecoration: "none",
  transition: "all 0.15s",
};

export default function LedgerRow() {
  return (
    <section id="ledger" style={{ paddingTop: 0, paddingBottom: 0, maxWidth: "none" }}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "var(--radius-lg)",
          height: 540,
          background: "var(--bg-2)",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=2400&q=85&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Gradient overlays */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(11,13,14,0.85) 0%, rgba(11,13,14,0.4) 50%, rgba(11,13,14,0.0) 100%), linear-gradient(180deg, rgba(11,13,14,0.0) 70%, rgba(11,13,14,0.7) 100%)",
          }}
        />

        {/* Text content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: 56,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            maxWidth: 580,
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "var(--fg-2)",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            — Ledger
          </div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: 56,
              letterSpacing: "-0.025em",
              lineHeight: 1,
              margin: "0 0 14px",
            }}
          >
            가계부
          </h3>
          <p
            style={{
              color: "var(--fg-2)",
              fontSize: 15,
              lineHeight: 1.55,
              maxWidth: 460,
              margin: "0 0 28px",
            }}
          >
            매일의 지출이 자동으로 분류되어 한 달의 흐름이 됩니다. 카테고리별 패턴을 살피고
            다음 달 예산을 설계하세요.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <a style={{ ...btnBase, background: "var(--fg)", color: "#0b0d0e" }}>상세 보기</a>
            <a
              style={{
                ...btnBase,
                background: "rgba(20,23,26,0.55)",
                color: "var(--fg)",
                borderColor: "rgba(255,255,255,0.18)",
                backdropFilter: "blur(6px)",
              }}
            >
              거래 추가
            </a>
          </div>
        </div>

        {/* Floating panels */}
        <div
          style={{
            position: "absolute",
            left: 56,
            right: 56,
            bottom: 56,
            zIndex: 2,
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 14,
          }}
        >
          <DailySpendPanel />
          <CategoryPanel />
        </div>
      </div>
    </section>
  );
}
