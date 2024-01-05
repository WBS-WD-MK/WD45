const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const secure = (req, res, next) => {
  const {token} = req.params;
  if (token && token.length > 3) {
    next();
  } else {
    res.status(403).send('forbidden');
  }
};

app.get('/', (req, res) => {
  res.send('Hello world');
});
app.get('/verify/:token', secure, (req, res) => {
  res.send('Hello world');
});
app.listen(PORT, () => {
  console.log(`server is up on ${PORT}`);
});
