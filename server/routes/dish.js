// External dependencies
const express = require('express');
const router = express.Router();

// Internal dependencies
//const Dish = require('../model/dish');

/**
 * GET /api/dishes
 */
router.get('/dishes', (req, res, next) => {
    //const restaurants = Restaurant.findAll();
    res.send("dishes")
});

/**
 * POST /api/dishes
 */
router.post('/dishes', (req, res) => {
    res.send('api vec')
});

module.exports = router;