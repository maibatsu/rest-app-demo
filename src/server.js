const express = require("express");
const API = express();

API.get("/", (req, res) => {
  res.send("api init");
});

API.listen(4000, () => console.log("API on port: 4000"));
