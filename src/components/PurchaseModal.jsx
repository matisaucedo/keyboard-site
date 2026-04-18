import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PurchaseModal({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleClose = () => { onClose(); setTimeout(() => setSuccess(false), 300); };
  const handleConfirm = () => { if (email) setSuccess(true); };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={handleClose}
          style={{
            position: "fixed", inset: 0, zIndex: 100,
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "24px",
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#0D0D1A", border: "1px solid rgba(240,240,255,0.08)",
              borderRadius: 16, padding: 32, width: "100%", maxWidth: 440,
            }}
          >
            {!success ? (
              <>
                <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent)", fontFamily: "'JetBrains Mono', monospace" }}>
                  INSIGHTS HARDWARE
                </span>
                <h2 style={{ fontFamily: "'Inter Tight','Inter',sans-serif", fontSize: 24, fontWeight: 500, letterSpacing: "-0.03em", color: "var(--color-txt)", margin: "12px 0 4px" }}>
                  Insights Type M1
                </h2>
                <p style={{ fontSize: 14, color: "var(--color-muted)", marginBottom: 24 }}>Teclado mecánico premium</p>
                <div style={{ display: "flex", gap: 24, marginBottom: 28 }}>
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 500, color: "var(--color-txt)", fontFamily: "'Inter Tight','Inter',sans-serif", letterSpacing: "-0.03em" }}>$249 USD</div>
                    <div style={{ fontSize: 11, color: "var(--color-muted)", fontFamily: "'JetBrains Mono',monospace", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>Precio</div>
                  </div>
                  <div style={{ width: 1, background: "rgba(240,240,255,0.08)" }} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "var(--color-txt)" }}>Q2 2026</div>
                    <div style={{ fontSize: 11, color: "var(--color-muted)", fontFamily: "'JetBrains Mono',monospace", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>Disponibilidad</div>
                  </div>
                </div>
                <input
                  type="email" placeholder="tu@email.com" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%", padding: "12px 16px", borderRadius: 8,
                    background: "rgba(240,240,255,0.04)", border: "1px solid rgba(240,240,255,0.08)",
                    color: "var(--color-txt)", fontSize: 14, fontFamily: "inherit",
                    outline: "none", marginBottom: 12, boxSizing: "border-box",
                  }}
                />
                <button
                  onClick={handleConfirm}
                  style={{
                    width: "100%", padding: "13px 0", borderRadius: 8,
                    background: email ? "rgba(250,128,57,0.15)" : "rgba(250,128,57,0.06)",
                    border: `1px solid ${email ? "rgba(250,128,57,0.4)" : "rgba(250,128,57,0.15)"}`,
                    color: email ? "var(--color-accent)" : "rgba(250,128,57,0.4)",
                    fontSize: 14, fontWeight: 600, cursor: email ? "pointer" : "default",
                    fontFamily: "inherit", transition: "all 0.2s", marginBottom: 8,
                  }}
                >
                  Confirmar reserva →
                </button>
                <button onClick={handleClose} style={{ width: "100%", padding: "10px 0", borderRadius: 8, background: "transparent", border: "1px solid rgba(240,240,255,0.06)", color: "var(--color-muted)", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
                  Cancelar
                </button>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                <h2 style={{ fontFamily: "'Inter Tight','Inter',sans-serif", fontSize: 22, fontWeight: 500, letterSpacing: "-0.03em", color: "var(--color-txt)", marginBottom: 8 }}>¡Reserva confirmada!</h2>
                <p style={{ fontSize: 14, color: "var(--color-muted)", marginBottom: 28 }}>Te avisamos cuando esté disponible.</p>
                <button onClick={handleClose} style={{ padding: "11px 32px", borderRadius: 8, background: "rgba(250,128,57,0.12)", border: "1px solid rgba(250,128,57,0.28)", color: "var(--color-accent)", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                  Cerrar
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
