import { motion } from "framer-motion";
import { EASE, useReducedMotion } from "../motion.js";
import MagneticButton from "./ui/MagneticButton.jsx";

export default function Navbar({ onReserve }) {
  const reduced = useReducedMotion();

  return (
    <>
      <img
        src="/assets/logo_insights.png"
        alt="Insights"
        style={{ position: "fixed", top: -12, left: 20, zIndex: 50, width: 220, height: "auto", filter: "brightness(0) invert(1)", opacity: 1 }}
      />

      <motion.nav
        initial={reduced ? false : { y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="max-mobile:!w-[calc(100%-32px)]"
        style={{
          position: "fixed",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          background: "rgba(1,1,13,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: 9999,
          border: "1px solid rgba(240,240,255,0.08)",
          width: "fit-content",
          minWidth: 400,
          maxWidth: 680,
        }}
      >
        <div style={{
          padding: "11px 20px",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 24,
        }}>
          <nav className="max-mobile:hidden" style={{ display: "flex", gap: 28 }}>
            {["Diseño", "Interruptores", "Especificaciones"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  color: "var(--color-muted)",
                  textDecoration: "none",
                  fontSize: 13.5,
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  touchAction: "manipulation",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "rgba(240,240,255,0.92)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-muted)"}
              >
                {link}
              </a>
            ))}
          </nav>

          <div style={{ width: 1, height: 16, background: "rgba(240,240,255,0.12)", flexShrink: 0 }} />

          <MagneticButton primary onClick={onReserve} style={{
            background: "rgba(250,128,57,0.12)",
            color: "var(--color-accent)",
            border: "1px solid rgba(250,128,57,0.28)",
            borderRadius: 6,
            fontSize: 13,
            fontWeight: 600,
            padding: "8px 18px",
          }}>
            Reservar
          </MagneticButton>
        </div>
      </motion.nav>
    </>
  );
}
