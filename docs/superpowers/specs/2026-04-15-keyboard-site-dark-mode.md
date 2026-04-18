# Spec: Insights Hardware — Dark Mode Migration & Polish

**Fecha:** 2026-04-15
**Proyecto:** `~/Documents/keyboard-site/`
**Estado:** Aprobado — listo para implementación

---

## Contexto

Migración del keyboard-site de HTML estático (light/glassmorphism/Outfit) a Vite + React con dark mode alineado al design system Minta del portfolio de Insights. La página terminada se usa para capturas en DeviceMockup.

## Decisiones aprobadas

| Decisión | Elección |
|----------|----------|
| Stack | Vite + React 19 |
| Modo visual | Dark — Minta tokens (#000 bg, #fa8039 accent) |
| Font | Inter (reemplaza Outfit) |
| Animaciones | Framer Motion + Lenis |
| Scope | Polish completo (nav, hero, features, bento, footer) |
| Integración portfolio | Screenshots en DeviceMockup |

---

## Token mapping (light → dark)

| Elemento | Era | Ahora |
|----------|-----|-------|
| Background | `#fafafa` | `#000000` |
| Glass card bg | `rgba(255,255,255,0.35)` | `rgba(255,255,255,0.06)–0.08` |
| Glass border | `rgba(255,255,255,0.5)` | `rgba(255,255,255,0.08)` |
| Texto primario | zinc-950 | `#ffffff` |
| Texto secundario | zinc-500 | `#c2c2c2` |
| Accent | `#ff8e00` | `#fa8039` |
| Font | Outfit | Inter |
| Blobs | amber sobre blanco | naranja sobre negro (opacidad ~0.3) |

---

## Componente 1: Navbar

**Fixed nav, altura 64px.**

- Logo: `/assets/logo_insights.png` (escala 1×, height 24px)
- Links: "Diseño", "Interruptores", "Especificaciones" (`.t-sm`, color `--color-muted`, hover `--color-txt`)
- CTA: "Reservar" — pill con glassmorphism dark premium, accent border, hover scale 1.02
- Fondo: `.surface-glass` + `border-b rgba(255,255,255,0.08)`
- Mobile: ocultar links, mantener logo + CTA
- Entrada: fade-down desde y: -10 al montar (0.5s)

---

## Componente 2: HeroSection

**Split-screen de pantalla completa (100vh mínimo).**

### Desktop (≥1200px)
- **Izquierda (sticky):** Badge "Nuevo Lanzamiento" (pill glassmorphism + sparkle SVG + "Nuevo Lanzamiento" en accent) → H1 "Lógica. Refinada." (`.t-h1`, 6.5rem aprox) → párrafo descripción (`.t-body`) → 2 botones CTA
- **Derecha (scroll-sync):** Video `keyboard_anim.mp4` con mask fade lateral izquierda (linear-gradient to right, black transparent)
- Video `playsinline autoPlay muted loop` — `currentTime` driven por scroll progress
- El texto queda `position: sticky` mientras el video ocupa el viewport

### Mobile (≤809px)
- Columna única, video de fondo con `object-cover` y mask top/bottom
- Texto superpuesto sobre el video con glass card debajo del heading
- Botones full-width stacked

### CTAs
- Primario: "Reserva el tuyo — $249" — fondo `#fa8039`, text blanco, border-radius 9999px, magnetic hover
- Secundario: "Ver Video" — glassmorphism dark, border `rgba(255,255,255,0.12)`, magnetic hover
- Magnetic: `useMotionValue(0)` para x/y, `onMouseMove` calcula offset × 0.15, `onMouseLeave` reset a 0

### Animación entrada
```
Badge: delay 0
H1: delay 0.1, fade-up y: 30
Descripción: delay 0.2
Botones: delay 0.3, stagger 0.08
```

---

## Componente 3: FeatureBlocks

**3 cards en columna con scroll-focus effect.**

Cada card que está centrada en el viewport tiene `opacity: 1, scale: 1`. Las demás: `opacity: 0.25, scale: 0.96`. Transición suave via `useScroll` + `useTransform`.

### Cards

#### Card 1: "Perfección Táctil de 45g"
- Etiqueta: "ACUSTO-MECÁNICA" (eyebrow + ícono sliders SVG)
- Heading: "Perfección Táctil de 45g" (`.t-h2`)
- Body: descripción del sistema de amortiguación
- Glass card premium (spec arriba), border-radius 24px

#### Card 2: "Aluminio Sólido CNC"
- Etiqueta: "ARQUITECTURA" (cube SVG)
- Heading + descripción
- Detalle: highlight del material con color accent

#### Card 3: "MCU 8000Hz Sin Latencia"
- Etiqueta: "TRANSMISIÓN" (lightning SVG)
- Stat grande: "8000Hz" en `.t-h1` con color accent
- Descripción técnica

### Layout
- Desktop: 3 cards en fila (gap 24px), máx 1128px
- Mobile: columna única, sin scroll-focus (todas opacity 1)

---

## Componente 4: BentoGrid

**Grid de 3 cards de specs.**

Layout desktop: `[2fr 1fr]` en fila 1, `[1fr]` full-width en fila 2.

### Card A: "400h de Autonomía" (2 cols)
- Ícono batería (SVG inline)
- Stat: "400h" en `.t-h1` color accent
- Descripción: "Hasta 400 horas de uso continuo..."
- Glass card premium

### Card B: "Montura O-Ring" (1 col)
- Card más oscura (`bg-surface2`)
- 3 barras animadas (CSS keyframes, stagger delay)
- Label: "Amortiguación O-Ring" eyebrow
- Descripción técnica breve

### Card C: CTA Full-Width
- Background: subtle gradient `rgba(250,128,57,0.06)` → `rgba(250,128,57,0.02)`
- Texto: "Tu código merece algo mejor" (`.t-h2`)
- Botón: shopping bag SVG + "Reservar ahora" — accent color, magnetic hover
- Border: `rgba(250,128,57,0.15)`

### Animaciones
- Cards: `<FadeUp>` individual con stagger (0, 0.1, 0.2s)

---

## Componente 5: Footer

**Footer mínimo.**

- `border-top: 1px solid rgba(255,255,255,0.08)`
- Padding: 32px vertical
- Flex: logo izquierda + copyright derecha
- Logo: `/assets/logo_insights.png`, opacity 0.6, height 18px
- Copyright: "© 2026 Insights Hardware. Todos los derechos reservados." (`.t-xs`, muted2)

---

## Blobs orgánicos (ambiente)

Mantener la estética de blobs del original, adaptada a dark:

```css
@keyframes blob {
  0%   { transform: translate(0, 0)    scale(1); }
  33%  { transform: translate(30px, -50px) scale(1.1); }
  66%  { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0, 0)    scale(1); }
}
```

- 2–3 blobs: `bg-[radial-gradient(circle,rgba(250,128,57,0.15),transparent_60%)]`
- `animation: blob 15s infinite alternate ease-in-out`
- `position: fixed`, `pointer-events: none`, `z-index: 0`
- Opacidad máxima: 0.3 (light original era 0.5)
- `will-change: transform`, `filter: blur(60px)` para suavizar

---

## Checklist de verificación

- [ ] `npm run dev` arranca en localhost:5173 sin errores
- [ ] Inter font cargando (no system font fallback)
- [ ] Background negro puro `#000000`
- [ ] Navbar fija y glassmorphism funciona en scroll
- [ ] Hero: texto izquierda sticky, video derecha (desktop)
- [ ] Video scroll-sync: currentTime avanza al scrollear
- [ ] Feature blocks: dimming effect en cards no centradas
- [ ] Bento cards con glass premium (no planas)
- [ ] Accent `#fa8039` en CTAs y stats
- [ ] Magnetic hover en botones principales
- [ ] Mobile (≤809px): layout columna única funcional
- [ ] Blobs visibles pero sutiles (opacity ≤0.3)
- [ ] Reduced-motion respetado (CSS ya configurado)
- [ ] Tomar screenshots finales en DeviceMockup
