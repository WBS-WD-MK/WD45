import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function NewEvent(props) {
  const navigate = useNavigate();
  const [authorInputList, setAuthorInputList] = useState(['']);

  const [event, setEvent] = useState({
    name: '',
    description: '',
    location: '',
    organizer: '',
    image: '',
  });

  const submitHandler = async e => {
    e.preventDefault();
    const { name, description, location, organizer, image } = event;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('location', location);
    formData.append('organizer', organizer);
    formData.append('image', image);
  
    axios
      .post(`${import.meta.env.VITE_SERVER_BASE_URL}/api/events`, formData)
      .then(res => navigate('/'))
      .catch(e => console.log(e));
  };

  const changeHandler = e => {
    if (e.target.name === 'image') {
      setEvent({ ...event, image: e.target.files[0] });
    } else {
      setEvent({ ...event, [e.target.name]: e.target.value });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="">Name</label>
      <input type="text" name="name" value={event.name} onChange={changeHandler} />
      <label htmlFor="">Description</label>
      <input type="text" name="description" value={event.description} onChange={changeHandler} />
      <label htmlFor="">Location</label>
      <input type="text" name="location" value={event.location} onChange={changeHandler} />
      <label htmlFor="">Organizer</label>
      <input type="text" name="organizer" value={event.organizer} onChange={changeHandler} />
      <label htmlFor="">Image </label>
      <input type="file" name="image" onChange={changeHandler} accept="image/*" />
      <button>Add Event</button>
    </form>
  );
}

export default NewEvent;
