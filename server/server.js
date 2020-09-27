const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
// node-fetch
const app = express();
const API_KEY = "4d84430917405bc03c02c9597bc84f72";

//configure body-parser for express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Weather App - GET /");
});

app.get("/weather", (req, res) => {
  res.status(200).send("Weather App - GET /weather");
});

app.post("/weather", (req, res) => {
  console.log("Weather App - POST /weather - Express");

  // call the open weather api & promise
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city},${req.body.country}&appid=${API_KEY}`
    )
    .then((response) => {
      // handle success
      console.log("Weather App - POST /weather - Axios success");
      res.status(200).send(JSON.stringify(response.data));
    })
    .catch((error) => {
      // handle error
      console.log("Weather App - POST /weather - Axios error");
    });
});

app.listen(2000, () => {
  console.log("Weather App - Server Started");
});
