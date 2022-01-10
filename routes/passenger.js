var express = require('express');
const passengerController = require('../controllers/passenger.controller.js');
var router = express.Router();

/*
 * GET
 */
router.get('/', passengerController.get);

router.get('/:id', passengerController.show);

/*
 * PUT
 */
router.post('/:id', passengerController.update);

module.exports = router;
