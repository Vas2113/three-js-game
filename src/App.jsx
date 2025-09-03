import { PointerLockControls, Sky } from '@react-three/drei';
import Ground from '@/components/ground/Ground.jsx';
import { Physics } from '@react-three/rapier';
import Player from '@/components/Player/Player.jsx';
import { Cubes } from '@/components/cubes/Cubes.jsx';
import { WeaponModel } from '@/components/weaponModel/WeaponModel.jsx';

const shadowOffset = 50;

export const App = () => {
  return (
    <>
      <PointerLockControls />
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={1.5} />
      <directionalLight
        castShadow
        intensity={1.5}
        shadow-mapSize={4096}
        shadow-camera-top={shadowOffset}
        shadow-camera-bottom={-shadowOffset}
        shadow-camera-left={shadowOffset}
        shadow-camera-right={-shadowOffset}
        position={[100, 100, 0]}
      />
      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <Player />
        <Cubes />
      </Physics>
      <group position={[3, 1, -2]}>
        <WeaponModel />
      </group>
    </>
  );
};

export default App;
