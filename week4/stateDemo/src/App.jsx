import { useState } from 'react';
import BooksForm from './components/BooksForm';
import Books from './components/Books';

const App = () => {
  const [books, setBooks] = useState([]);
  return (
    <>
      <BooksForm books={books} setBooks={setBooks} />
      <Books books={books} setBooks={setBooks} />
    </>
  );
};

export default App;
