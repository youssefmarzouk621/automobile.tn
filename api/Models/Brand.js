const mongoose = require('mongoose');

const brand = new mongoose.Schema({
  name: {
    type: String
  },
  image: {
    type: String
  },
},{timestamps:true})

const Brand = mongoose.model('brands', brand);

module.exports = Brand