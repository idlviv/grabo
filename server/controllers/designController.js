const DesignModel = require('../models/designModel');
const ResObj = require('../libs/responseObject');
const DbError = require('../errors/dbError');
const ApplicationError = require('../errors/applicationError');
const ObjectId = require('../config/mongoose').Types.ObjectId;
const formidable = require('formidable');
util = require('util');
const log = require('../config/winston')(module);
const cloudinary = require('../config/cloudinary');
const catalogController = require('../controllers/catalogController');

module.exports.getDesigns = function(req, res, next) {
      DesignModel.find(
        {},
      )
        .then(result => {
          return res.status(200).json(new ResObj(true, 'Дизайни', result));
        })
        .catch(err => next(new DbError()));
};
