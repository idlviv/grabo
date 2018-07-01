const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const config = require('../config');

const ProductSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  parent: {
    type: String,
    required: true,
  },
  auth: {
    type: String,
    required: true,
  },
  order: {
    type: Number
  },
  prefix: {
    type: String,
  },
  assets: {
    type: [String],
    default: config.get('defaultProductImgPath'),
    required: true
  },
  techAssets: {
    type: [String],
    default: config.get('defaultProductImgPath'),
    required: true
  },
  description: {
    type: String,
    required: true
  },
  recommendations: {
    type: [String],
    required: true
  },
  designs: {
    type: [String],
    required: true
  }
});

let ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel;
