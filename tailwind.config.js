/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        /* Design system breakpoints — usar estos en lugar de md:/lg: de Tailwind
         * tablet: ≥810px  (Tailwind md: = 768px — NO usar)
         * desktop: ≥1200px (Tailwind lg: = 1024px — NO usar)
         * max-mobile: <810px para targeting móvil exclusivo
         */
        "tablet":     "810px",
        "desktop":    "1200px",
        "max-mobile": { max: "809px" },
      },
      fontFamily: {
        sans: ["Switzer", "Inter", "system-ui", "sans-serif"],
        heading: ['"Inter Tight"', "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        bg:       "var(--color-bg)",
        surface:  "var(--color-surface)",
        surface2: "var(--color-surface2, var(--color-surface))",
        muted:    "var(--color-muted)",
        muted2:   "var(--color-muted2)",
        acc:      "var(--color-accent)",
      },
      fontSize: {
        "h1":   ["56px", { lineHeight: "1.1em", letterSpacing: "-0.04em", fontWeight: "400" }],
        "h1-lg":["40px", { lineHeight: "1.1em", letterSpacing: "-0.04em", fontWeight: "400" }],
        "h2":   ["36px", { lineHeight: "1.1em", letterSpacing: "-0.03em", fontWeight: "400" }],
        "lg-b": ["20px", { lineHeight: "1.3em", letterSpacing: "-0.02em", fontWeight: "500" }],
        "lg":   ["20px", { lineHeight: "1.3em", letterSpacing: "-0.02em", fontWeight: "400" }],
        "base": ["16px", { lineHeight: "1.4em", letterSpacing: "0",       fontWeight: "400" }],
        "sm":   ["14px", { lineHeight: "1.3em", letterSpacing: "0",       fontWeight: "400" }],
        "xs":   ["12px", { lineHeight: "1.3em", letterSpacing: "0",       fontWeight: "400" }],
      },
      maxWidth: {
        container: "1128px",
      },
      padding: {
        section: "96px",
        "section-tablet": "80px",
        "section-mobile": "64px",
      },
      borderRadius: {
        card: "12px",
        "card-lg": "20px",
      },
    },
  },
  plugins: [],
};
