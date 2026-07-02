import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import Stars from "./Stars";
import Nebula from "./Nebula";
import Crystals from "./Crystals";
import ShootingStars from "./ShootingStars";

export default function SpaceBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 60 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    >
      <color attach="background" args={["#01030b"]} />
      <fog attach="fog" args={["#01030b", 20, 80]} />

      <ambientLight intensity={0.4} />

      <pointLight position={[10, 10, 10]} color="#00ffff" intensity={40} />

      <Stars />

      <Nebula />

      <Crystals />

      <ShootingStars />

      <EffectComposer>
        <Bloom
          intensity={2}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.1}
      />
    </Canvas>
  );
}