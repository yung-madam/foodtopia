// External dependencies
const express = require('express');
const router = express.Router();

// Internal dependencies
const Restaurant = require('../model/restaurant');

/**
 * GET /api/restaurants
 */
router.get('/restaurants', (req, res, next) => {
    console.log(restaurantSchema);
    const restaurants = Restaurant.find({name: "neco"});
    res.send(restaurants);
});

/**
 * POST /api/restaurants
 */
router.post('/restaurants', (req, res) => {
    res.send('api vec');
});

module.exports = router;