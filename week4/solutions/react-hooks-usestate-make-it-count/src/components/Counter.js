import React from 'react';

const Counter = ({ count, index, increment, decrement }) => {
  return (
    <div>
      <button onClick={() => decrement(index)}>-</button>
      <span>{count}</span>
      <button onClick={() => increment(index)}>+</button>
    </div>
  );
};

export default Counter;
