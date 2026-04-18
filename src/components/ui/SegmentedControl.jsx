import { motion } from 'framer-motion'

export default function SegmentedControl({ value, onChange, options, className = '' }) {
  function handleKeyDown(e) {
    const idx = options.findIndex((o) => o.value === value)
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      onChange(options[(idx + 1) % options.length].value)
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      onChange(options[(idx - 1 + options.length) % options.length].value)
    }
  }

  return (
    <div
      role="tablist"
      onKeyDown={handleKeyDown}
      className={className}
      style={{
        position: 'relative',
        display: 'inline-flex',
        padding: 4,
        borderRadius: 999,
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.025) 50%, rgba(255,255,255,0.05) 100%)',
        border: '1px solid rgba(255,255,255,0.10)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        boxShadow:
          '0 1px 0 rgba(255,255,255,0.10) inset, 0 0 0 1px rgba(255,255,255,0.015) inset, 0 12px 40px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.35)',
        overflow: 'hidden',
      }}
    >
      {/* specular top-edge highlight — liquid glass refraction */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 999,
          pointerEvents: 'none',
          background:
            'radial-gradient(120% 60% at 50% 0%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 55%)',
          mixBlendMode: 'overlay',
          opacity: 0.9,
        }}
      />
      {options.map((opt) => {
        const active = opt.value === value
        return (
          <button
            key={opt.value}
            type="button"
            role="tab"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(opt.value)}
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px 24px',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '-0.01em',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: active ? 'var(--color-txt)' : 'var(--color-muted)',
              transition: 'color 0.4s cubic-bezier(0.22,1,0.36,1)',
              WebkitTapHighlightColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              if (!active) e.currentTarget.style.color = 'var(--color-txt)'
            }}
            onMouseLeave={(e) => {
              if (!active) e.currentTarget.style.color = 'var(--color-muted)'
            }}
          >
            {active && (
              <motion.span
                layoutId="segmented-pill"
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 999,
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  boxShadow:
                    '0 1px 0 rgba(255,255,255,0.35) inset, 0 -1px 0 rgba(255,255,255,0.04) inset, 0 8px 24px rgba(0,0,0,0.55), 0 2px 6px rgba(0,0,0,0.4)',
                  backdropFilter: 'blur(16px) saturate(200%)',
                  WebkitBackdropFilter: 'blur(16px) saturate(200%)',
                  zIndex: -1,
                }}
                transition={{ type: 'spring', stiffness: 320, damping: 28, mass: 0.9 }}
              />
            )}
            <span style={{ position: 'relative' }}>{opt.label}</span>
          </button>
        )
      })}
    </div>
  )
}
