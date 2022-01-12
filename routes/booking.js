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
router.post('/update/:id1', bookingController.update);
/**
 * DELETE
 */
router.get('/delete/:id1/:id2', bookingController.delete);
module.exports = router;
