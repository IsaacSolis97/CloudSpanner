var express = require('express');
const bookingController = require('../controllers/booking.controller.js');
var router = express.Router();

/*
 * GET
 */
router.get('/', bookingController.get);
/**
 * GET by id
 */
router.get('/:id', bookingController.show);
/**
 * PUT
 */
router.put('/:id', bookingController.update);
/**
 * DELETE
 */
router.delete('/:id', bookingController.delete);
module.exports = router;
