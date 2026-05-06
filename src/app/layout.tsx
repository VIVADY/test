import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "TEMEN — 내 정보의 모든 것",
  description: "가계부, 자동차, 건강, 구독까지. 흩어진 일상의 숫자를 모아 한눈에 살펴보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
        <style>{`
          :root {
            --font-display: var(--font-inter), "Pretendard", system-ui, sans-serif;
            --font-body: "Pretendard", var(--font-inter), system-ui, sans-serif;
            --font-mono: var(--font-mono-jetbrains), ui-monospace, monospace;
          }
          body {
            font-family: var(--font-body);
          }
        `}</style>
      </head>
      <body className="min-h-screen" style={{ background: "var(--bg)", color: "var(--fg)" }}>
        {children}
      </body>
    </html>
  );
}
