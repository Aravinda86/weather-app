// const http = require("http");

// const server = http.createServer(function (req, resp) {
//   resp.setHeader("Content-Type", "text/plain");
//   resp.statusCode = 200;
//   resp.end("hello word");
// });

// server.listen(2000, () => {
//   console.log("server started");
//  });

const express = require("express");
// node-fetch
const app = express();
app.get("/", (req, res) => {
  res.status(200).send("123456333333333344444");
});

app.get("/weather", (req, res) => {
  res.status(200).send("Hello Waeather App1");
});

app.post("/weather", (req, res) => {
  res.status(200).send("Hello Waeather App2");
  console.log("hello");
  //   // call the open weather api
  //   // promise
  //   // resp.send(value)
});
app.listen(2000, () => {
  console.log("Server Started");
});
