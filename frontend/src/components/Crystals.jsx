import { Float, MeshTransmissionMaterial } from "@react-three/drei";

export default function Crystals() {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <Float
          key={i}
          speed={1}
          rotationIntensity={2}
          floatIntensity={2}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 30,
              (Math.random() - 0.5) * 20,
              -Math.random() * 20,
            ]}
          >
            <octahedronGeometry args={[0.5]} />

            <MeshTransmissionMaterial
              thickness={0.8}
              roughness={0}
              transmission={1}
              chromaticAberration={0.05}
              color="#55ffff"
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}