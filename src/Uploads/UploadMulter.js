const express = require('express')
const multer = require('multer')

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './');
  },
  filename: (req, file, cb) => {
    const { name, ext } = path.parse(file.originalname);

    cb(null, `${name}${ext}`);
  }
});

const upload = multer({ storage });

app.use(express.static("public"));

app.post('/', upload.single("file"), (req, res) => {

  res.send('Upload feito com sucesso.');

});

app.listen(3001);
