const list = require("../db/list");

exports.list_get = (req, res) => {
  const options = {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "GET, POST, PUT",
    "Content-Type": "application/json; charset=utf-8"
  };
  res.set(options);
  res.send(list);
};
