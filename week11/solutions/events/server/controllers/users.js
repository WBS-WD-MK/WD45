const User = require('../models/user');

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const { active } = req.query;
    let isActive = true;

    if (active === 'false') {
      isActive = false;
    }
    const users = await User.find({ isActive });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUserById = async (req, res) => {
  try {
    // const user = await User.findById(req.params.id)
    const users = await User.find({ _id: req.params.id });
    if (users.length === 0) {
      res.status(404).json({ message: 'User Not Found' });
    }
    res.json(users[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateUser = async (req, res) => {
  try {
    // const deletedUser = await User.findByIdAndUpdate(req.params.id);
    const updatedUser = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    if (!updatedUser) {
      res.status(404).json({ message: 'User Not Found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    // const deletedUser = await User.findByIdAndDelete(req.params.id);
    const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
    if (!deletedUser) {
      res.status(404).json({ message: 'User Not Found' });
    }
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
