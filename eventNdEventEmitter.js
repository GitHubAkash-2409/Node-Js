// /////////Events And Event Emitter in NodeJs///////////
// const express = require("express");
// const eventEmitter = require("events");
// const { EventEmitter } = require("stream");
// const app = express();
// const event = new EventEmitter();

// let count = 0;

// event.on("countAPI", () => {
//   count++;
//   console.log(count);
//   console.log("event called");
// });

// app.get("/", (req, res) => {
//   res.send("api called");
//   event.emit("countAPI");
// });
// app.get("/search", (req, res) => {
//   res.send("api called");
//   event.emit("countAPI");
// });
// app.get("/update", (req, res) => {
//   res.send("api called");
//   event.emit("countAPI");
// });

// app.listen(5000);
