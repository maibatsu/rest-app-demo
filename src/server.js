const express = require("express");
const list_controller = require("./controllers/list_controller");
const amenities_controller = require("./controllers/amenities_controller");
const API = express();

API.get("/", (req, res) => {
  res.sendFile(`/API/index.html`);
});

API.get("/api/getList", list_controller.list_get);

API.get("/api/getAmenities", amenities_controller.amenities_get);

API.use(express.static("static"));
API.listen(4000, () => console.log("API on port: 4000"));
