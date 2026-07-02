import { useMemo } from "react";
import * as THREE from "three";

export default function StarField() {
  const positions = useMemo(() => {
    const array = new Float32Array(10000 * 3);

    for (let i = 0; i < 10000; i++) {
      array[i * 3] = (Math.random() - 0.5) * 250;
      array[i * 3 + 1] = (Math.random() - 0.5) * 250;
      array[i * 3 + 2] = -Math.random() * 300;
    }

    return array;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#8fefff"
        size={0.12}
        sizeAttenuation
        transparent
        opacity={0.9}
      />
    </points>
  );
}