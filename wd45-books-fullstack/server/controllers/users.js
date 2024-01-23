const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
const dayInMilliseconds = 24 * 60 * 60 * 1000;
const register = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const userPayload = {
      _id: newUser._id,
      email: newUser.email,
      username: newUser.username,
      role: newUser.role,
    };
    const userToken = jwt.sign(userPayload, SECRET);
    res
      .status(201)
      .cookie('accessToken', userToken, {
        httpOnly: true,
        expires: new Date(Date.now() + dayInMilliseconds),
      })
      .json({ message: 'user created!', user: userPayload });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: 'Invalid Login Attempt' });
    } else {
      const userDoc = await User.findOne({ email });
      console.log('USER RECORD', userDoc.email, userDoc.password, password);
      if (!userDoc) {
        res.status(400).json({ message: 'Invalid Login Attempt' });
      } else {
        // user doc with email is found!
        const isPasswordValid = await bcrypt.compare(password, userDoc.password);
        if (!isPasswordValid) {
          res.status(400).json({ message: 'Invalid Login Attempt' });
        } else {
          const userPayload = {
            _id: userDoc._id,
            email: userDoc.email,
            username: userDoc.username,
            role: userDoc.role,
          };
          const userToken = jwt.sign(userPayload, SECRET);
          res
            .cookie('accessToken', userToken, {
              httpOnly: true,
              expires: new Date(Date.now() + dayInMilliseconds),
            })
            .json({ message: 'user loggedin!', user: userPayload });
        }
      }
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const logout = (req, res) => {
  res.clearCookie('accessToken');
  res.json({ message: 'You have Successfully logged out!' });
};
const getLoggedInUser = async (req, res) => {
  try {
    // req.user is created in the auth middleware
    const user = await User.findOne({ _id: req.user._id }).select('-password');
    res.json({ user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  logout,
  getLoggedInUser,
};
