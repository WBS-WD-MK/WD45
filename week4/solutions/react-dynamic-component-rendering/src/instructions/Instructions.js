import { useState } from "react";
import ExampleOutcome from "./ExampleOutcome";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";
import Bonus from "./Bonus";

const Instructions = () => {
  const [activeComponent, setActiveComponent] = useState(1);

  const componentMap = {
    1: <Level1 />,
    2: <Level2 />,
    3: <Level3 />,
    4: <Bonus />
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
        <h1>React Dynamic Component Rendering</h1>
        <p>
          Data used in more complex applications also has more complex
          structures - often in the form of an <b>array of objects</b>, each
          representing an user, a product, or any other kind of data relevant to
          your application. <b>Generating JSX dynamically</b> enables
          scalability and modularity in your applications.
        </p>
        <b>Your goal</b>: Render components iteratively and hand down data with
        props.
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
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
        >
          The .map() method
        </a>
        <a
          className="link"
          rel="noopener noreferrer"
          target="_blank"
          href="https://react.dev/learn/rendering-lists"
        >
          Rendering elements iteratively
        </a>
        <a
          className="link"
          rel="noopener noreferrer"
          target="_blank"
          href="https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key"
        >
          The key property
        </a>
        <a
          className="link"
          rel="noopener noreferrer"
          target="_blank"
          href="https://dmitripavlutin.com/javascript-object-destructuring/#1-the-need-for-object-destructuring"
        >
          Object destructuring
        </a>
        <a
          className="link"
          rel="noopener noreferrer"
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#description"
        >
          Rest parameters
        </a>
      </div>
    </div>
  );
};

export default Instructions;
