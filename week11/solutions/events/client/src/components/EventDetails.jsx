import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/events/${id}`)
      .then(res => setEvent(res.data))
      .catch(e => console.log(e));
  }, [id]);
  const handleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_BASE_URL}/api/events/${id}`)
      .then(res => navigate('/'))
      .catch(e => console.log(e));
  };
  return (
    <div>
      <h2>{event?.name}</h2>
      <h3>{event?.organizer.name}</h3>

      <img src={event?.image} alt={event?.name} />

      <button onClick={handleDelete}>Delete Event</button>
    </div>
  );
}

export default EventDetails;
