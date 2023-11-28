import React from 'react';
import Eshop from './components/Eshop';
import Instructions from './components/Instructions';

const App = () => {
  return (
    <div className="container">
      {/* <Instructions /> */}
      <div className="block">
        <Eshop />
      </div>
    </div>
  );
};

export default App;
