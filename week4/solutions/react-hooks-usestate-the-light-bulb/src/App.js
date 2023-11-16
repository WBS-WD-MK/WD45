import Instructions from './instructions/Instructions';
import './styles.css';
import { useState, useEffect } from 'react';
export default function App() {
  const [isOn, setIsOn] = useState(false);
  const [count, setCount] = useState(0);
  const toggleLight = () => {
    setIsOn(!isOn);
  };
  useEffect(() => {
    isOn && setCount(count + 1);
    isOn &&
      setTimeout(() => {
        console.log('WHGAAASDASDWQAR');
        toggleLight();
      }, 5000);
  }, [isOn]);

  return (
    <div className="App">
      <Instructions />
      <div className={`${isOn ? 'block night' : 'block'}`}>
        {count > 10 ? (
          <p>daily electricity limit has been reached and they should light a candle instead</p>
        ) : (
          <button onClick={toggleLight}> {isOn ? 'Turn me off!' : 'Turn me on!'}</button>
        )}

        <div className="container">
          <div className="bulb-light">
            <div id="light" />

            <div id="bulb">
              <div className="bulb-top">
                <div className="reflection" />
              </div>
              <div className="bulb-middle-1" />
              <div className="bulb-middle-2" />
              <div className="bulb-middle-3" />
              <div className="bulb-bottom" />
            </div>

            <div id="base">
              <div className="screw-top" />
              <div className="screw-a" />
              <div className="screw-b" />
              <div className="screw-a" />
              <div className="screw-b" />
              <div className="screw-a" />
              <div className="screw-b" />
              <div className="screw-c" />
              <div className="screw-d" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
