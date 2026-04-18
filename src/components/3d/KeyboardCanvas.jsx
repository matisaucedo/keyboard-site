import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'

function KeyboardMesh({ mousePos }) {
  const groupRef = useRef()
  const smoothX = useRef(0)

  useFrame(() => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += 0.003
    const targetX = mousePos.current.y * -0.25
    smoothX.current = MathUtils.lerp(smoothX.current, targetX, 0.04)
    groupRef.current.rotation.x = smoothX.current
  })

  return (
    <group ref={groupRef} position={[0, -0.05, 0]}>
      {/* Lights */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 6, 4]} intensity={2.5} color="#fff8f0" />
      <directionalLight position={[-2, 2, -2]} intensity={0.8} color="#c8d8ff" />
      <pointLight position={[-0.55, 1.5, -0.38]} color="#fa8039" intensity={6} distance={6} decay={2} />

      {/* Base plate */}
      <mesh>
        <boxGeometry args={[2.2, 0.12, 1.9]} />
        <meshStandardMaterial color="#1c1c1c" roughness={0.45} metalness={0.65} />
      </mesh>

      {/* Key 0 — top-left */}
      <mesh position={[-0.52, 0.15, 0.36]}>
        <boxGeometry args={[0.72, 0.14, 0.72]} />
        <meshStandardMaterial color="#dedad4" roughness={0.25} metalness={0.05} />
      </mesh>

      {/* Key 2 — top-right */}
      <mesh position={[0.52, 0.15, 0.36]}>
        <boxGeometry args={[0.72, 0.14, 0.72]} />
        <meshStandardMaterial color="#dedad4" roughness={0.25} metalness={0.05} />
      </mesh>

      {/* Key 1 — bottom-right */}
      <mesh position={[0.52, 0.15, -0.36]}>
        <boxGeometry args={[0.72, 0.14, 0.72]} />
        <meshStandardMaterial color="#dedad4" roughness={0.25} metalness={0.05} />
      </mesh>

      {/* Key GO — bottom-left, orange + emissive */}
      <mesh position={[-0.52, 0.17, -0.36]}>
        <boxGeometry args={[0.76, 0.18, 0.76]} />
        <meshStandardMaterial
          color="#fa8039"
          emissive="#fa8039"
          emissiveIntensity={0.55}
          roughness={0.2}
          metalness={0.08}
        />
      </mesh>
    </group>
  )
}

export default function KeyboardCanvas() {
  const mousePos = useRef({ x: 0, y: 0 })

  function onPointerMove(e) {
    mousePos.current = {
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: -(e.clientY / window.innerHeight - 0.5) * 2,
    }
  }

  return (
    <div
      style={{ width: '100%', height: '100%' }}
      onPointerMove={onPointerMove}
    >
      <Canvas
        dpr={[1, 2]}
        camera={{ fov: 36, position: [1.6, 2.0, 2.6], near: 0.1, far: 100 }}
        gl={{ alpha: true, antialias: true, premultipliedAlpha: false }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0)
        }}
      >
        <KeyboardMesh mousePos={mousePos} />
      </Canvas>
    </div>
  )
}
