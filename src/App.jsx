import { Sky } from '@react-three/drei';
import { Ground } from './components/Ground';

const App = () => {
  return (
    <>
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={1.5} />
      <Ground />
    </>
  );
};

export default App;
