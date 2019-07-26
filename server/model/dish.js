const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  stars: Number,
  comment: String,
  price: String
});

const Dish = mongoose.model('Dish', dishSchema);

exports = Dish;
