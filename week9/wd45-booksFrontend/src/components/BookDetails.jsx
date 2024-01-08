import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/books/${id}`)
      .then(res => setBook(res.data))
      .catch(e => console.error(e));
  }, []);
  const handleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_BASE_URL}/api/books/${id}`)
      .then(res => navigate('/'))
      .catch(e => console.error(e));
  };
  return (
    <div>
      {book && (
        <>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Year: {book.year}</p>
          <Link to={`/books/${id}/update`}>Update Book</Link>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default BookDetails;
