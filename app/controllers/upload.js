const fs = require('fs');

const multer = require('multer')

const uploadDirectory = './../data';

// Set up storage for uploaded files
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, 'data/');
   },
   filename: (req, file, cb) => {
      // console.log(req);
      cb(null, Date.now() + '-' + file.originalname);
   }
});

// Create the multer instance
const upload = multer({ storage: storage });

module.exports = upload;