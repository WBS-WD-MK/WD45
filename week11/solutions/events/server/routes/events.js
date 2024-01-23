const express = require('express');
const router = express.Router();
const {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  joinEvent,
} = require('../controllers/events');
const upload = require('../config/multer');
router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.post('/', upload.single('image'), createEvent);
router.put('/:id', updateEvent);
router.patch('/:id/join', joinEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
