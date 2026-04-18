import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { EASE, useReducedMotion } from "../motion.js";


const SLIDES = [
  {
    id: 1,
    label: "Vista superior",
    sub: "CNC Aluminio aeroespacial",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="10" width="28" height="18" rx="3" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none" />
        <rect x="7" y="13" width="5" height="4" rx="1" fill="rgba(255,255,255,0.55)" />
        <rect x="14" y="13" width="5" height="4" rx="1" fill="rgba(255,255,255,0.55)" />
        <rect x="21" y="13" width="5" height="4" rx="1" fill="rgba(255,255,255,0.55)" />
        <rect x="7" y="19" width="5" height="4" rx="1" fill="rgba(255,255,255,0.55)" />
        <rect x="14" y="19" width="9" height="4" rx="1" fill="rgba(250,128,57,0.55)" />
        <rect x="25" y="19" width="3" height="4" rx="1" fill="rgba(255,255,255,0.55)" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "RGB Backlit",
    sub: "16.8M colores por tecla",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="6" fill="none" stroke="rgba(250,128,57,0.55)" strokeWidth="1.5" />
        <circle cx="18" cy="18" r="3" fill="rgba(250,128,57,0.55)" />
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <line
            key={i}
            x1={18 + 9 * Math.cos((deg * Math.PI) / 180)}
            y1={18 + 9 * Math.sin((deg * Math.PI) / 180)}
            x2={18 + 13 * Math.cos((deg * Math.PI) / 180)}
            y2={18 + 13 * Math.sin((deg * Math.PI) / 180)}
            stroke="rgba(250,128,57,0.55)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ))}
      </svg>
    ),
  },
  {
    id: 3,
    label: "USB-C + Bluetooth",
    sub: "Triple modo de conexión",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M14 18H22M22 18L18 14M22 18L18 22" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="11" cy="18" r="3" stroke="rgba(250,128,57,0.55)" strokeWidth="1.5" fill="none" />
        <circle cx="25" cy="18" r="3" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none" />
        <path d="M25 10 L25 15 L28 12.5 L25 15 L22 12.5 L25 15 L25 26" stroke="rgba(100,160,255,0.4)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "Montaje Gasket",
    sub: "Amortiguación de 12 puntos",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="8" y="14" width="20" height="10" rx="2" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none" />
        {[10, 16, 22].map((x) => (
          <circle key={x} cx={x} cy="13" r="2" fill="rgba(250,128,57,0.55)" />
        ))}
        {[10, 16, 22].map((x) => (
          <circle key={x} cx={x} cy="25" r="2" fill="rgba(250,128,57,0.55)" />
        ))}
      </svg>
    ),
  },
  {
    id: 5,
    label: "Hot-Swap",
    sub: "Switches intercambiables sin soldar",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="13" y="10" width="10" height="12" rx="2" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none" />
        <rect x="15" y="13" width="2" height="5" rx="1" fill="rgba(250,128,57,0.55)" />
        <rect x="19" y="13" width="2" height="5" rx="1" fill="rgba(250,128,57,0.55)" />
        <path d="M18 22 L18 27" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
        <path d="M14 26 L22 26" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
      </svg>
    ),
  },
];

function SlideCard({ slide, index }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ ease: EASE, duration: 0.6, delay: index * 0.08 }}
      style={{
        flex: "0 0 min(340px, 82vw)",
        height: 220,
        borderRadius: 16,
        background: "var(--bg-elevated)",
        border: "1px solid rgba(240,240,255,0.05)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        padding: 32,
        scrollSnapAlign: "start",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      whileHover={reduced ? {} : { y: -4, borderColor: "rgba(240,240,255,0.10)" }}
    >
      {/* Subtle glow on hover target */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 0%, rgba(250,128,57,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ opacity: 0.8 }}>{slide.icon}</div>

      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontSize: 15,
            fontWeight: 500,
            color: "#F0F0FF",
            letterSpacing: "-0.01em",
            marginBottom: 4,
          }}
        >
          {slide.label}
        </p>
        <p
          style={{
            fontSize: 13,
            color: "var(--text-secondary)",
            lineHeight: 1.4,
          }}
        >
          {slide.sub}
        </p>
      </div>
    </motion.div>
  );
}

export default function ShowcaseSection() {
  const reduced = useReducedMotion();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.4], [30, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <section ref={sectionRef} style={{ padding: "96px 0", position: "relative" }}>
      <div className="section-ambient-glow" />
      {/* Header — padded */}
      <div style={{ maxWidth: 1128, margin: "0 auto", padding: "0 24px", marginBottom: 48 }}>
        <motion.div
          style={reduced ? {} : { y: headerY, opacity: headerOpacity }}
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
              SHOWCASED
            </span>
          </div>
          <h2 className="t-h2 heading-gradient">El teclado.</h2>
          <p
            className="t-body"
            style={{ marginTop: 12, color: "var(--text-secondary)", maxWidth: "44ch" }}
          >
            Cada detalle construido con intención. Cada superficie mecanizada
            para durar décadas.
          </p>
        </motion.div>
      </div>

      {/* Cards — horizontal scroll on mobile, row on desktop */}
      <div
        style={{
          display: "flex",
          gap: 16,
          padding: "0 24px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          maxWidth: 1176,
          margin: "0 auto",
        }}
        className="scrollbar-thin"
      >
        {SLIDES.map((slide, i) => (
          <SlideCard key={slide.id} slide={slide} index={i} />
        ))}
      </div>

      {/* Scroll indicator — mobile only */}
      <div
        className="hidden max-mobile:flex"
        style={{
          justifyContent: "center",
          gap: 6,
          marginTop: 24,
        }}
      >
        {SLIDES.map((s) => (
          <div
            key={s.id}
            style={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "rgba(240,240,255,0.22)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
