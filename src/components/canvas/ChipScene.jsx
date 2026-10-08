'use client'

import { Line, OrbitControls, PerspectiveCamera, RoundedBox } from '@react-three/drei'

const routes = [
  [[-2, -0.065, -1.18], [-1.52, -0.065, -1.18], [-1.52, -0.065, -0.72], [-1.12, -0.065, -0.72]],
  [[-2, -0.065, -0.84], [-1.7, -0.065, -0.84], [-1.7, -0.065, -0.36], [-1.12, -0.065, -0.36]],
  [[-2, -0.065, 0.92], [-1.62, -0.065, 0.92], [-1.62, -0.065, 0.54], [-1.12, -0.065, 0.54]],
  [[-1.88, -0.065, 1.26], [-1.42, -0.065, 1.26], [-1.42, -0.065, 0.82], [-1.12, -0.065, 0.82]],
  [[2, -0.065, -1.12], [1.55, -0.065, -1.12], [1.55, -0.065, -0.72], [1.12, -0.065, -0.72]],
  [[2, -0.065, -0.78], [1.76, -0.065, -0.78], [1.76, -0.065, -0.34], [1.12, -0.065, -0.34]],
  [[2, -0.065, 0.86], [1.7, -0.065, 0.86], [1.7, -0.065, 0.48], [1.12, -0.065, 0.48]],
  [[1.9, -0.065, 1.18], [1.48, -0.065, 1.18], [1.48, -0.065, 0.78], [1.12, -0.065, 0.78]],
  [[-1.55, -0.065, -1.45], [-1.55, -0.065, -1.28], [-0.82, -0.065, -1.28], [-0.82, -0.065, -1.05]],
  [[-0.48, -0.065, 1.48], [-0.48, -0.065, 1.24], [0.68, -0.065, 1.24], [0.68, -0.065, 1.05]],
  [[1.62, -0.065, -1.42], [1.62, -0.065, -1.26], [0.84, -0.065, -1.26], [0.84, -0.065, -1.05]],
  [[0.5, -0.065, 1.46], [0.5, -0.065, 1.28], [-0.62, -0.065, 1.28], [-0.62, -0.065, 1.05]],
]

const vias = [
  [-1.52, -0.06, -0.72],
  [-1.7, -0.06, -0.36],
  [-1.62, -0.06, 0.54],
  [-1.42, -0.06, 0.82],
  [1.55, -0.06, -0.72],
  [1.76, -0.06, -0.34],
  [1.7, -0.06, 0.48],
  [1.48, -0.06, 0.78],
]

const gridLines = []
for (let index = 0; index <= 8; index += 1) {
  const coordinate = -0.92 + index * 0.23
  gridLines.push([
    [-1.02, 0.355, coordinate],
    [1.02, 0.355, coordinate],
  ])
}
for (let index = 0; index <= 9; index += 1) {
  const coordinate = -1.035 + index * 0.23
  gridLines.push([
    [coordinate, 0.355, -0.92],
    [coordinate, 0.355, 0.92],
  ])
}

const terminals = Array.from({ length: 12 }, (_, index) => index)

export function ChipScene({ motionEnabled }) {
  return (
    <>
      <PerspectiveCamera makeDefault fov={34} position={[0, 4.1, 6.2]} />
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 5, 4]} intensity={3} color='#d8eadc' />
      <pointLight position={[-3, 2, -2]} intensity={18} color='#74d6a5' distance={8} />
      <pointLight position={[3, 2, 2]} intensity={8} color='#cf845e' distance={7} />

      <group rotation={[-0.12, -0.12, 0]}>
        <RoundedBox args={[4.55, 0.16, 3.35]} radius={0.12} smoothness={5} position={[0, -0.18, 0]}>
          <meshStandardMaterial color='#1c2a26' metalness={0.56} roughness={0.42} />
        </RoundedBox>
        <RoundedBox args={[3.95, 0.025, 2.72]} radius={0.08} smoothness={4} position={[0, -0.087, 0]}>
          <meshStandardMaterial color='#263b32' metalness={0.58} roughness={0.5} />
        </RoundedBox>

        {routes.map((route, index) => (
          <Line
            key={`route-${index}`}
            points={route}
            color={index % 3 === 0 ? '#c8815f' : '#78c49b'}
            lineWidth={index % 3 === 0 ? 1.05 : 1.25}
            transparent
            opacity={0.78}
          />
        ))}

        {vias.map((position, index) => (
          <mesh key={`via-${index}`} position={position}>
            <cylinderGeometry args={[0.045, 0.045, 0.025, 12]} />
            <meshStandardMaterial
              color={index % 2 === 0 ? '#b77b60' : '#7bd6a7'}
              emissive={index % 2 === 0 ? '#572b20' : '#17452d'}
              emissiveIntensity={0.7}
              metalness={0.5}
              roughness={0.32}
            />
          </mesh>
        ))}

        <RoundedBox args={[2.5, 0.31, 2.1]} radius={0.07} smoothness={5} position={[0, 0.16, 0]}>
          <meshStandardMaterial color='#101916' metalness={0.64} roughness={0.29} />
        </RoundedBox>
        <RoundedBox args={[2.28, 0.035, 1.88]} radius={0.025} smoothness={4} position={[0, 0.333, 0]}>
          <meshStandardMaterial
            color='#182720'
            emissive='#10291b'
            emissiveIntensity={0.34}
            metalness={0.3}
            roughness={0.55}
          />
        </RoundedBox>

        {gridLines.map((points, index) => (
          <Line
            key={`die-line-${index}`}
            points={points}
            color={index % 2 === 0 ? '#7ed1a5' : '#536b5b'}
            lineWidth={index % 2 === 0 ? 0.7 : 0.45}
            transparent
            opacity={index % 2 === 0 ? 0.43 : 0.34}
          />
        ))}

        <RoundedBox args={[0.74, 0.012, 0.42]} radius={0.025} smoothness={3} position={[0, 0.355, 0]}>
          <meshStandardMaterial
            color='#213e2e'
            emissive='#25633c'
            emissiveIntensity={0.72}
            metalness={0.24}
            roughness={0.42}
          />
        </RoundedBox>
        <Line
          points={[
            [-0.26, 0.364, -0.09],
            [0.26, 0.364, -0.09],
          ]}
          color='#bad8ba'
          lineWidth={0.8}
          transparent
          opacity={0.58}
        />

        {terminals.map((index) => {
          const offset = -1.65 + index * 0.3
          return (
            <group key={`terminal-${index}`}>
              <mesh position={[offset, -0.18, 1.71]}>
                <boxGeometry args={[0.12, 0.035, 0.22]} />
                <meshStandardMaterial color='#a9785e' metalness={0.74} roughness={0.3} />
              </mesh>
              <mesh position={[offset, -0.18, -1.71]}>
                <boxGeometry args={[0.12, 0.035, 0.22]} />
                <meshStandardMaterial color='#a9785e' metalness={0.74} roughness={0.3} />
              </mesh>
            </group>
          )
        })}

        <OrbitControls
          autoRotate={motionEnabled}
          autoRotateSpeed={0.32}
          enableDamping
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.05}
          minPolarAngle={Math.PI / 4.5}
          rotateSpeed={0.55}
        />
      </group>
    </>
  )
}
