"use client";

import { ResponsiveContainer, LineChart, Line, BarChart, Bar } from "recharts";

interface StatCardProps {
  label: string;
  dotColor?: string;
  value: string;
  unit: string;
  meta: React.ReactNode;
  chart: React.ReactNode;
}

function StatCard({ label, dotColor, value, unit, meta, chart }: StatCardProps) {
  return (
    <div
      style={{
        background: "var(--bg-2)",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-lg)",
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 18,
        minHeight: 200,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.18em",
          color: "var(--fg-3)",
          textTransform: "uppercase",
        }}
      >
        <span>{label}</span>
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: dotColor ?? "var(--positive)",
          }}
        />
      </div>

      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: 38,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        {value}
        <span style={{ fontSize: 16, color: "var(--fg-3)", marginLeft: 4, fontWeight: 400 }}>
          {unit}
        </span>
      </div>

      <div style={{ height: 36 }}>{chart}</div>

      <div
        style={{
          color: "var(--fg-3)",
          fontSize: 12,
          display: "flex",
          gap: 6,
          alignItems: "center",
          marginTop: "auto",
        }}
      >
        {meta}
      </div>
    </div>
  );
}

function Delta({ children, neg }: { children: React.ReactNode; neg?: boolean }) {
  return (
    <span
      style={{
        color: neg ? "var(--danger)" : "var(--positive)",
        fontFamily: "var(--font-mono)",
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}

const lineData = [28, 22, 26, 18, 20, 14, 18, 12, 16, 10, 14].map((v, i) => ({ i, v }));
const lineData2 = [30, 28, 18, 22, 14, 16, 10, 14, 8, 12, 6].map((v, i) => ({ i, v }));
const barData = [22, 14, 18, 10, 20, 6, 12, 14, 8, 18, 10, 26, 14, 12, 20, 8].map((v, i) => ({
  i,
  v,
}));
const flatData = [18, 18, 18, 16, 16, 14, 14, 12, 12].map((v, i) => ({ i, v }));

export default function OverviewStats() {
  return (
    <section
      id="dashboard"
      style={{ padding: "96px 28px", maxWidth: 1440, margin: "0 auto" }}
    >
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
            — 11월 2026 · This month at a glance
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
            이번 달 한눈에
          </h2>
        </div>
        <p style={{ color: "var(--fg-3)", fontSize: 14, maxWidth: 360, lineHeight: 1.55, margin: 0 }}>
          5개 영역의 핵심 지표를 자동으로 모아 보여드립니다. 마지막 동기화: 오늘 오전 9:24
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 14,
        }}
      >
        <StatCard
          label="지출"
          dotColor="var(--warning)"
          value="1,847,200"
          unit="₩"
          chart={
            <ResponsiveContainer width="100%" height={36}>
              <LineChart data={lineData}>
                <Line type="monotone" dataKey="v" stroke="var(--fg-3)" strokeWidth={1.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          }
          meta={
            <>
              예산 대비 <Delta neg>+8.2%</Delta> · 2,000,000₩ 한도
            </>
          }
        />
        <StatCard
          label="주행"
          value="1,284"
          unit="km"
          chart={
            <ResponsiveContainer width="100%" height={36}>
              <LineChart data={lineData2}>
                <Line type="monotone" dataKey="v" stroke="var(--fg-3)" strokeWidth={1.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          }
          meta={
            <>
              평균 연비 <Delta>12.4 km/L</Delta>
            </>
          }
        />
        <StatCard
          label="활동"
          value="23"
          unit="/ 30 day"
          chart={
            <ResponsiveContainer width="100%" height={36}>
              <BarChart data={barData} barCategoryGap={2}>
                <Bar dataKey="v" fill="var(--fg-3)" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          }
          meta={
            <>
              목표 달성률 <Delta>76.7%</Delta>
            </>
          }
        />
        <StatCard
          label="구독"
          dotColor="var(--accent)"
          value="147,800"
          unit="₩/mo"
          chart={
            <ResponsiveContainer width="100%" height={36}>
              <LineChart data={flatData}>
                <Line type="monotone" dataKey="v" stroke="var(--fg-3)" strokeWidth={1.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          }
          meta={
            <>
              활성 12 · 다음 결제{" "}
              <span style={{ color: "var(--fg-2)", fontFamily: "var(--font-mono)", fontWeight: 500 }}>
                D-3
              </span>
            </>
          }
        />
      </div>
    </section>
  );
}
