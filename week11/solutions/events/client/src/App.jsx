import { useState } from 'react';

import './App.css';
import NewEvent from './components/NewEvent';
import EventDetails from './components/EventDetails';
import { Routes, Route } from 'react-router-dom';
import Events from './components/Events';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/events/new" element={<NewEvent />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
