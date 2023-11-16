import { useState } from "react";
import ExampleOutcome from "./ExampleOutcome";
import Level1 from "./Level1";
import Level2 from "./Level2";

const Instructions = () => {
  const [activeComponent, setActiveComponent] = useState(1);

  const componentMap = {
    1: <Level1 />,
    2: <Level2 />
  };

  const handleNext = () => {
    setActiveComponent((prevComponent) =>
      prevComponent < Object.keys(componentMap).length
        ? prevComponent + 1
        : prevComponent
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
        <h1>React Conditional Rendering</h1>
        <p>
          Often, many elements in our UI are only meant to render under specific
          conditions, and elements and components can be programmatically
          displayed or not. This is known as <b>conditional rendering</b>. And
          as we know, secret santa gifts can be very random, and we might
          receive what we ask for, or something completely else!
        </p>
        <b>Your goal</b>: Display elements and components conditionally based on
        values.
        <ExampleOutcome />
      </div>
      <h3>
        Level {activeComponent} / {Object.keys(componentMap).length}
      </h3>
      <div>
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
      <div className="linkWrapper">
        <a
          className="link"
          rel="noopener noreferrer"
          target="_blank"
          href="https://react.dev/learn/conditional-rendering"
        >
          Conditionally rendering elements
        </a>

        <a
          className="link"
          rel="noopener noreferrer"
          target="_blank"
          href="https://refine.dev/blog/react-conditional-rendering/#using-ternary-operators"
        >
          Rendering with ternary operators
        </a>
        <a
          className="link"
          rel="noopener noreferrer"
          target="_blank"
          href="https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children"
        >
          Rendering JSX as children
        </a>
      </div>
    </div>
  );
};

export default Instructions;
