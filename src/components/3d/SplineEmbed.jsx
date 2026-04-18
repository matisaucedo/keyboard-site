import { Suspense, lazy } from 'react'
import { useReducedMotion } from '../../motion.js'

const Spline = lazy(() => import('@splinetool/react-spline'))

// Gradient placeholder cuando reduced motion está activo
function FallbackGradient({ style }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background:
          'radial-gradient(ellipse at center, rgba(250,128,57,0.15) 0%, rgba(0,0,0,0) 70%)',
        position: 'absolute',
        inset: 0,
        ...style,
      }}
    />
  )
}

// Skeleton mientras carga el canvas
function CanvasFallback() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0)',
      }}
    />
  )
}

export default function SplineEmbed({ style = {}, className = '' }) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <FallbackGradient style={style} />
  }

  return (
    <div style={{ width: '100%', height: '100%', ...style }} className={className}>
      <Suspense fallback={<CanvasFallback />}>
        <Spline
          scene="https://prod.spline.design/8ixdWLU6KiYBLuGN/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </Suspense>
    </div>
  )
}
