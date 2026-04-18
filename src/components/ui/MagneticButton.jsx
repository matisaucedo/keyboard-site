import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function MagneticButton({
  children, primary = false, onClick,
  className = "", style = {},
  onMouseEnter: onEnterProp,
  onMouseLeave: onLeaveProp,
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const [hovered, setHovered] = useState(false);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left - r.width / 2) * 0.15);
    my.set((e.clientY - r.top - r.height / 2) * 0.15);
  };
  const onLeave = (e) => {
    mx.set(0); my.set(0); setHovered(false);
    onLeaveProp?.(e);
  };
  const onEnter = (e) => {
    setHovered(true);
    onEnterProp?.(e);
  };

  return (
    <motion.button
      style={{
        x: mx, y: my,
        ...(primary ? {
          background: "var(--color-accent)",
          color: "#fff",
          border: "none",
          boxShadow: hovered ? "0 8px 30px rgba(250,128,57,0.4)" : "0 0 0 rgba(250,128,57,0)",
        } : {
          background: "rgba(255,255,255,0.06)",
          color: "var(--color-txt)",
          border: "1px solid rgba(255,255,255,0.12)",
        }),
        borderRadius: 9999,
        padding: "14px 28px",
        fontWeight: 600,
        fontSize: 15,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "inherit",
        willChange: "transform",
        touchAction: "manipulation",
        transition: "box-shadow 0.25s",
        ...style,
      }}
      className={className}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={onEnter}
    >
      {children}
    </motion.button>
  );
}
