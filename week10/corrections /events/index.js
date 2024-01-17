require('dotenv/config');
const express = require('express');

const connectDB = require('./config/db');
const usersRouter = require('./routes/users');
const eventsRouter = require('./routes/events');
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use('/api/users', usersRouter);
app.use('/api/events', eventsRouter);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
});
