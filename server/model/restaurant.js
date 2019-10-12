const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 150 },
  address: { type: String, maxlength: 100 },
  stars: { type: Number, min: 0, max: 5 },
  comment: { type: String, maxlength: 250 },
  dishes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dish' }]
});

restaurantSchema.methods.addDish = (dish) => {
    this.dishes.push(dish);
    this.save();
    return this;
};

module.exports = mongoose.model('Restaurants', restaurantSchema);
