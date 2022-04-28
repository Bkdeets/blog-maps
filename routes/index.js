var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/main-map', function(req, res) {
  res.sendFile('public/components/MainMap/MainMap.html', { root: '.' });
});


module.exports = router;
