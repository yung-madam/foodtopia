const mongoose = require('mongoose');

const Dish = require('./dish');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  stars: Number,
  comment: String,
  address: String,
  dishes: [Dish]
});

exports = mongoose.model('prdelka', restaurantSchema);
