import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3>3. razred GVG</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          brojač klikova: {count}
        </button>
      </div>
      <p className="read-the-docs">
        Ovo je singlepage stranica napravljena u Reactu!
      </p>
    </>
  );
}

export default App;
