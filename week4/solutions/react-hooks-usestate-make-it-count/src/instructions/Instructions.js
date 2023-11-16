import { useState } from 'react';
import ExampleOutcome from './ExampleOutcome';
import Level1 from './Level1';
import Level2 from './Level2';

const Instructions = () => {
  const [activeComponent, setActiveComponent] = useState(1);

  const handleNext = () => {
    setActiveComponent((prevComponent) =>
      prevComponent < 2 ? prevComponent + 1 : prevComponent
    );
  };

  const handleBack = () => {
    setActiveComponent((prevComponent) =>
      prevComponent > 1 ? prevComponent - 1 : prevComponent
    );
  };

  const componentMap = {
    1: <Level1 />,
    2: <Level2 />
  };

  return (
    <div className="block">
      <div className="goal">
        <h1>Make It Count</h1>
        <p>
          In React, content rendered on the screen can only be changed
          programmatically with the use of <b>State</b>. It enables React
          applications to update values on the screen, toggle JSX elements to
          display with conditional rendering, and can be used as triggers for
          additional effects.
        </p>
        <b>Your goal</b>: Display 3 functioning counters on your page.
        <ExampleOutcome />
      </div>
      <h3>Level {activeComponent} / 2</h3>
      <div>
        <button onClick={handleBack} hidden={activeComponent === 1}>
          {`< Level ${activeComponent - 1}`}
        </button>
        <button onClick={handleNext} hidden={activeComponent === 2}>
          {`Level ${activeComponent + 1} >`}
        </button>
      </div>
      {componentMap[activeComponent]}
      <div className="links">
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://react.dev/learn/state-a-components-memory"
        >
          What is State?
        </a>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://react.dev/reference/react/useState"
        >
          What is useState?
        </a>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://react.dev/learn/responding-to-events"
        >
          How to handle events?
        </a>
      </div>
    </div>
  );
};

export default Instructions;
