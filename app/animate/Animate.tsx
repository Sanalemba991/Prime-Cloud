
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Cube() {
    return (
        <mesh
            rotation={[0.5, 0.5, 0]}
            scale={2}
        >
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial
                color="#2563eb"
                roughness={0.4}
                metalness={0.2}
            />
        </mesh>
    );
}

export default function Animate() {
    return (
        <div className="h-screen w-full">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.8} />

                <directionalLight
                    position={[5, 5, 5]}
                    intensity={2}
                />

                <pointLight
                    position={[-3, 2, 3]}
                    intensity={1.5}
                />

                <Cube />

                <OrbitControls
                    enableDamping
                    dampingFactor={0.05}
                />
            </Canvas>
        </div>
    );
}
