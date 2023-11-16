import Counter from './components/Counter';
import Instructions from './instructions/Instructions';
import './styles.css';
import { useState } from 'react';
export default function App() {
  const [counters, setCounters] = useState([0, 0, 0]);
  const increment = index => {
    const newCounts = [...counters];
    newCounts[index] += 1;
    setCounters(newCounts);
  };
  const decrement = index => {
    const newCounts = [...counters];
    newCounts[index] -= 1;
    setCounters(newCounts);
  };
  const incrementAll = () => {
    setCounters(counters.map(count => count + 1));
  };
  const decrementAll = () => {
    setCounters(counters.map(count => count - 1));
  };
  return (
    <div className="App">
      <Instructions />
      <div className="block">
        <button onClick={incrementAll}>Increment all</button>
        <button onClick={decrementAll}>Decrement all</button>
        {counters.map((count, index) => (
          <Counter
            key={index}
            count={count}
            index={index}
            increment={increment}
            decrement={decrement}
            // increment={() => increment(index)}
            // decrement={() => decrement(index)}
          />
        ))}
      </div>
    </div>
  );
}
