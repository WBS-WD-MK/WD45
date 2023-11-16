import { useState } from "react";
import exampleOutcome from "./exampleOutcome.gif";
import exampleOutcome2 from "./exampleOutcome2.png";

const ExampleOutcome = () => {
  const [showExample, setShowExample] = useState(false);

  return (
    <div>
      <button onClick={() => setShowExample((prev) => !prev)}>
        {showExample ? "Hide Example" : "See example outcome"}
      </button>
      {showExample && (
        <div>
          <img src={exampleOutcome} alt="Example outcome" />
          <img src={exampleOutcome2} alt="Example outcome2" />
        </div>
      )}
    </div>
  );
};

export default ExampleOutcome;
