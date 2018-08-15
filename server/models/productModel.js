const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;

// const RecommendationSchema = require('./recommendationModel').RecommendationSchema;

// const RecommendationSchema = new Schema({
//   _id: {
//     type: String,
//     required: true
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   parent: {
//     type: String,
//     required: true,
//   },
// });

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
  display: {
    type: Boolean,
    required: true,
    default: true
  },
  mainImage: {
    type: String,
    required: true,
  },
  briefImage: {
    type: String,
    required: true,
  },
  assets: {
    type: [String],
    // default: config.get('defaultProductImgPath'),
    required: true
  },
  techAssets: {
    type: [String],
    // default: config.get('defaultProductImgPath'),
    required: true
  },
  description: {
    type: String,
    required: true
  },
  recommendations:
    {
      type: [String],
      required: true,
    },

      // _id: {
      //   type: String,
      //   required: true,
      // },
    //   name: {
    //     type: String,
    //     required: true,
    //   },
    //   sub: {
    //     type: [String],
    //     required: true,
    //   }
    // },
  techDescriptions: [
    {
      techName: {
        type: String,
        required: true,
      },
      techUnit: {
        type: String,
        required: true,
      },
      techValue: {
        type: String,
        required: true,
      }
    }
  ],
  // designs: [
  //   DesignModel
  // ],
  designs: {
    type: [String],
    required: true
  },
  downloads: [
    {
      downloadName: {
        type: String,
        required: true,
      },
      downloadLink: {
        type: String,
        required: true,
      },
      downloadIcon: {
        type: String,
        required: true,
      },
    }
  ]
});

let ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel;
