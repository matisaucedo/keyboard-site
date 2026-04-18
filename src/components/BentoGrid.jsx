import { useState } from "react";
import { motion } from "framer-motion";
import { EASE } from "../motion.js";
import FadeUp from "./ui/FadeUp.jsx";
import MagneticButton from "./ui/MagneticButton.jsx";

const cardStyle = {
  borderRadius: 16,
  padding: 40,
};

export default function BentoGrid() {
  const [oBarsHovered, setOBarsHovered] = useState(false);
  const [iconHovered, setIconHovered] = useState(false);

  return (
    <section style={{ padding: "96px 24px", position: "relative" }}>
      <div className="section-ambient-glow" />
      <div style={{ maxWidth: 1128, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <FadeUp delay={0}>
          <div style={{ marginBottom: 64 }}>
            <h2 className="t-h2 heading-gradient">Perfectamente diseñado.</h2>
            <p className="t-body" style={{ marginTop: 12, color: "var(--color-muted)" }}>Por dentro y por fuera.</p>
          </div>
        </FadeUp>

        {/* Bento grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: 340,
          gap: 24,
        }} className="max-mobile:grid-cols-1 max-mobile:auto-rows-auto">

          {/* Card A — Battery (col-span 2) */}
          <FadeUp delay={0} className="desktop:col-span-2 tablet:col-span-2">
            <div
              className="surface-liquid-glass"
              style={{
                ...cardStyle,
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "100%",
              }}
            >
              <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "flex-end", flex: 1 }}>
              {/* Battery SVG decorative */}
              <div style={{ position: "absolute", top: -160, right: 0, zIndex: 2 }}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <rect x="4" y="16" width="52" height="32" rx="6" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" fill="none" />
                  <rect x="56" y="26" width="6" height="12" rx="3" fill="rgba(255,255,255,0.10)" />
                  <rect x="9" y="21" width="24" height="22" rx="3" fill="rgba(250,128,57,0.3)" />
                </svg>
              </div>
              <p className="t-h1" style={{ fontSize: "clamp(60px, 8vw, 84px)", lineHeight: 1.0, color: "var(--color-accent)" }}>400h</p>
              <p className="t-eyebrow" style={{ color: "var(--color-muted2)", marginTop: 4 }}>DE AUTONOMÍA</p>
              <p className="t-body" style={{
                marginTop: 16, maxWidth: "36ch", color: "var(--color-muted)", lineHeight: 1.6
              }}>
                Olvídate de los cables. La celda de litio de gran densidad dura un trimestre fiscal entero.
              </p>
              </div>
            </div>
          </FadeUp>

          {/* Card B — O-Ring */}
          <FadeUp delay={0.1}>
            <div
              className="surface-liquid-glass"
              style={{
                borderRadius: 16,
                padding: 40,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                position: "relative",
                height: "100%",
                cursor: "default",
              }}
              onMouseEnter={() => setOBarsHovered(true)}
              onMouseLeave={() => setOBarsHovered(false)}
            >
              <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "flex-end", flex: 1 }}>
              {/* Animated bars */}
              <div style={{
                position: "absolute", top: -120, left: 0, right: 0,
                display: "flex", gap: 8,
              }}>
                {[0, 0.1, 0.2].map((delay, i) => (
                  <div key={i} style={{
                    flex: 1, height: 4,
                    background: oBarsHovered ? "var(--color-accent)" : "rgba(240,240,255,0.10)",
                    borderRadius: 9999,
                    transition: `background 0.7s ${delay}s`,
                  }} />
                ))}
              </div>
              <p className="t-eyebrow" style={{ color: "var(--color-muted2)" }}>MONTURA O-RING</p>
              <p className="t-body" style={{
                marginTop: 12, color: "var(--color-muted)", lineHeight: 1.6
              }}>
                PCB suspendida sobre 12 anillos de silicona premium para una sensación de escritura increíblemente suave.
              </p>
              </div>
            </div>
          </FadeUp>

          {/* Card C — CTA (col-span 3) */}
          <FadeUp delay={0.2} className="desktop:col-span-3 tablet:col-span-3">
            <div style={{
              background: "linear-gradient(135deg, rgba(250,128,57,0.05) 0%, rgba(250,128,57,0.01) 100%)",
              border: "1px solid rgba(250,128,57,0.12)",
              borderRadius: 16,
              padding: "48px 64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 24,
              position: "relative",
            }} className="surface-liquid-glass max-mobile:flex-col max-mobile:px-6 max-mobile:py-8">
              <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24, width: "100%" }}>
              <h2 className="t-h2 heading-gradient" style={{ whiteSpace: "pre-line" }}>{"Tu código merece algo mejor."}</h2>
              <MagneticButton
                primary
                className="max-mobile:w-full max-mobile:justify-center"
                style={{ padding: "16px 28px", gap: 12 }}
                onMouseEnter={() => setIconHovered(true)}
                onMouseLeave={() => setIconHovered(false)}
              >
                <motion.svg
                  width="20" height="20" viewBox="0 0 20 20" fill="currentColor"
                  animate={{ rotate: iconHovered ? 12 : 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  <path d="M6 2H14L15.5 8H4.5L6 2Z" />
                  <rect x="3" y="8" width="14" height="10" rx="2" />
                  <circle cx="7" cy="16" r="1.5" fill="rgba(0,0,0,0.3)" />
                  <circle cx="13" cy="16" r="1.5" fill="rgba(0,0,0,0.3)" />
                </motion.svg>
                Reservar ahora
              </MagneticButton>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
