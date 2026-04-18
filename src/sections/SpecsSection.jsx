import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE, VIEWPORT, useReducedMotion } from "../motion.js";

const SPECS = [
  { label: "Switch", value: "MX Red (Linear)" },
  { label: "Actuación", value: "45g · 2mm pre-travel · 4mm total" },
  { label: "Layout", value: "TKL — 87 teclas" },
  { label: "Peso", value: "1.1 kg" },
  { label: "Carcasa", value: "Aluminio CNC" },
  { label: "Montaje", value: "Gasket" },
  { label: "Conexión", value: "USB-C + Bluetooth 5.0" },
  { label: "Batería", value: "4000 mAh (inalámbrico)" },
];

const EASE_SPEC = [0.16, 1, 0.3, 1];

function SpecRow({ label, value, index }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ ease: EASE_SPEC, duration: 0.5, delay: index * 0.06 }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        padding: "18px 0",
        borderBottom: "1px solid var(--glass-border-subtle)",
        alignItems: "baseline",
      }}
    >
      <span
        style={{
          fontSize: 14,
          color: "var(--text-secondary)",
          fontWeight: 400,
          lineHeight: 1.4,
        }}
      >
        {label}
      </span>
      <span
        className="font-mono-spec"
        style={{
          fontSize: 14,
          fontWeight: 700,
          color: "#F0F0FF",
          letterSpacing: "0.02em",
          lineHeight: 1.4,
        }}
      >
        {value}
      </span>
    </motion.div>
  );
}

export default function SpecsSection() {
  const reduced = useReducedMotion();

  return (
    <section style={{ padding: "96px 24px", position: "relative" }}>
      <div className="section-ambient-glow" />
      <div style={{ maxWidth: 1128, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: EASE_SPEC, duration: 0.6 }}
          viewport={VIEWPORT}
          style={{ marginBottom: 56 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 20,
                height: 1,
                background: "var(--color-accent)",
                opacity: 0.7,
              }}
            />
            <span
              className="t-eyebrow font-mono-spec"
              style={{ color: "var(--color-accent)", fontSize: 11, letterSpacing: "0.16em" }}
            >
              ESPECIFICACIONES TÉCNICAS
            </span>
          </div>
          <h2 className="t-h2 heading-gradient">El hardware importa.</h2>
          <p
            className="t-body"
            style={{ marginTop: 12, color: "var(--text-secondary)", maxWidth: "50ch" }}
          >
            Cada componente seleccionado con un único criterio: la excelencia sin
            compromisos.
          </p>
        </motion.div>

        {/* Specs grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0 64px",
          }}
          className="max-mobile:grid-cols-1 max-mobile:gap-x-0"
        >
          {/* Left column */}
          <div>
            {SPECS.slice(0, 4).map((spec, i) => (
              <SpecRow key={spec.label} label={spec.label} value={spec.value} index={i} />
            ))}
          </div>

          {/* Right column */}
          <div>
            {SPECS.slice(4).map((spec, i) => (
              <SpecRow key={spec.label} label={spec.label} value={spec.value} index={i + 4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
