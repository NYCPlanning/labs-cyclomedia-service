const express = require('express');
const proj4 = require('proj4');

const router = express.Router();

/* GET home page. */
router.get('/view/:lon/:lat', ({ params: { lat, lon } }, res) => {
  const fromCRS = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';
  const to = '+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
  const { USERNAME, PASS, APIKEY } = process.env;

  const coord = [
    parseFloat(lon),
    parseFloat(lat),
  ];

  const query = (lon && lat) ? proj4(fromCRS, to, coord) : '';

  res.render('index', {
    query, USERNAME, PASS, APIKEY,
  });
});

module.exports = router;
