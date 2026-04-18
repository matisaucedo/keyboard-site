import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE, VIEWPORT, useReducedMotion } from "../motion.js";

const COLORWAYS = [
  { id: "carbon", label: "Carbon Black", hex: "#1A1A1A", border: "rgba(255,255,255,0.2)" },
  { id: "silver", label: "Space Silver", hex: "#8C8C8C", border: "rgba(255,255,255,0.25)" },
  { id: "arctic", label: "Arctic White", hex: "#F0F0F0", border: "rgba(255,255,255,0.4)" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: EASE, duration: 0.55 } },
};

export default function CTASection() {
  const [selected, setSelected] = useState("carbon");
  const [btnHovered, setBtnHovered] = useState(false);
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const selectedColorway = COLORWAYS.find((c) => c.id === selected);

  return (
    <section style={{ padding: "96px 24px", position: "relative" }}>
      <div className="section-ambient-glow" />
      <div style={{ maxWidth: 1128, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Eyebrow */}
        <motion.div
          ref={ref}
          variants={reduced ? {} : containerVariants}
          initial={reduced ? false : "hidden"}
          animate={isInView ? "visible" : "hidden"}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          <motion.div variants={reduced ? {} : itemVariants}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(250,128,57,0.08)",
                border: "1px solid rgba(250,128,57,0.2)",
                padding: "5px 14px",
                borderRadius: 9999,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "var(--color-accent)",
                  boxShadow: "0 0 6px rgba(250,128,57,0.7)",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              <span
                className="t-eyebrow font-mono-spec"
                style={{ color: "var(--color-accent)", fontSize: 11, letterSpacing: "0.16em" }}
              >
                DISPONIBILIDAD LIMITADA
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={reduced ? {} : itemVariants}
            className="t-h2 heading-gradient"
            style={{ marginBottom: 0 }}
          >
            Ordená el tuyo hoy.
          </motion.h2>
        </motion.div>

        {/* Glass card */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ease: EASE, duration: 0.6, delay: 0.2 }}
          className="surface-glass-2 max-mobile:!p-6"
          style={{
            maxWidth: 680,
            margin: "0 auto",
            borderRadius: 24,
            padding: "48px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 32,
            textAlign: "center",
          }}
        >
          {/* Price */}
          <div>
            <p
              className="font-mono-spec"
              style={{
                fontSize: "clamp(36px, 8vw, 64px)",
                fontWeight: 700,
                color: "#F0F0FF",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              $249{" "}
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 400,
                  color: "var(--text-secondary)",
                  letterSpacing: 0,
                }}
              >
                USD
              </span>
            </p>
            <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>
              Envío a todo el mundo · Garantía 2 años
            </p>
          </div>

          {/* Color selector */}
          <div>
            <p
              className="t-eyebrow font-mono-spec"
              style={{ color: "var(--text-tertiary)", marginBottom: 14, fontSize: 11, letterSpacing: "0.16em" }}
            >
              COLOR
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", alignItems: "center" }}>
              {COLORWAYS.map((colorway) => (
                <button
                  key={colorway.id}
                  onClick={() => setSelected(colorway.id)}
                  title={colorway.label}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: colorway.hex,
                    border: `2px solid ${
                      selected === colorway.id
                        ? "var(--color-accent)"
                        : colorway.border
                    }`,
                    boxShadow:
                      selected === colorway.id
                        ? `0 0 0 3px rgba(250,128,57,0.25), inset 0 1px 0 rgba(255,255,255,0.15)`
                        : "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "border-color 0.2s, box-shadow 0.2s",
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
            <motion.p
              key={selected}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: EASE, duration: 0.3 }}
              style={{
                fontSize: 13,
                color: "var(--text-secondary)",
                marginTop: 10,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {selectedColorway.label}
            </motion.p>
          </div>

          {/* CTA button */}
          <motion.button
            whileHover={reduced ? {} : { scale: 1.03 }}
            whileTap={reduced ? {} : { scale: 0.97 }}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 0.3 }}
            style={{
              background: "var(--color-accent)",
              color: "#000",
              border: "none",
              padding: "16px 40px",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              cursor: "pointer",
              width: "100%",
              maxWidth: 360,
              boxShadow: btnHovered
                ? "rgba(255,255,255,0.2) 0px 1px 3px 0px, rgba(250,128,57,0.45) 0px 0px 0px 2px, rgba(250,128,57,0.2) 0px 0px 24px 0px"
                : "rgba(255,255,255,0.15) 0px 1px 2px 0px, rgba(250,128,57,0.25) 0px 0px 0px 1px",
              transition: "box-shadow 0.2s",
            }}
          >
            Pre-Order Now
          </motion.button>

          {/* Trust badges */}
          <div
            style={{
              display: "flex",
              gap: 24,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {["Pago seguro", "Stock limitado", "Devolucion 30d"].map((badge) => (
              <div
                key={badge}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: "var(--text-tertiary)",
                  fontSize: 12,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6L4.5 8.5L10 3"
                    stroke="rgba(250,128,57,0.6)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {badge}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
