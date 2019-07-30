// External dependencies
const express = require('express');
const router = express.Router();

// Internal dependencies
const Restaurant = require('../model/restaurant');

/**
 * GET /api/restaurants
 */
router.get('/restaurants', (req, res, next) => {
    const restaurants = Restaurant.find();
    res.send(restaurants);
});

/**
 * POST /api/restaurants
 */
router.post('/restaurants', (req, res) => {
    res.send('api vec');
});

module.exports = router;