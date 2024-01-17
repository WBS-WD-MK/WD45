const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    // _id: auto created uuid
    title: { type: String, required: [true, 'Book Title is required!'] },
    author: { type: String, required: [true, 'Book Author is required!'] },
    year: { type: Number, default: 2000 },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Book', bookSchema);
