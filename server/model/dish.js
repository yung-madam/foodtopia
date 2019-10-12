const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 100 },
  stars: { type: Number, min: 0, max: 5 },
  comment: { type: String, maxlength: 250 },
  price: { type: Number, min: 0 },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }
});

module.exports = mongoose.model('Dishes', dishSchema);
