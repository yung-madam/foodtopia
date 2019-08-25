// External dependencies
const express = require('express');
const router = express.Router();

// Internal dependencies
const Dish = require('../../model/dish');

/**
 * GET /api/dishes
 */
router.get('/dishes', (req, res, next) => {
    const dishes = Dish.find();
    res.send(dishes)
});

/**
 * POST /api/dishes
 */
router.post('/dishes', (req, res) => {
    res.send('api vec')
});

module.exports = router;
