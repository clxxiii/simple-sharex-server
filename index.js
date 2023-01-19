const express = require("express");
const fileUpload = require("express-fileupload");
const mime = require("mime-types");
const fs = require("fs");
require("dotenv").config();

const app = express();

const {
  STRING_LENGTH: fileNameLength,
  HOSTNAME: hostname,
  SECRET: secret,
  PORT: port,
} = process.env;

app.use(fileUpload());
app.use(express.static("files"));

app.post("/upload", (req, res) => {
  const recieved = req.body.secret;

  if (secret != recieved) {
    res.status(403).end();
    return;
  }

  const file = req.files.file;
  const type = mime.extension(file.mimetype);
  let string = random(fileNameLength);

  while (fs.existsSync(`files/${string}.${type}`)) {
    string = random(fileNameLength);
  }

  fs.writeFileSync(`files/${string}.${type}`, file.data);
  console.log(`Uploaded ${hostname}/${string}.${type}`);
  res.status(200).send(`${hostname}/${string}.${type}`);
});

app.listen(port);

const random = (n) => {
  const validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let string = "";
  for (let i = 0; i < n; i++) {
    string += validChars.charAt(Math.floor(Math.random() * validChars.length));
  }
  return string;
};
