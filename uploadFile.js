// //Upload File in Node Js//
// //--->>for uploading file in Nodejs , we use Multer NPM Package.
// const express = require("express");
// const multer = require("multer");
// const app = express();

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads");
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + "-" + Date.now() + ".png");
//     },
//   }),
// }).single("user_file");

// app.post("/upload", upload, (req, res) => {
//   res.send("File Uploaded");
// });

// app.listen(5000);
