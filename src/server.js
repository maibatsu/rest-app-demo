const express = require('express');
const apartments = require('./controllers/apartments_controller');
const amenities = require('./controllers/amenities_controller');

const API = express();
const port = 4000;

API.set('port', port);
API.use(express.static('static'));

API.get('/api/apartments', apartments.getApartments);

API.get('/api/getAmenities', amenities.amenitiesGet);

API.listen(4000, () => console.log(`API on port: ${port}`));
