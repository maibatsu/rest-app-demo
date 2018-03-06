import express from "express";
import path from "path";
import { list_get } from "./controllers/list_controller";
import { amenities_get } from "./controllers/amenities_controller";

const API = express();
var port: number = 4000;

API.set("port", port);
API.use(express.static("static"));

API.get("/", (req, res) => {
  res.sendFile(`/API/index.html`);
});

API.get("/api/getList", list_get);

API.get("/api/getAmenities", amenities_get);

API.listen(4000, () => console.log(`API on port: ${port}`));
