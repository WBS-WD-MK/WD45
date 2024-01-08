const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const path = require('path');
const upload = require('./utils/fileUpload');
app.use(express.static('public')); // tell express where to look for static files
app.get('/', (req, res) => {
  console.log(__dirname);
  // const filePath = path.join(__dirname, 'public', 'index.html');
  // res.sendFile(filePath);
  res.sendFile('index.html');
});

app.post('/upload-profile-pic', upload.single('profile_pic'), (req, res) => {
  console.log(req.file);

  res.send(`<div><img src='/${req.file.filename}'/></div>`);
});
app.post('/upload-cat-pics', upload.array('cat_pics'), (req, res) => {
  console.log(req.files);

  res.send(``);
});
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
