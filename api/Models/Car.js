const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const car = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: String
  },
  category: {
    type: Schema.ObjectId,
    ref: 'categories'
  },
  brand: {
    type: Schema.ObjectId,
    ref: 'brands'
  },

},{timestamps:true})


const Car = mongoose.model('cars', car);

module.exports = Car;