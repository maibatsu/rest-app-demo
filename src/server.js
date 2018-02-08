const express = require("express");
const list = require("./db");
const API = express();

API.get("/", (req, res) => {
  res.send("api init");
});

API.get("/api/getList", (req, res) => {
  const options = {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "GET, POST, PUT",
    "Content-Type": "application/json; charset=utf-8"
  };
  res.set(options);
  res.send(list);
});

API.use(express.static("static"));
API.listen(4000, () => console.log("API on port: 4000"));
