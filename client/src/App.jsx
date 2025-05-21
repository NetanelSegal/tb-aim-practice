import Background from './components/Background';
import Circles from './components/Circles';

function App() {
  return (
    <div className='h-screen overflow-hidden relative'>
      <Circles />
      <Background />
    </div>
  );
}

export default App;
