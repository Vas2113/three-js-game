import { RigidBody } from '@react-three/rapier';
import cubes from '../../constants/cubes.json';

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
      <mesh>
        <meshStandardMaterial color="red" />
        <boxGeometry />
      </mesh>
    </RigidBody>
  );
};
