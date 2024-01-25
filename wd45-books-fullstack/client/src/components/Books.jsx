import axios from '../axiosInstance';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
const socket = io(import.meta.env.VITE_SERVER_BASE_URL, { transports: ['websocket'] });
const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/books`)
      .then(res => setBooks(res.data))
      .catch(e => console.error(e));

    socket.on('bookCreated', newBook => {
      setBooks(books => [newBook, ...books]);
    });
    return () => {
      //cleanup
      //disconnect
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            <Link to={`/books/${book._id}`}>
              {book.title} by {book.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
