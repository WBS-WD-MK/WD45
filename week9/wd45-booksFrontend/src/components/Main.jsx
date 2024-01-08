import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Books from './Books';
import NewBook from './NewBook';
import BookDetails from './BookDetails';
import UpdateBook from './UpdateBook';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books/new" element={<NewBook />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/books/:id/update" element={<UpdateBook />} />
      </Routes>
    </main>
  );
};

export default Main;
