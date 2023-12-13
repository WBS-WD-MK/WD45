const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const books = [
  { id: 1, title: 'Book1', author: 'me', year: 2000 },
  { id: 2, title: 'Book2', author: 'me', year: 2100 },
  { id: 3, title: 'Book3', author: 'me', year: 2200 },
];
// Body Parser
// YOU WILL NEED THIS FOR POST & PUT ALWAYS!!!!!
app.use(express.json());
///////////
app.get('/', (req, res) => {
  res.send('Hello World!!');
});
// GET ALL BOOKS
app.get('/api/books', (req, res) => {
  res.json(books);
});

// GET BOOK BY ID
app.get('/api/books/:id', (req, res) => {
  // const { id } = req.params;
  const id = req.params.id;
  // req.params is an object that will have values as strings
  const book = books.find(b => b.id === Number(id));
  if (!book) {
    res.status(404).json({ error: `Book with id ${id} Not Found` });
  }
  res.json(book);
});
// Create BOOK
app.post('/api/books', (req, res) => {
  const book = { ...req.body, id: books.length + 1 };
  books.push(book);
  res.status(201).json(book);
});
// Update Book
app.put('/api/books/:id', (req, res) => {
  // you will need to use req.body, req.params.id
  // check if we have the book then update
  // return the updated book
  res.json();
});
//DELETE BOOK
app.delete('/api/books/:id', (req, res) => {
  // you will need to use req.params.id
  // check if we have the book then
  // filter the array
  // return the deleted book
  res.json();
});
app.listen(PORT, () => {
  console.log(`SERVER is up on ${PORT}`);
});
