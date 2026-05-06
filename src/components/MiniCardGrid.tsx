"use client";

import { useState } from "react";

interface MiniCardProps {
  bgUrl: string;
  eyebrow: string;
  title: string;
  description: string;
  topRight?: React.ReactNode;
  miniData: { key: string; value: string }[];
}

function MiniCard({ bgUrl, eyebrow, title, description, topRight, miniData }: MiniCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{ position: "relative", overflow: "hidden", height: 420, borderRadius: "var(--radius-lg)", background: "var(--bg-2)", cursor: "default" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${bgUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.6s",
          transform: hovered ? "scale(1.04)" : "scale(1)",
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(11,13,14,0.0) 30%, rgba(11,13,14,0.92) 100%)",
        }}
      />

      {/* Top right slot */}
      {topRight && (
        <div style={{ position: "absolute", top: 24, right: 24, zIndex: 2 }}>{topRight}</div>
      )}

      {/* Mini data */}
      <div
        style={{
          position: "absolute",
          top: 26,
          left: 28,
          right: 28,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {miniData.map(({ key, value }) => (
          <div
            key={key}
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12 }}
          >
            <span
              style={{
                color: "var(--fg-3)",
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              — {key}
            </span>
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--fg)", fontSize: 12 }}>{value}</span>
          </div>
        ))}
      </div>

      {/* Body */}
      <div
        style={{
          position: "absolute",
          left: 28,
          right: 28,
          bottom: 26,
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.18em",
            color: "var(--fg-2)",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          — {eyebrow}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: 28,
            letterSpacing: "-0.02em",
            margin: "0 0 8px",
          }}
        >
          {title}
        </h3>
        <p style={{ color: "var(--fg-2)", fontSize: 13, lineHeight: 1.5, margin: "0 0 14px" }}>
          {description}
        </p>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--fg)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            borderBottom: "1px solid var(--fg)",
            paddingBottom: 2,
            display: "inline-block",
          }}
        >
          살펴보기 →
        </span>
      </div>
    </div>
  );
}

function ProgressRing({ pct }: { pct: number }) {
  const r = 26;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct / 100);
  return (
    <svg width={64} height={64} viewBox="0 0 64 64">
      <circle cx={32} cy={32} r={r} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth={4} />
      <circle
        cx={32}
        cy={32}
        r={r}
        fill="none"
        stroke="var(--fg)"
        strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform="rotate(-90 32 32)"
      />
      <text x={32} y={36} textAnchor="middle" fill="var(--fg)" fontFamily="Inter" fontSize={13} fontWeight={500}>
        {pct}%
      </text>
    </svg>
  );
}

export default function MiniCardGrid() {
  return (
    <section id="more" style={{ padding: "96px 28px", maxWidth: 1440, margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: 48,
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.2em",
              color: "var(--fg-3)",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            — More categories
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: 40,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            그 밖의 영역
          </h2>
        </div>
        <p style={{ color: "var(--fg-3)", fontSize: 14, maxWidth: 360, lineHeight: 1.55, margin: 0 }}>
          언제든 새로운 카테고리를 추가할 수 있어요. 일상의 어떤 숫자든 TEMEN이 정리해 드립니다.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        <MiniCard
          bgUrl="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=85&auto=format&fit=crop"
          eyebrow="Health"
          title="건강 · 운동"
          description="걸음 수, 운동 빈도, 체성분 변화를 한 줄로."
          topRight={<ProgressRing pct={74} />}
          miniData={[
            { key: "Steps", value: "8,420 / 10k" },
            { key: "Run", value: "12 days" },
          ]}
        />
        <MiniCard
          bgUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=85&auto=format&fit=crop"
          eyebrow="Subscriptions"
          title="구독 관리"
          description="잊고 있던 결제까지 한 눈에. 자동으로 정리됩니다."
          miniData={[
            { key: "Active", value: "12 services" },
            { key: "Monthly", value: "₩ 147,800" },
            { key: "Next", value: "Netflix · D-3" },
          ]}
        />
        <MiniCard
          bgUrl="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&q=85&auto=format&fit=crop"
          eyebrow="Tasks"
          title="할 일 · 메모"
          description="흩어진 메모와 오늘의 할 일을 한 곳에서."
          miniData={[
            { key: "Today", value: "3 / 7" },
            { key: "Notes", value: "128" },
            { key: "Pinned", value: "4" },
          ]}
        />
      </div>
    </section>
  );
}
