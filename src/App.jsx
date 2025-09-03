import { PointerLockControls, Sky } from '@react-three/drei';
import Ground from './components/ground/Ground.jsx';
import { Physics } from '@react-three/rapier';
import Player from './components/Player/Player.jsx';
import { Cubes } from './components/cubes/Cubes.jsx';

export const App = () => {
  return (
    <>
      <PointerLockControls />
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={1.5} />
      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <Player />
        <Cubes />
      </Physics>
    </>
  );
};

export default App;
