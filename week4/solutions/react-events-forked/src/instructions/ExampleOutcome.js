import { useState } from "react";
import exampleOutcome from "./exampleOutcome.gif";
import exampleOutcome2 from "./exampleOutcome2.gif";
import exampleOutcome3 from "./exampleOutcome3.gif";

const ExampleOutcome = () => {
  const [showExample, setShowExample] = useState(false);

  return (
    <div>
      <button
        className="example"
        onClick={() => setShowExample((prev) => !prev)}
      >
        {showExample ? "Hide Example" : "See example outcome"}
      </button>
      {showExample && (
        <div className="imgWrapper">
          <img src={exampleOutcome} alt="Example outcome" />
          <img src={exampleOutcome2} alt="Example outcome 2" />
          <img src={exampleOutcome3} alt="Example outcome 3" />
        </div>
      )}
    </div>
  );
};

export default ExampleOutcome;
