import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

interface BoxProps {
  position: Array<number>;
}

function Box(props: any) {
  // This reference will give us direct access to the mesh
  // Consider that this is any type figure out the correct type
  const mesh = useRef<any>();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default Box;
