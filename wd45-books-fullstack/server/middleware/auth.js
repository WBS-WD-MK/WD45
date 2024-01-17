const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
const authenticate = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (accessToken) {
      const user = await jwt.verify(accessToken, SECRET);
      req.user = user;
      next();
    } else {
      res.status(403).json({ message: 'Forbidden' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = authenticate;
