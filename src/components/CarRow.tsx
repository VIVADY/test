const panelStyle: React.CSSProperties = {
  background: "rgba(20,23,26,0.7)",
  backdropFilter: "blur(18px)",
  border: "1px solid var(--line-2)",
  borderRadius: "var(--radius)",
  padding: 20,
};

const CAR_STATS = [
  { label: "ODOMETER", value: "42,184", unit: "km · 현대 아반떼" },
  { label: "평균 연비", value: "12.4", unit: "km/L · 30일 평균" },
  { label: "이번 달 주행", value: "1,284", unit: "km · ₩168,400 연료비" },
  { label: "다음 정비", value: "2,816", unit: "km 후 · 엔진오일" },
];

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

export default function CarRow() {
  return (
    <section id="car" style={{ paddingTop: 14, paddingBottom: 0, maxWidth: "none" }}>
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
              "url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=2400&q=85&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(11,13,14,0.4) 0%, rgba(11,13,14,0.0) 30%, rgba(11,13,14,0.0) 50%, rgba(11,13,14,0.92) 100%)",
          }}
        />

        {/* Text content — top center */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "64px 56px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
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
            — Garage
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
            자동차 관리
          </h3>
          <p
            style={{
              color: "var(--fg-2)",
              fontSize: 15,
              lineHeight: 1.55,
              maxWidth: 460,
              margin: "0 auto 28px",
            }}
          >
            주행거리, 연비, 주유와 충전 이력까지. 차에 대한 모든 숫자를 차례대로 살펴보세요.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
            <a
              style={{
                ...btnBase,
                background: "rgba(20,23,26,0.55)",
                color: "var(--fg)",
                borderColor: "rgba(255,255,255,0.18)",
                backdropFilter: "blur(6px)",
              }}
            >
              기록 추가
            </a>
            <a style={{ ...btnBase, background: "var(--fg)", color: "#0b0d0e" }}>차고 열기</a>
          </div>
        </div>

        {/* Stats grid — bottom */}
        <div
          style={{
            position: "absolute",
            left: 56,
            right: 56,
            bottom: 56,
            zIndex: 2,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 14,
          }}
        >
          {CAR_STATS.map(({ label, value, unit }) => (
            <div key={label} style={panelStyle}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  color: "var(--fg-3)",
                  textTransform: "uppercase",
                }}
              >
                — {label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: 30,
                  letterSpacing: "-0.02em",
                  margin: "8px 0 4px",
                }}
              >
                {value}
              </div>
              <div style={{ color: "var(--fg-3)", fontSize: 12 }}>{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
