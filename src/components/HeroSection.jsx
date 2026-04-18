import { useState } from "react";
import { motion } from "framer-motion";
import { EASE, useReducedMotion } from "../motion.js";
import SplineEmbed from "./3d/SplineEmbed.jsx";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { ease: EASE, duration: 0.6 } },
};

const STATS = [
  { value: "45g", label: "Peso total" },
  { value: "8000Hz", label: "Polling rate" },
  { value: "400h", label: "Batería" },
];

export default function HeroSection({ onReserve }) {
  const reduced = useReducedMotion();
  const [primaryHover, setPrimaryHover] = useState(false);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--color-bg)",
      }}
    >
      {/* VoidAI hero ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "5%",
          width: "55%",
          height: "70%",
          background: "radial-gradient(ellipse at 40% 40%, rgba(250,128,57,0.10) 0%, rgba(250,128,57,0.04) 40%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div className="section-ambient-glow" />

      {/* Scanline overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(240,240,255,0.010) 2px, rgba(240,240,255,0.010) 4px)",
        }}
      />

      {/* Grid layout */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          minHeight: "100vh",
        }}
        className="hero-grid"
      >
        {/* Mobile: canvas on top */}
        <div
          className="hero-canvas-mobile"
          style={{ display: "none" }}
        >
          <SplineEmbed style={{ width: "100%", height: "100%" }} />
        </div>

        {/* Text column */}
        <motion.div
          variants={reduced ? {} : containerVariants}
          initial={reduced ? false : "hidden"}
          animate="visible"
          className="hero-text-col"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "10vw",
            paddingRight: "4vw",
            paddingTop: 120,
            paddingBottom: 100,
          }}
        >
          {/* Badge mono */}
          <motion.div
            variants={reduced ? {} : itemVariants}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32 }}
          >
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "var(--color-accent)",
                boxShadow: "0 0 10px rgba(250,128,57,0.8)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
              }}
            >
              INSIGHTS HARDWARE · TYPE M1 · 2026
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={reduced ? {} : itemVariants}
            style={{
              fontFamily: "'Inter Tight', 'Inter', sans-serif",
              fontSize: "clamp(52px, 7.5vw, 88px)",
              fontWeight: 500,
              letterSpacing: "-0.045em",
              lineHeight: 0.98,
              background: "linear-gradient(180deg, #F0F0FF 0%, rgba(250,128,57,0.85) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              margin: 0,
              whiteSpace: "pre-line",
            }}
          >
            {"El teclado\nque piensa\ncomo vos."}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={reduced ? {} : itemVariants}
            style={{
              fontSize: 16,
              color: "var(--color-muted)",
              lineHeight: 1.65,
              maxWidth: "38ch",
              marginTop: 24,
              marginBottom: 0,
            }}
          >
            Aluminio aeroespacial. Switch gasket. Polling rate de 8000 Hz. Construido para los que escriben código, no para los que lo venden.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={reduced ? {} : itemVariants}
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginTop: 40,
            }}
          >
            <button
              onClick={onReserve}
              onMouseEnter={() => setPrimaryHover(true)}
              onMouseLeave={() => setPrimaryHover(false)}
              style={{
                background: primaryHover ? "rgba(250,128,57,0.2)" : "rgba(250,128,57,0.12)",
                color: "var(--color-accent)",
                border: `1px solid ${primaryHover ? "rgba(250,128,57,0.5)" : "rgba(250,128,57,0.30)"}`,
                padding: "13px 26px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "-0.01em",
                cursor: "pointer",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                transition: "background 0.2s, border-color 0.2s",
                fontFamily: "inherit",
              }}
            >
              Reservá el tuyo — $249
            </button>

            <button
              style={{
                background: "rgba(240,240,255,0.03)",
                color: "rgba(240,240,255,0.55)",
                border: "1px solid rgba(240,240,255,0.06)",
                padding: "13px 26px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 400,
                cursor: "pointer",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                fontFamily: "inherit",
                transition: "background 0.2s, border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(240,240,255,0.06)";
                e.currentTarget.style.color = "rgba(240,240,255,0.85)";
                e.currentTarget.style.borderColor = "rgba(240,240,255,0.10)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(240,240,255,0.03)";
                e.currentTarget.style.color = "rgba(240,240,255,0.55)";
                e.currentTarget.style.borderColor = "rgba(240,240,255,0.06)";
              }}
            >
              Ver especificaciones
            </button>
          </motion.div>

          {/* Stat row */}
          <motion.div
            variants={reduced ? {} : itemVariants}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              flexWrap: "wrap",
              marginTop: 56,
            }}
          >
            {STATS.map((stat, i) => (
              <div key={stat.value} style={{ display: "contents" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                      fontFamily: "'Inter Tight', 'Inter', sans-serif",
                      color: "var(--color-txt)",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-muted)",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
                {i < STATS.length - 1 && (
                  <div
                    style={{
                      width: 1,
                      height: 32,
                      background: "rgba(240,240,255,0.07)",
                      alignSelf: "center",
                      flexShrink: 0,
                    }}
                  />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* 3D canvas column — desktop only */}
        <div
          className="hero-canvas-col"
          style={{
            position: "relative",
            zIndex: 1,
            minHeight: 500,
          }}
        >
          <SplineEmbed style={{ width: "100%", height: "100%" }} />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          background: "linear-gradient(to top, var(--color-bg) 0%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      <style>{`
        @media (min-width: 810px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-text-col {
            padding-left: 10vw !important;
          }
          .hero-canvas-mobile {
            display: none !important;
          }
          .hero-canvas-col {
            display: block !important;
          }
        }

        @media (max-width: 809px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: min(50vw, 380px) auto !important;
          }
          .hero-canvas-mobile {
            display: block !important;
            height: min(50vw, 380px) !important;
            width: 100% !important;
          }
          .hero-canvas-col {
            display: none !important;
          }
          .hero-text-col {
            padding-left: 24px !important;
            padding-right: 24px !important;
            padding-top: 48px !important;
            padding-bottom: 100px !important;
          }
        }
      `}</style>
    </section>
  );
}
