import { motion } from "framer-motion";
import { EASE, VIEWPORT } from "../motion.js";

const COLUMNS = [
  {
    label: "Redes",
    links: [
      { name: "Twitter / X", href: "#" },
      { name: "GitHub", href: "#" },
      { name: "Instagram", href: "#" },
    ],
  },
  {
    label: "Producto",
    links: [
      { name: "Diseño", href: "#" },
      { name: "Interruptores", href: "#" },
      { name: "Especificaciones", href: "#" },
    ],
  },
  {
    label: "Créditos",
    links: [
      { name: "Insights Brand", href: "#" },
      { name: "Portfolio", href: "#" },
    ],
  },
];

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      style={{
        color: "var(--color-muted)",
        textDecoration: "none",
        fontSize: 14,
        lineHeight: "1.6",
        touchAction: "manipulation",
        transition: "color 0.2s",
        display: "block",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#F0F0FF")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid rgba(240,240,255,0.07)",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Main footer row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        viewport={VIEWPORT}
        style={{
          maxWidth: 1128,
          margin: "0 auto",
          padding: "48px 24px 40px",
          display: "flex",
          gap: "40px 64px",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {/* Logo col */}
        <div style={{ flex: "0 0 auto" }}>
          <img
            src="/assets/logo_insights.png"
            alt="Insights"
            style={{ height: 20, opacity: 0.7, display: "block" }}
          />
          <p
            style={{
              marginTop: 12,
              fontSize: 13,
              color: "var(--color-muted2)",
              lineHeight: 1.5,
              maxWidth: "20ch",
            }}
          >
            Teclados mecánicos de precisión para quienes no aceptan menos.
          </p>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} className="max-mobile:hidden" />

        {/* Link columns */}
        {COLUMNS.map((col) => (
          <div key={col.label} style={{ minWidth: 120 }}>
            <p className="t-eyebrow font-mono-spec" style={{ color: "var(--color-muted2)", marginBottom: 12, letterSpacing: "0.14em" }}>
              {col.label}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {col.links.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(240,240,255,0.05)",
          maxWidth: 1128,
          margin: "0 auto",
          padding: "20px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <span className="t-xs">© 2026 Insights Hardware. Todos los derechos reservados.</span>
        <span className="t-xs" style={{ color: "rgba(240,240,255,0.22)" }}>
          Hecho en Argentina 🇦🇷
        </span>
      </div>
    </footer>
  );
}
