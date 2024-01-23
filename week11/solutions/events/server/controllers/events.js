const Event = require('../models/event');

const createEvent = async (req, res) => {
  try {
    console.log('MULTER FILE??', req.file.path);
    const newEvent = await Event.create({ ...req.body, image: req.file.path });
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getEventById = async (req, res) => {
  try {
    // const event = await Event.findById(req.params.id)
    const events = await Event.find({ _id: req.params.id })
      .populate({ path: 'organizer' })
      .populate({ path: 'attendees', select: '_id name email phoneNumber' });
    if (events.length === 0) {
      res.status(404).json({ message: 'Event Not Found' });
    }
    res.json(events[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateEvent = async (req, res) => {
  try {
    // const deletedEvent = await Event.findByIdAndUpdate(req.params.id);
    const updatedEvent = await Event.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    if (!updatedEvent) {
      res.status(404).json({ message: 'Event Not Found' });
    }
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const joinEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { attendees: req.body.userId } },
      {
        new: true,
      },
    );
    if (!updatedEvent) {
      res.status(404).json({ message: 'Event Not Found' });
    }
    res.json(updatedEvent);
    // const event = await Event.findById(id);
    // event.attendees = [...event.attendees, userId];
    // event.save();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteEvent = async (req, res) => {
  try {
    // const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    const deletedEvent = await Event.findOneAndDelete({ _id: req.params.id });
    if (!deletedEvent) {
      res.status(404).json({ message: 'Event Not Found' });
    }
    res.json(deletedEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  joinEvent,
  deleteEvent,
};
