var express = require('express');
var proj4 = require('proj4');
var router = express.Router();

/* GET home page. */
router.get('/', function({ query: { lat, lon } }, res, next) {
  var fromCRS = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';
  var to = '+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
  var { USERNAME, PASS, APIKEY } = process.env;

  var coord = [
    parseFloat(lon),
    parseFloat(lat),
  ];

  var query = proj4(fromCRS, to, coord);

  res.render('index', { query, USERNAME, PASS, APIKEY });
});

module.exports = router;
