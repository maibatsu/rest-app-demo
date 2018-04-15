const apartments = require('../db/apartments');

exports.getApartments = (req, res) => {
  const params = {
    'Content-Type': 'application/json; charset=utf-8'
  };
  res.set(params);
  res.send(apartments);
};
