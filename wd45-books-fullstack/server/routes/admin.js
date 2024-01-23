const express = require('express');
const { authenticate, authorize } = require('../middleware/auth');
const adminRouter = express.Router();

adminRouter.use(authenticate);
adminRouter.use(authorize('admin'));
adminRouter.get('/dashboard', (req, res) => {
  console.log('ADMIN DASHBOARD!!!');
  res.json({ message: 'done' });
});
module.exports = adminRouter;
