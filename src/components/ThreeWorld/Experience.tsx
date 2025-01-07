import { GizmoHelper, GizmoViewport, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Experience = () => {
  return (
    <Canvas camera={{ position: [0, 4, 10] }}>
      <OrbitControls />
      <axesHelper args={[5]} />
      <gridHelper args={[100, 100]} />
      <ambientLight />
      <GizmoHelper>
        <GizmoViewport />
      </GizmoHelper>
    </Canvas>
  );
};

export default Experience;
