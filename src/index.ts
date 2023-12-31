import { useToggle } from './hooks/useToggle';
import typescript from 'rollup-plugin-typescript2';

function App() {
  useToggle();
  console.log('App');
}

App();
