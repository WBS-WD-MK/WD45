const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is Required!'] },
    description: { type: String, required: [true, 'Description is Required!'] },
    location: { type: String, required: [true, 'Location is Required!'] },
    organizer: { type: mongoose.Types.ObjectId, ref: 'User' },
    attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true },
);
const model = mongoose.model('Event', bookSchema);
module.exports = model;
