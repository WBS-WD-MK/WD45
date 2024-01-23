import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/events`)
      .then(res => setEvents(res.data))
      .catch(e => console.log(e));
  }, []);

  return (
    <div>
      {events.map(event => (
        <p key={event._id}>
          <Link to={`/events/${event._id}`}>{event.name}</Link>
        </p>
      ))}
    </div>
  );
}

export default Events;
