import { useState } from 'react';
import ExampleOutcome from './ExampleOutcome';
import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';

const Instructions = () => {
  const [activeComponent, setActiveComponent] = useState(1);

  const handleNext = () => {
    setActiveComponent((prevComponent) =>
      prevComponent < 3 ? prevComponent + 1 : prevComponent
    );
  };

  const handleBack = () => {
    setActiveComponent((prevComponent) =>
      prevComponent > 1 ? prevComponent - 1 : prevComponent
    );
  };

  const componentMap = {
    1: <Level1 />,
    2: <Level2 />,
    3: <Level3 />
  };

  return (
    <div className="block">
      <div className="goal">
        <h1>React Props</h1>
        <p>
          When nesting components, often you will need to pass data to other
          components down the component tree. These are commonly known as{' '}
          <b>props</b>, and they enable a component to receive data from its
          parents and display, and even pass further down to its own child
          components.
        </p>
        <b>Your goal</b>: Render three components and pass different types of
        props to each of them.
        <ExampleOutcome />
      </div>
      <h3>Level {activeComponent} / 3</h3>
      <div>
        <button onClick={handleBack} hidden={activeComponent === 1}>
          {`< Level ${activeComponent - 1}`}
        </button>
        <button onClick={handleNext} hidden={activeComponent === 3}>
          {`Level ${activeComponent + 1} >`}
        </button>
      </div>
      {componentMap[activeComponent]}
      <div className="links">
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://react.dev/learn/your-first-component"
        >
          How to create a component?
        </a>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href=" https://react.dev/learn/passing-props-to-a-component"
        >
          How to pass props?
        </a>
      </div>
    </div>
  );
};

export default Instructions;
