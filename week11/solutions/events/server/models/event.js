const mongoose = require('mongoose');
const cloudinary = require('../config/cloudinary');
const fs = require('fs');
const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is Required!'] },
    description: { type: String, required: [true, 'Description is Required!'] },
    location: { type: String, required: [true, 'Location is Required!'] },
    organizer: { type: mongoose.Types.ObjectId, ref: 'User' },
    attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    image: { type: String },
  },
  { timestamps: true },
);
eventSchema.pre('save', async function (next) {
  try {
    const options = {
      public_id: this._id,
      folder: process.env.CLOUDINARY_BOOKS_FOLDER_NAME,
    };
    const imagePath = this.image;
    const res = await cloudinary.uploader.upload(imagePath, options);
    this.image = res.secure_url;
    fs.unlinkSync(imagePath);
    next();
  } catch (e) {
    next(e.message);
  }
});

const model = mongoose.model('Event', eventSchema);
module.exports = model;
