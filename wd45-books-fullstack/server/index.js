require('dotenv/config');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const booksRouter = require('./routes/books');
const authRouter = require('./routes/users');
const adminRouter = require('./routes/admin');
const PORT = process.env.PORT || 4000;
const app = express();
const { createServer } = require('node:http');
const server = createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const Book = require('./models/book');
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(cookieParser());
app.use(express.json());
// all routes should be registered after the global middlewares cors and express.json()
app.use('/api/books', booksRouter);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);
io.on('connection', socket => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('createBook', async payload => {
    try {
      const newBook = await Book.create({ ...payload });
      console.log('PAYLOAAAAD', payload);
      io.emit('bookCreated', newBook);
    } catch (error) {
      io.emit('bookCreationError', error);
    }
  });
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
});
// THE FOLLOWING BLOCK NEED TO BE AFTER ALL THE BACKEND ROUTES!!!!!!!!!!
if (process.env.NODE_ENV === 'production') {
  //*Set static folder up in production
  const buildPath = path.join(__dirname, '../client/dist');
  app.use(express.static(buildPath));

  app.get('*', (req, res) => res.sendFile(path.join(buildPath, 'index.html')));
}

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`server is up on port ${PORT}`);
  });
});
