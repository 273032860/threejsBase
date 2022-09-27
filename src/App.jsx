import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'
import * as THREE from 'three'

function App() {
  return (
    <div className="h-[100vh] bg-black">
      <Canvas className="h-full">
        <OrbitControls />
        <primitive object={new THREE.AxesHelper(10)} />
        <primitive object={new THREE.GridHelper(100, 100)} />
        <ambientLight intensity={3.5} />
        <Box args={[2, 2, 2]}></Box>
      </Canvas>
    </div>
  )
}

export default App
