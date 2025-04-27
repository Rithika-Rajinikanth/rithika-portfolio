// components/GLBViewer.js
import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber'; // Use forward slash
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei'; 
// For interactive viewing

function Model({ modelPath }) {
  const gltf = useLoader(GLTFLoader, modelPath);
  return <primitive object={gltf.scene} />;
}

function GLBViewer({ modelPath }) {
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 1, 0]} intensity={1} />
      <Suspense fallback={null}>
        <Model modelPath={modelPath} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default GLBViewer;