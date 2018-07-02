const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const config = require('../config');

const DesignSchema = new Schema({
  _id: {
    type: String,
    required: true,
    // unique: true
  },
  imgBig: {
    type: [String],
    default: config.get('defaultProductImgPath'),
    required: true
  },
  imgSmall: {
    type: [String],
    default: config.get('defaultProductImgPath'),
    required: true
  },
  // cols: {
  //   type: [String],
  //   required: true
  // },
  tags: [{
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
  }],
});

let DesignModel = mongoose.model('designs', DesignSchema);
module.exports = DesignModel;
