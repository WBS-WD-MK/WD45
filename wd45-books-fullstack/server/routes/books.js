const express = require('express');
const { authenticate } = require('../middleware/auth');
const booksRouter = express.Router();
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require('../controllers/books');
booksRouter.use(authenticate);
booksRouter.post('/', createBook);
booksRouter.get('/', getAllBooks);
booksRouter.get('/:id', getBookById);
booksRouter.put('/:id', updateBook);
booksRouter.delete('/:id', deleteBook);
module.exports = booksRouter;
