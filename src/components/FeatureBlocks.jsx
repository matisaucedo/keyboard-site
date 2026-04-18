import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FadeUp from "./ui/FadeUp.jsx";
import { EASE, useReducedMotion } from "../motion.js";

const cardStyle = {
  borderRadius: 16,
  padding: 40,
};

function FeatureCard({ eyebrow, icon, heading, body, stat, statLabel, accentWord }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  const bodyContent = accentWord
    ? body.split(accentWord).map((part, i, arr) =>
        i < arr.length - 1
          ? <span key={i}>{part}<span style={{ color: "var(--color-accent)" }}>{accentWord}</span></span>
          : part
      )
    : body;

  return (
    <motion.div
      ref={ref}
      animate={{
        opacity: reduced ? 1 : (isInView ? 1 : 0.3),
        scale: reduced ? 1 : (isInView ? 1 : 0.97),
      }}
      transition={{ duration: 0.5, ease: EASE }}
      style={{ ...cardStyle, display: "flex", flexDirection: "column", willChange: "transform, opacity", position: "relative" }}
      className="surface-liquid-glass max-mobile:!opacity-100 max-mobile:!scale-100"
    >
      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column" }}>
        {/* Eyebrow pill */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          border: "1px solid rgba(240,240,255,0.05)",
          background: "rgba(240,240,255,0.02)",
          padding: "4px 10px", borderRadius: 9999,
          width: "fit-content",
        }}>
          {icon}
          <span className="t-eyebrow" style={{ color: "var(--color-muted2)" }}>{eyebrow}</span>
        </div>

        {stat ? (
          <>
            <p className="t-h1" style={{ color: "var(--color-accent)", fontSize: "clamp(56px, 7vw, 80px)", lineHeight: 1.0, marginTop: 20 }}>{stat}</p>
            <p className="t-eyebrow" style={{ color: "var(--color-muted2)", marginTop: 6, letterSpacing: "0.1em" }}>{statLabel}</p>
          </>
        ) : (
          <h2 className="t-h2 heading-gradient" style={{ marginTop: 20, whiteSpace: "pre-line" }}>{heading}</h2>
        )}

        <p className="t-body" style={{ marginTop: 16, color: "var(--color-muted)", lineHeight: 1.6 }}>
          {bodyContent}
        </p>
      </div>
    </motion.div>
  );
}

export default function FeatureBlocks() {
  return (
    <section style={{ padding: "96px 24px", position: "relative" }}>
      <div className="section-ambient-glow" />
      <div style={{ maxWidth: 1128, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Section label */}
        <FadeUp delay={0}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 64 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="var(--color-muted2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="t-eyebrow" style={{ color: "var(--color-muted2)" }}>CARACTERÍSTICAS</span>
          </div>
        </FadeUp>

        {/* Cards */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          maxWidth: 680,
          margin: "0 auto",
        }}>
          <FeatureCard
            eyebrow="ACUSTO-MECÁNICA"
            icon={
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="2" cy="6" r="1.5" fill="var(--color-accent)" />
                <circle cx="6" cy="4" r="1.5" fill="var(--color-accent)" />
                <circle cx="10" cy="7" r="1.5" fill="var(--color-accent)" />
                <line x1="2" y1="6" x2="12" y2="6" stroke="rgba(240,240,255,0.15)" strokeWidth="0.5" />
              </svg>
            }
            heading={"Perfección\nTáctil de 45g."}
            body="Cada interruptor es lubricado a mano en fábrica, ofreciendo el sonido más profundo y la curva de desplazamiento suave de la industria. Cero holguras."
          />

          <FeatureCard
            eyebrow="ARQUITECTURA"
            icon={
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1L11 4V8L6 11L1 8V4L6 1Z" stroke="var(--color-accent)" strokeWidth="1.2" fill="none" />
                <path d="M6 1L6 11M1 4L11 4M1 8L11 8" stroke="rgba(240,240,255,0.15)" strokeWidth="0.5" />
              </svg>
            }
            heading={"Aluminio Sólido\nCNC."}
            body="Mecanizado a partir del bloque maestro de aleación aeroespacial. Con un peso de 1.8kg, elimina por completo la reverberación y la flexión del chasis."
            accentWord="aeroespacial"
          />

          <FeatureCard
            eyebrow="TRANSMISIÓN"
            icon={
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M7 1L3 7H6L5 11L9 5H6L7 1Z" fill="var(--color-accent)" />
              </svg>
            }
            stat="8000Hz"
            statLabel="sin latencia"
            body="Por cable o inalámbrico, tus comandos se registran antes de que levantes el dedo. Escribe más rápido de lo que se refresca tu pantalla."
          />
        </div>
      </div>
    </section>
  );
}
