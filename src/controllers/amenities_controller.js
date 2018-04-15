const amenities = require('../db/amenities');

exports.getAmenities = (req, res) => {
  const params = {
    'Content-Type': 'application/json; charset=utf-8'
  };
  res.set(params);
  res.send(amenities);
};
