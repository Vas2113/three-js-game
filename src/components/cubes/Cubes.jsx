import { RigidBody } from '@react-three/rapier';
import cubes from './cubes.json';

export const Cubes = () => {
  return cubes.map((coords, index) => (
    <Cube
      key={index}
      position={coords}
    />
  ));
};

const Cube = (props) => {
  return (
    <RigidBody {...props}>
      <mesh
        castShadow
        receiveShadow>
        <meshStandardMaterial color="orange" />
        <boxGeometry args={[2, 2, 2]} />
      </mesh>
    </RigidBody>
  );
};
