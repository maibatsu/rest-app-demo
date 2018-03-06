import express from 'express';
import path from 'path';
import { listGet } from './controllers/list_controller';
import { amenitiesGet } from './controllers/amenities_controller';

const API = express();
const port: number = 4000;

API.set('port', port);
API.use(express.static('static'));

API.get('/', (req, res) => {
  res.sendFile(`/API/index.html`);
});

API.get('/api/getList', listGet);

API.get('/api/getAmenities', amenitiesGet);

API.listen(4000, () => console.log(`API on port: ${port}`));
