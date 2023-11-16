import { useState } from "react";
import exampleOutcome from "./exampleOutcome.png";

const ExampleOutcome = () => {
  const [showExample, setShowExample] = useState(false);

  return (
    <div>
      <button onClick={() => setShowExample((prev) => !prev)}>
        {showExample ? "Hide Example" : "See example outcome"}
      </button>
      {showExample && (
        <div className="imgWrapper">
          <img
            className="exampleImg"
            src={exampleOutcome}
            alt="Example outcome"
          />
        </div>
      )}
    </div>
  );
};

export default ExampleOutcome;
