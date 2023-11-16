import { useState } from "react";
import ExampleOutcome from "./ExampleOutcome";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";
import Level4 from "./Level4";

const Instructions = () => {
  const [activeComponent, setActiveComponent] = useState(1);

  const componentMap = {
    1: <Level1 />,
    2: <Level2 />,
    3: <Level3 />,
    4: <Level4 />
  };

  const handleNext = () => {
    setActiveComponent((prevComponent) =>
      prevComponent < 4 ? prevComponent + 1 : prevComponent
    );
  };

  const handleBack = () => {
    setActiveComponent((prevComponent) =>
      prevComponent > 1 ? prevComponent - 1 : prevComponent
    );
  };
  return (
    <div className="block">
      <div className="goal">
        <h1>The Candle</h1>
        <p>
          The <b>useEffect</b> hook enables a functional component to tap into
          the
          <b>lifecycle</b> of a component to trigger additional effects in each
          state of the lifecycle, upon <b>mount</b>, <b>update</b>, and{" "}
          <b>unmount</b>. For that, you have a box of candles to keep you out of
          the dark. However, without lifecycles, those candles will burn
          forever; which is not likely to happen in the real world.
        </p>

        <p>
          <b>Your goal</b>: Make the candle burn to the end with the useState
          and useEffect hooks.
        </p>
        <ExampleOutcome />
      </div>
      <h3>
        Level {activeComponent} / {Object.keys(componentMap).length}
      </h3>
      <div className="levels example">
        <button onClick={handleBack} hidden={activeComponent === 1}>
          {`< Level ${activeComponent - 1}`}
        </button>
        <button
          onClick={handleNext}
          hidden={activeComponent === Object.keys(componentMap).length}
        >
          {`Level ${activeComponent + 1} >`}
        </button>
      </div>
      {componentMap[activeComponent]}

      <div className="buttons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://react.dev/reference/react/useEffect"
        >
          useEffect
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://react.dev/learn#adding-styles"
        >
          Style
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://react.dev/learn/conditional-rendering"
        >
          Conditional rendering with logical &&
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dev.to/zhiyueyi/how-to-create-a-simple-react-countdown-timer-4mc3"
        >
          React Countdown Timer
        </a>
      </div>
    </div>
  );
};

export default Instructions;
