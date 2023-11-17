import { useState } from "react";
import exampleOutcome from "./exampleOutcome.png";

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
        <div>
          <img
            className="exampleImg"
            src={exampleOutcome}
            alt="Example outcome"
          />
          <p>
            The output is exactly the same! But your code is now more scalable
            and easier to handle and read!
          </p>
        </div>
      )}
    </div>
  );
};

export default ExampleOutcome;
