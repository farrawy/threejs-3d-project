import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'

const Backdrop = () => {
  const shadows = useRef()
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={8}
        radius={15}
        intensity={0.8}
        ambient={0.3}
        position={[5, 5, -10]}
      />

      <RandomizedLight
        amount={6}
        radius={8}
        intensity={0.4}
        ambient={0.8}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop
