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

module.exports = mongoose.model('Dishes', dishSchema);
