import { GizmoHelper, GizmoViewport, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import useMouseEvent from "../../hooks/useMouseEvent";

const Experience = () => {
  useMouseEvent();
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
