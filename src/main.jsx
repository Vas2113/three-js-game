import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Canvas } from '@react-three/fiber';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div id="container">
    <div className="aim" />
    <Canvas camera={{ fov: 45, position: [0, 5, 0] }}>
      <App />
    </Canvas>
  </div>
);
