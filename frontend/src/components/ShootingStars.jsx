import { Sparkles } from "@react-three/drei";

export default function ShootingStars() {
  return (
    <Sparkles
      count={80}
      size={5}
      speed={0.6}
      scale={[40, 20, 20]}
      color="#00ffff"
    />
  );
}