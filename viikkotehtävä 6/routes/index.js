var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/hello', function(req, res) {
    res.send("GET ROUTE TOIMII!");
});


router.get('/test/:Vallaton', (req, res) => {
    res.send("Parametri on: " + req.params.Vallaton);
});


var express = require('express');
var router = express.Router();

/* GET / */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST / */
router.post('/', function(req, res) {
  console.log(req.body);      // näkyy terminaalissa
  res.send(req.body);         // palauttaa saman JSONin takaisin
});

module.exports = router;