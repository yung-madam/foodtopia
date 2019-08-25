// External dependencies
const express = require('express');
const router = express.Router();

// Internal dependencies
const Restaurant = require('../../model/restaurant');
const Dish = require('../../model/dish');

/**
 * GET /api/restaurants
 */
router.get('/restaurants', (req, res) => {
    Restaurant.find((err, restaurants) => {
        res.status(200).json(restaurants);
    });
});

/**
 * GET /api/restaurants/:id
 */
router.get('/restaurants/:id', (req, res) => {
    Restaurant.findOne({ _id: req.params.id }, (err, restaurant) => {
        if(!restaurant) {
            res.status(404).json('Tenhle pajzl nemáme!');
        }
        restaurant.populate('dishes')
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    });
});

/**
 * POST /api/restaurants
 */
router.post('/restaurants', (req, res) => {
    const restaurant = new Restaurant({
        name: req.body.name,
        address: req.body.address,
        stars: req.body.stars,
        comment: req.body.comment,
    });
    restaurant.save()
        .then(result => res.status(201).json(result))
        .catch(err => res.status(400).json(err));
});

/**
 * POST /api/restaurants/:id/dishes
 * Create new Dish for given Restaurant.
 */
router.post('/restaurants/:id/dishes', (req, res) => {
    if(!req.params.id){
        res.json('dej id pls');
    }
    Restaurant.findOne({ _id: req.params.id }, (err, restaurant) => {
        if(!restaurant) {
            res.status(404).json('Tenhle pajzl nemáme!');
        }
        const dish = new Dish({
            name: req.body.name,
            stars: req.body.stars,
            comment: req.body.comment,
            price: req.body.price
        });
        dish.save()
            .then(result => {
                restaurant.addDish(result);
                res.status(201).json(result);
            })
            .catch(err => res.status(400).json(err));
    });
});

module.exports = router;