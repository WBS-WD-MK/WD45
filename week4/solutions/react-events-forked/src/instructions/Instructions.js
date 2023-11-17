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
        <h1>React Events</h1>
        <p>
          As React manipulates the DOM, it also offers ways to add <b>events</b>{" "}
          on the DOM elements it generates. In React, events can be attached to
          elements in a similar way to native DOM events; however, they are
          called <b>Synthetic Events</b> since they are wrappers around the
          native event objects to account for differences accross browsers.
        </p>
        <b>Your goal</b>: Enable events on JSX elements.
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
          href="https://www.w3schools.com/js/js_htmldom_eventlistener.asp"
        >
          Event listeners
        </a>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://legacy.reactjs.org/docs/events.html"
        >
          Synthetic Events
        </a>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://react.dev/learn/responding-to-events#adding-event-handlers"
        >
          Handling events in React
        </a>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://react.dev/learn/javascript-in-jsx-with-curly-braces"
        >
          Js in Jsx
        </a>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://react.dev/learn/passing-props-to-a-component"
        >
          Passing props
        </a>
      </div>
    </div>
  );
};

export default Instructions;
