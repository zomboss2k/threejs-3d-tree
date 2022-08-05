import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, ContactShadows } from "@react-three/drei";
// import { useControls } from "leva";

export default function App() {
  return (
    <>
      <Canvas camera={{ position: [-10, 10, 40], fov: 50 }}>
        {/* màu cây */}
        <hemisphereLight color="white" groundColor="green" intensity={0.75} />
        {/* độ bóng */}
        <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
        <group position={[0, -10, 0]}>
          <Model
            position={[0, 0.25, 0]}
            url={
              "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-lime/model.gltf"
            }
          />
          {/* Bóng đỗ */}
          {/* blur={10} far={20} */}
          <ContactShadows scale={20} blur={10} far={20} />
        </group>
        {/* di chuột */}
        <OrbitControls />
      </Canvas>
    </>
  );
}

function Model({ url, ...props }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} {...props} />;
}
