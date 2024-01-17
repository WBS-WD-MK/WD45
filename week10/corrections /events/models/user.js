const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is Required!'] },
    email: { type: String, unique: true, required: [true, 'Email is Required!'] },
    age: { type: Number, min: 18 },
    phoneNumber: { type: String, unique: true, required: [true, 'Phone number is Required!'] },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);
const model = mongoose.model('User', bookSchema);
module.exports = model;
