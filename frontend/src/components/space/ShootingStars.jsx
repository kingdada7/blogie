import { useFrame } from "@react-three/fiber";
import { Trail } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Meteor({ delay }) {
  const ref = useRef();

  const speed = useMemo(() => 20 + Math.random() * 10, []);
  const timer = useRef(delay);

  useFrame((_, delta) => {
    timer.current += delta;

    // Spawn every 5–10 seconds
    if (timer.current > 5 + Math.random() * 5) {
      ref.current.position.set(
        (Math.random() - 0.5) * 60,
        20 + Math.random() * 10,
        -20 - Math.random() * 30
      );

      timer.current = 0;
    }

    // Move diagonally
    ref.current.position.x += delta * speed;
    ref.current.position.y -= delta * speed * 0.5;

    // Reset when off-screen
    if (
      ref.current.position.x > 40 ||
      ref.current.position.y < -30
    ) {
      ref.current.position.set(
        -40,
        20 + Math.random() * 10,
        -20 - Math.random() * 30
      );
    }
  });

  return (
    <Trail
      width={1}
      length={8}
      color={new THREE.Color("#6ee7ff")}
      attenuation={(t) => t * t}
    >
      <mesh ref={ref}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color="#bffcff" />
      </mesh>
    </Trail>
  );
}

export default function ShootingStars() {
  return (
    <>
      <Meteor delay={0} />
      <Meteor delay={2} />
      <Meteor delay={4} />
    </>
  );
}