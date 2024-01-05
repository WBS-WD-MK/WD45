const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const secure = (req, res, next) => {
  const token = req.query.token;
  if (token) {
    next();
  } else {
    res.status(403).send('forbidden');
  }
};
app.use(secure);

app.get('/', (req, res) => {
  res.send('Hello world');
});
app.post('/', (req, res) => {
  res.send('Hello world');
});
app.listen(PORT, () => {
  console.log(`server is up on ${PORT}`);
});
