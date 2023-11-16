import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isBool, setIsBool] = useState(false);
  // ComponentDidMount
  useEffect(() => {
    // THIS WILL ONLY RUN THE FIRST TIME
    // API CALLS
    console.log('ComponentDidMount');
  }, []);
  // ComponentDidUpdate
  useEffect(() => {
    // THIS WILL RUN THE FIRST TIME AND EVERY TIME THE COUNT GET UPDATED!!
    console.log('ComponentDidUpdate', count);
  }, [count]);
  useEffect(() => {
    // THIS WILL RUN THE FIRST TIME AND EVERY TIME THE isBool GET UPDATED!!
    console.log('ComponentDidUpdate', isBool);
  }, [isBool]);

  useEffect(() => {
    // THIS WILL RUN THE FIRST TIME AND EVERY TIME THE COUNT and/or isBool GET UPDATED!!
    console.log('ComponentDidUpdate', isBool, count);
  }, [count, isBool]);

  // ComponentWillUnmount
  useEffect(() => {
    // THIS WILL RUN THE BEFORE THE COMPONENT IS REMOVED FROM DOM!!
    return () => {
      console.log('ComponentWillUnmount');
    };
  }, []);
  const handleClick = () => {
    setCount(count => count + 1); // this is async function
    setIsBool(!isBool);
    console.log('THIS WILL ALWAYS GIVE YOU THE OLD STATE VALUE', count);
  };

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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
