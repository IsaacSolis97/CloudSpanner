var express = require('express');
const indexController = require('../controllers/index.controller.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/passenger");
});

router.get('/new', function(req, res, next) {
  res.render('new');
});

/*
 * POST
 */
router.post('/new', indexController.new);

module.exports = router;
