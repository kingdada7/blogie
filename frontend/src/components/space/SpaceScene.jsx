import { Canvas } from "@react-three/fiber";
import StarField from "./Starfield";
import ShootingStars from "./ShootingStars";

export default function SpaceScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 15],
        fov: 60,
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    >
      <color attach="background" args={["#01030B"]} />

      <ambientLight intensity={0.3} />

      <StarField />
      <ShootingStars />
    </Canvas>
  );
}
