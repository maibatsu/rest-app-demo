const express = require("express");
const list = require("./db");
const API = express();

API.get("/", (req, res) => {
  res.send("api init");
});

API.get("/api/getList", (req, res) => {
  console.log(req);
  if (req.query.name === "jjj") res.send("u died");

  const options = {
    // http://localhost:4000/api/getList
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "GET, POST, PUT",
    // "Access-Control-Allow-Headers": "X-Custom-Header",
    "Content-Type": "application/json; charset=utf-8"
  };
  res.set(options);
  res.send(list);
});

// const staticOptions = {
//   extensions: ["jpeg", "jpg", "png"],
//   setHeaders: function(res, path, stat) {
//     res.set("Content-Type", "image/png,image/svg+xml,image/jpeg");
//   }
// };

API.use(express.static("static"));
API.listen(4000, () => console.log("API on port: 4000"));
