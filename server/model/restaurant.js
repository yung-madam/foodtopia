const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  stars: Number,
  comment: String,
  address: String,
  dishes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Dish'}]
});

module.exports = mongoose.model('Restaurants', restaurantSchema);
