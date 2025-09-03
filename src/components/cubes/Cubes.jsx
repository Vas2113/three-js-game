import { RigidBody } from '@react-three/rapier';
import cubes from './cubes.json';

export const Cubes = () => {
  const Cube = (props) => {
    return (
      <RigidBody {...props}>
        <mesh
          castShadow
          receiveShadow>
          <meshStandardMaterial color="orange" />
          <boxGeometry />
        </mesh>
      </RigidBody>
    );
  };

  return cubes?.map((coords, index) => (
    <Cube
      key={index}
      position={coords}
    />
  ));
};
