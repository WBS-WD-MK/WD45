const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // create a unique file name by adding the current date/time and a random number
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    // get the file extension from the original file name
    const ext = path.extname(file.originalname);
    // combine the file field name, unique suffix, and file extension to create the final file name
    const fileName = file.fieldname + '-' + uniqueSuffix + ext;
    // pass the final file name to multer
    cb(null, fileName);
  },
});

const fileFilter = function (req, file, cb) {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
