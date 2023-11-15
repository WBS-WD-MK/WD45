import { useState } from 'react';

const Books = ({ books }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const handleDelete = () => {
    // filter
    //set state
  };
  const handleUpdate = () => {
    // map
    //set state
  };
  return (
    <section>
      {books.map(book => (
        <div key={book.id}>
          {isUpdate ? (
            <input value={book.title} />
          ) : (
            <h2 className={`card ${book.isRead ? 'book read' : 'not-read'}`}>{book.title}</h2>
          )}

          <p>{book.date}</p>
        </div>
      ))}
    </section>
  );
};

export default Books;
