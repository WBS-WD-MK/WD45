import { useState } from 'react';
import exampleOutcome from './exampleOutcome.gif';

const ExampleOutcome = () => {
  const [showExample, setShowExample] = useState(false);

  return (
    <div>
      <button onClick={() => setShowExample((prev) => !prev)}>
        {showExample ? 'Hide Example' : 'See example outcome'}
      </button>
      {showExample && (
        <div>
          <img src={exampleOutcome} alt="Example outcome" />
        </div>
      )}
    </div>
  );
};

export default ExampleOutcome;
