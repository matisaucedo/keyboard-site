# Insights Hardware (keyboard-site) — CLAUDE.md

## Identidad del proyecto

Demo showcase del teclado mecánico **Insights Type M1** — landing de producto premium de una sola pantalla. Pieza ilustrativa para el portfolio de Insights; se capturaransscreenshots en DeviceMockup (iPhone/Mac).

## Dispatcher
Ver `~/.claude/CLAUDE.md`. Implementación UI → delegar a `design-build`. Lookups → `code-quick`/`design-quick`. Decisiones arquitecturales → `design-architect`.

**Regla crítica:** Antes de escribir CUALQUIER componente, invocar el skill `frontend-design`. Sin excepciones.

## Stack

| Capa | Tecnologia |
|------|-----------|
| Framework | React 19 + JSX |
| Bundler | Vite (dev: 5173) |
| Estilos | TailwindCSS v3.4 + CSS variables |
| Animaciones | Framer Motion |
| Scroll suave | Lenis |
| Iconos | SVG inline / Lucide |

## Design Tokens

Tokens VoidAI style (deep navy dark) — ya cargados en `src/index.css`:

```
Colores:
  --color-bg:       #01010D
  --color-surface:  #0D0D1A
  --color-surface2: #12121F
  --color-txt:      #F0F0FF
  --color-muted:    rgba(240,240,255,0.45)
  --color-muted2:   rgba(240,240,255,0.30)
  --color-accent:   #fa8039
  --accent-rgb:     250,128,57

Tipografia:
  Headings + Body: Inter, weight 300–700
  Labels: Inter 500, 11px, uppercase, tracking 0.14em
```

Tailwind aliases: `bg-bg`, `bg-surface`, `bg-acc`, `text-txt`, `text-muted`, `text-muted2`

## Glassmorphism dark premium

```css
/* Usar en cards principales */
background: linear-gradient(180deg,
  rgba(255,255,255,0.08) 0%,
  rgba(255,255,255,0.025) 50%,
  rgba(255,255,255,0.05) 100%
);
backdrop-filter: blur(24px) saturate(180%);
-webkit-backdrop-filter: blur(24px) saturate(180%);
border: 1px solid rgba(255,255,255,0.08);
box-shadow:
  inset 0 1px 0 rgba(255,255,255,0.15),
  inset 0 -1px 0 rgba(0,0,0,0.20),
  0 8px 24px rgba(0,0,0,0.35);
```

Clase `.surface-glass` disponible en index.css para casos simples.

## Responsive

- Breakpoints: `tablet:` (≥810px), `desktop:` (≥1200px), `max-mobile:` (<810px). **Nunca** `md:` / `lg:`.
- Tokens spacing auto-escalan via CSS vars: `var(--gap-card)`, `var(--gap-section)`.
- Easing: usar `var(--ease-out)`, `var(--ease-spring)`. Nunca `ease` nativo.

## Assets disponibles

```
public/assets/
├── keyboard_anim.mp4    # Video principal — scroll-sync en HeroSection
├── keyboard.png         # Imagen fallback del teclado
└── logo_insights.png    # Logo para Navbar y Footer
```

## Arquitectura de componentes

```
src/
├── App.jsx                    # Layout (ya configurado: importa todos los componentes)
├── main.jsx                   # Lenis + GrainOverlay (ya configurado, no tocar)
├── index.css                  # Tokens + utilidades (ya configurado, no tocar)
└── components/
    ├── Navbar.jsx             # ← EMPEZAR ACÁ
    ├── HeroSection.jsx        # Split-screen texto + video scroll-sync
    ├── FeatureBlocks.jsx      # 3 cards glassmorphism con scroll-focus
    ├── BentoGrid.jsx          # Grid specs (batería, o-ring, CTA)
    └── Footer.jsx             # Footer mínimo
```

**Cada archivo tiene un comentario `// TODO` con la spec completa del componente.**

Orden de implementación: Navbar → HeroSection → FeatureBlocks → BentoGrid → Footer

## Componentes base disponibles (reutilizar)

| Componente | Archivo | Uso |
|------------|---------|-----|
| FadeUp | `components/ui/FadeUp.jsx` | Scroll fade+up (0.7s) |
| StaggerGrid | `components/ui/StaggerGrid.jsx` | Stagger children 0.10s |
| AnimatedText | `components/ui/AnimatedText.jsx` | Heading animado |
| SectionLabel | `components/ui/SectionLabel.jsx` | Arrow + uppercase label |
| Container | `components/ui/Container.jsx` | Max-width 1128px |
| Section | `components/ui/Section.jsx` | Wrapper section-py |
| PulsingOrb | `components/ui/PulsingOrb.jsx` | Orbes decorativos |
| GrainOverlay | `components/ui/GrainOverlay.jsx` | Ya montado en main.jsx |
| ParallaxLayer | `components/ui/ParallaxLayer.jsx` | Parallax en scroll |

## Animaciones — patrones específicos de este proyecto

| Efecto | Implementación |
|--------|---------------|
| Scroll-sync video | `useScroll` + `useEffect` → `video.currentTime` |
| Magnetic button | `useMotionValue` + `useTransform` en `onMouseMove` |
| Feature scroll-focus | `useScroll` + `useTransform` → opacity/scale por card |
| Fade-up entrance | Usar `<FadeUp>` del boilerplate o `whileInView` |
| Blobs orgánicos | CSS `@keyframes blob` (mantener como estaban en el original) |

## Sistema de Animaciones

- **FadeUp**: `initial { opacity: 0, y: 40 }` → `{ opacity: 1, y: 0 }`, 0.7s
- **Stagger**: `staggerChildren: 0.10`, `delayChildren: 0.05`
- **Card hover**: `scale: 1.02` o `y: -4px`, 0.25s
- **SOLO** animar `transform` y `opacity`
- Viewport: `once: true`, margin `-80px`

## Build & Run

```bash
npm install      # Instalar dependencias (primera vez)
npm run dev      # Vite hot-reload :5173
npm run build    # Build a dist/
```

## Integración al portfolio de Insights

Una vez terminado el polish:
1. Capturar screenshots con DeviceMockup (iPhone 15 Pro + Mac)
2. Agregar al portfolio de Insights como case study "Insights Hardware"
3. El proyecto vive en `~/Documents/keyboard-site/` de forma independiente

## Referencias

- Design spec: `docs/superpowers/specs/2026-04-15-keyboard-site-dark-mode.md`
- Original HTML estático: `~/Documents/claudecode/webs_animadas/keyboard-site/index.html`
- Design system: `~/Documents/Matias boveda/design-system/_index.md`
