import { Cloud } from "@react-three/drei";

export default function Nebula() {
  return (
    <>
      <Cloud
        position={[0, 0, -20]}
        speed={0.2}
        opacity={0.35}
        color="#00d9ff"
      />

      <Cloud
        position={[-8, 4, -15]}
        speed={0.1}
        opacity={0.2}
        color="#0099ff"
      />

      <Cloud
        position={[10, -2, -18]}
        speed={0.15}
        opacity={0.25}
        color="#00ffff"
      />
    </>
  );
}