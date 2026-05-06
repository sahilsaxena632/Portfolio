"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import {
  MutableRefObject,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as THREE from "three";

type PointerRef = MutableRefObject<{ x: number; y: number }>;

function mulberry32(seed: number) {
  let t = seed;
  return () => {
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function ParticleField({ count = 600 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const rand = mulberry32(0xc0ffee + count);
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 5 + rand() * 6;
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.02;
    ref.current.rotation.x += delta * 0.005;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        color="#cdd6df"
        size={0.022}
        sizeAttenuation
        transparent
        opacity={0.65}
        depthWrite={false}
      />
    </points>
  );
}

function Rings() {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * 0.06;
    ref.current.rotation.x += delta * 0.02;
  });

  return (
    <group ref={ref}>
      <mesh>
        <torusGeometry args={[2.6, 0.014, 16, 160]} />
        <meshBasicMaterial color="#7cffd4" toneMapped={false} />
      </mesh>
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[2.1, 0.012, 16, 160]} />
        <meshBasicMaterial color="#7aa2ff" toneMapped={false} />
      </mesh>
      <mesh rotation={[Math.PI / 1.7, Math.PI / 4, 0]}>
        <torusGeometry args={[2.95, 0.008, 16, 160]} />
        <meshBasicMaterial
          color="#a78bfa"
          toneMapped={false}
          transparent
          opacity={0.55}
        />
      </mesh>
    </group>
  );
}

function GlowOrb({
  position,
  color,
  size,
  speed,
}: {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
}) {
  return (
    <Float
      speed={speed}
      rotationIntensity={0.3}
      floatIntensity={1.4}
      floatingRange={[-0.2, 0.2]}
    >
      <mesh position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2.4}
          toneMapped={false}
        />
      </mesh>
      <mesh position={position}>
        <sphereGeometry args={[size * 1.6, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.12}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}

function ParallaxGroup({
  pointer,
  children,
}: {
  pointer: PointerRef;
  children: ReactNode;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      pointer.current.x * 0.2,
      0.04,
    );
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      -pointer.current.y * 0.15,
      0.04,
    );
  });

  return <group ref={ref}>{children}</group>;
}

function readMediaState() {
  if (typeof window === "undefined") {
    return { lowPower: false, reduced: false };
  }
  return {
    lowPower: window.matchMedia("(max-width: 768px)").matches,
    reduced: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  };
}

export function HeroScene() {
  const [media, setMedia] = useState(readMediaState);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mqMobile = window.matchMedia("(max-width: 768px)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setMedia({ lowPower: mqMobile.matches, reduced: mqMotion.matches });
    };
    mqMobile.addEventListener("change", sync);
    mqMotion.addEventListener("change", sync);
    return () => {
      mqMobile.removeEventListener("change", sync);
      mqMotion.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    const handler = (e: PointerEvent) => {
      pointerRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointerRef.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", handler, { passive: true });
    return () => window.removeEventListener("pointermove", handler);
  }, []);

  const { lowPower, reduced } = media;

  return (
    <Canvas
      dpr={[1, lowPower ? 1.25 : 1.75]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      camera={{ position: [0, 0, 7.5], fov: 50 }}
      frameloop={reduced ? "demand" : "always"}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 5]} intensity={1.1} color="#7cffd4" />
      <pointLight position={[-6, -4, -3]} intensity={0.9} color="#7aa2ff" />
      <pointLight position={[0, -5, 4]} intensity={0.5} color="#a78bfa" />

      <ParallaxGroup pointer={pointerRef}>
        <Rings />
        <GlowOrb position={[2.4, 1.3, 0.6]} color="#7cffd4" size={0.28} speed={1.1} />
        <GlowOrb
          position={[-2.6, -0.9, 1.1]}
          color="#7aa2ff"
          size={0.22}
          speed={0.8}
        />
        <GlowOrb
          position={[0.9, -1.7, -1]}
          color="#a78bfa"
          size={0.16}
          speed={1.4}
        />
        {!lowPower && (
          <GlowOrb
            position={[-1.5, 2.1, -0.8]}
            color="#7cffd4"
            size={0.12}
            speed={1.6}
          />
        )}
        <ParticleField count={lowPower ? 250 : 600} />
      </ParallaxGroup>
    </Canvas>
  );
}
