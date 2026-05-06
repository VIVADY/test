export default function Hero() {
  return (
    <section
      style={{
        height: "100vh",
        minHeight: 720,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(180deg, rgba(11,13,14,0.55) 0%, rgba(11,13,14,0.2) 35%, rgba(11,13,14,0.1) 65%, rgba(11,13,14,0.95) 100%),
            url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2400&q=85&auto=format&fit=crop')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scale(1.05)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 24px 14vh",
          maxWidth: 720,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.2em",
            color: "var(--fg-3)",
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          — Personal data, your way
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(56px, 8vw, 104px)",
            letterSpacing: "-0.03em",
            lineHeight: 0.95,
            margin: "0 0 22px",
          }}
        >
          내 모든 정보를
          <br />
          <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--fg-2)" }}>
            한 곳에서
          </em>
        </h1>

        <p
          style={{
            color: "var(--fg-2)",
            fontSize: 17,
            lineHeight: 1.55,
            margin: "0 auto 36px",
            maxWidth: 540,
          }}
        >
          가계부, 자동차, 건강, 구독까지. 흩어진 일상의 숫자를 모아 한눈에 살펴보세요.
        </p>

        <div style={{ display: "inline-flex", gap: 12 }}>
          <a href="#dashboard" style={primaryBtnStyle}>
            대시보드 열기
          </a>
          <a href="#ledger" style={ghostBtnStyle}>
            새 기록 추가
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.2em",
          color: "var(--fg-3)",
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span>SCROLL</span>
        <span
          style={{
            width: 1,
            height: 28,
            background: "linear-gradient(180deg, var(--fg-3), transparent)",
          }}
        />
      </div>
    </section>
  );
}

const baseBtnStyle: React.CSSProperties = {
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
  minWidth: 220,
  textDecoration: "none",
  transition: "all 0.15s",
};

const primaryBtnStyle: React.CSSProperties = {
  ...baseBtnStyle,
  background: "var(--fg)",
  color: "#0b0d0e",
};

const ghostBtnStyle: React.CSSProperties = {
  ...baseBtnStyle,
  background: "rgba(20,23,26,0.55)",
  color: "var(--fg)",
  borderColor: "rgba(255,255,255,0.18)",
  backdropFilter: "blur(6px)",
};
