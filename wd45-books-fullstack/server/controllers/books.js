const Book = require('../models/book');

const createBook = async (req, res) => {
  try {
    const newBook = await Book.create({ ...req.body, createdBy: req.user._id });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('createdBy', 'username email');
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    // const book = await Book.findById(id) //return book object
    const books = await Book.find({ _id: id }).populate('createdBy', 'username email'); //returns array
    if (books.length === 0) {
      res.status(404).json({ message: `Book with id ${id} Not Found` });
    } else {
      res.json(books[0]);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    // const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
    const updatedBook = await Book.findOneAndUpdate({ _id: id }, req.body, { new: true }); // { new: true } return the new updated doc in the db

    if (!updatedBook) {
      res.status(404).json({ message: `Book with id ${id} Not Found` });
    } else {
      res.json(updatedBook);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    // const deletedBook = await Book.findByIdAndDelete(id );
    const deletedBook = await Book.findOneAndDelete({ _id: id });

    if (!deletedBook) {
      res.status(404).json({ message: `Book with id ${id} Not Found` });
    } else {
      res.json(deletedBook);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
