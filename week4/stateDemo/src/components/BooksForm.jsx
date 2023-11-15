import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const BooksForm = ({ books, setBooks }) => {
  // const [book, setBook] = useState({});
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (title && date) {
      const newBook = { id: uuidv4(), title, date, isRead: false };
      setBooks([newBook, ...books]);
      // e.target.reset(); this will not work!!!!!
      // setBook({});
      setTitle('');
      setDate('');
    }
  };
  // const handleChange = e => {
  //   setBook({ ...book, [e.target.name]: e.target.value });
  // };
  const handleTitleChange = e => {
    setTitle(e.target.value);
  };
  const handleDateChange = e => {
    setDate(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      {/* <input type="text" name="title" onChange={handleChange} value={book.title} /> */}
      <input type="text" name="title" onChange={handleTitleChange} value={title} />
      <label htmlFor="date">Date</label>
      {/* <input type="date" name="date" id="date" onChange={handleChange} value={book.date} /> */}
      <input type="date" name="date" id="date" onChange={handleDateChange} value={date} />
      <button>Add Book</button>
    </form>
  );
};

export default BooksForm;
