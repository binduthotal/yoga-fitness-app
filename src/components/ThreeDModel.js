import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import Model from "./Model";
import { Easing } from "three/examples/jsm/libs/tween.module.js";
import { extend } from "@react-three/fiber";
import * as THREE from "three"

extend({ planeBufferGeometry: THREE.PlaneBufferGeometry });

const ThreeDModel = () => {
  function Rig() {
    return useFrame((state, delta) => {
      Easing.damp3(
        state.camera.position,
        [1 + state.mouse.x / 4, 1.5 + state.mouse.y / 4, 2.5],
        0.2,
        delta
      );
    });
  }
  return (
    <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={1024}
      />
      <group position={[0, -1, 0]}>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
      <Rig />
    </Canvas>
  );
};

export default ThreeDModel;
