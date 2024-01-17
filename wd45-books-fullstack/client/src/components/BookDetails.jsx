import { useEffect, useState } from 'react';
import axios from '../axiosInstance';
import { Link, useParams, useNavigate } from 'react-router-dom';

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`/api/books/${id}`)
      .then(res => setBook(res.data))
      .catch(e => console.error(e));
  }, []);
  const handleDelete = () => {
    axios
      .delete(`/api/books/${id}`)
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
          <p> Added By: {book.createdBy.username}</p>
          <Link to={`/books/${id}/update`}>Update Book</Link>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default BookDetails;
