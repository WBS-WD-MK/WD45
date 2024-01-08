import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    year: 0,
  });
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/books/${id}`)
      .then(res => setBook(res.data))
      .catch(e => console.error(e));
  }, []);
  const handleChange = e => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/books/${id}`, book)
      .then(res => navigate('/'))
      .catch(e => console.error(e));
  };

  return (
    <div>
      <h2>Update Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            value={book.title}
            placeholder="enter book title"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Author</label>
          <input
            type="text"
            name="author"
            value={book.author}
            placeholder="enter book author"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Year</label>
          <input
            type="number"
            name="year"
            value={book.year}
            placeholder="enter book year"
            onChange={handleChange}
          />
        </div>
        <button>Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;
