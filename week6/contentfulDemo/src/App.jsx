import { useState, useEffect } from 'react';

import './App.css';
import { createClient } from 'contentful';
import RichText from './components/RichText';
function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const SPACE_ID = import.meta.env.VITE_SPACE_ID;
    const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
    const ENVIRONMENT_NAME = import.meta.env.VITE_ENVIRONMENT_NAME;

    const client = createClient({
      space: SPACE_ID,
      environment: ENVIRONMENT_NAME, // defaults to 'master' if not set
      accessToken: ACCESS_TOKEN,
    });
    client
      .getEntries()
      .then(response => setBooks(response.items))
      .catch(console.error);
  }, []);

  return (
    <>
      {books.map(book => (
        <div key={book.sys.id}>
          <h2>{book.fields.title}</h2>
          <p>{book.fields.author}</p>
          <img src={book.fields.image.fields.file.url} alt="" />
          <br />
          {book.fields.images.map(image => (
            <img key={image.sys.id} src={image.fields.file.url} alt="" />
          ))}
          <hr />
          <RichText document={book.fields.blog} />
        </div>
      ))}
    </>
  );
}

export default App;
