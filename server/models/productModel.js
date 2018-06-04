const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const config = require('../config');

const CommentsSchema = new Schema({
  comment: {
    type: String,
  },
  commentator: {
    type: String
  },
  commentedAt: {
    type: Number,
    default: 0
  },
});

const ProductSchema = new Schema({
  categories: {
    type: [String],
    required: true
  },
  sku: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number
  },
  files: {
    type: [String],
    default: config.get('defaultProductImgPath'),
  },
  description: {
    type: String,
    required: true
  },
  onMainPage: {
    type: Boolean
  },
  dimensions: {
    width: {
      type: Number
    },
    height: {
      type: Number
    },
  },
  createdAt: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  likedBy: {
    type: [String]
  },
  dislikes: {
    type: Number,
    default: 0
  },
  dislikedBy: {
    type: [String]
  },
  views: {
    type: Number,
    default: 0
  },
  comments: [CommentsSchema],
});

let ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel;
