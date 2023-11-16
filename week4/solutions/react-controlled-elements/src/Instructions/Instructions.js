import { useState } from "react";
import ExampleOutcome from "./ExampleOutcome";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Bonus from "./Bonus";

const Instructions = () => {
  const [activeComponent, setActiveComponent] = useState(1);

  const componentMap = {
    1: <Level1 />,
    2: <Level2 />,
    3: <Bonus />
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
        <h1>React Controlled Components</h1>
        <p>
          Some HTML elements have their current state controlled by the DOM,
          like inputs and forms. In React, these are known as uncontrolled
          components - their content is not managed by a <b>state</b>. However,
          React should be the source of truth when it comes to the state of your
          application. Controlling the values of such elements makes them{" "}
          <b>controlled components</b>.
        </p>
        <p>
          <b>Your goal</b>: Control a form and its elements with State, to
          create a to-do list.
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
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href=" https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/"
        >
          Controlled vs. Uncontrolled Components
        </a>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable"
        >
          Controlling inputs
        </a>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://surajsharma.net/blog/react-handle-radio-buttons"
        >
          Radio Buttons
        </a>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.agirl.codes/complete-guide-build-react-forms-with-usestate-hook"
        >
          Multiple inputs, one State
        </a>
      </div>
    </div>
  );
};

export default Instructions;
