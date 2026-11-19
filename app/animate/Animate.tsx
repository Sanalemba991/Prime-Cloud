"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Cube() {
    return (
        <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial
                color="#2563eb"
                roughness={0.3}
                metalness={0.2}
            />
        </mesh>
    );
}

export default function Animate() {
    return (
        <div className="h-screen w-full bg-[repeating-conic-gradient(#ffffff_0%_25%,#e5e5e5_0%_50%)] [background-size:40px_40px]">

            <Canvas shadows camera={{ position: [5, 4, 8] }}>

                <ambientLight intensity={0.5} />

                <spotLight
                    position={[3, 5, 5]}
                    intensity={100}
                    angle={0.5}
                    penumbra={0.5}
                />


                <Cube />

                <OrbitControls />

            </Canvas>
        </div>
    );
}