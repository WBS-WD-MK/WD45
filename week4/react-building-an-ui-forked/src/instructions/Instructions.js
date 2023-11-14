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
        <h1>React: Building an UI</h1>
        <p>
          React is a library for rendering <b>user interfaces</b> (UI). It does
          so by taking over the rendering of the page with JavaScript. In
          addition, with React you are able to split the UI into{" "}
          <b>Components</b>, which allows greater flexibility and scalability in
          your applications. They can be as simple as a button, or as large as
          an entire page. Components are therefore the building blocks that
          compose an UI.
        </p>
        <b>Your goal</b>: Create and nest React Components to display your UI.
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
          href="https://react.dev/learn/describing-the-ui"
        >
          Describing the UI
        </a>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://react.dev/learn/your-first-component"
        >
          React Components
        </a>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://react.dev/learn/importing-and-exporting-components"
        >
          Modules: Importing and Exporting Components
        </a>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://react.dev/learn/writing-markup-with-jsx"
        >
          Writing Markup with JSX
        </a>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://react.dev/learn/javascript-in-jsx-with-curly-braces"
        >
          JavaScript in JSX with Curly Braces
        </a>
      </div>
    </div>
  );
};

export default Instructions;
