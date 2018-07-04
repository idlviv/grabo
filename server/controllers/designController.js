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

module.exports.designAddImage = function(req, res, next) {
  let form = new formidable.IncomingForm({maxFileSize: 10500000});

  form.parse(req, function(err, fields, files) {
    if (err) {
      return next(new ApplicationError('Помилка завантаження зображення - form parse', 400));
    }

    log.verbose('fields', fields);
    // log.verbose('files', files);
    log.verbose('date', Date.now());
    log.verbose('date-slice', String(Date.now()).slice(0, 7));

    cloudinary.v2.uploader.upload(
      files.file.path,
      {
        public_id: fields.design_id + '-' + Date.now(), // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
        // width: 650, height: 650, crop: 'fill'
        eager: [
          {width: 650, height: 650, crop: 'fill'},
          {width: 180, height: 180, crop: 'fill'},
          {width: 40, height: 40, crop: 'fill'},
          ]
      },
      function(err, result) {
        if (err) {
          return next(
            new ApplicationError('Помилка завантаження аватара - upload', 400)
          );
        }
        console.log('product_img_cloudinary result', result);
        return res.status(200).json(
          new ResObj(true, 'Зображення завнтажене', result.public_id) // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
        );
      });

  });
};

module.exports.designUpsert = function(req, res, next) {
  const design = req.body;

  DesignModel.findOneAndUpdate(
    {_id: design._id},
    {$set: design},
    {upsert: true, new: true} // upsert + return updated object
  )
    .then(result => {
      return res.status(200).json(new ResObj(true, 'Дизайн додано/змінено', result));
    })
    .catch(err => next(new DbError()));
};

module.exports.getDesignById = function(req, res, next) {
  const _id = req.params._id;

  DesignModel.findById(
    {_id: _id},
  )
    .then(result => {
      return res.status(200).json(new ResObj(true, 'дизайн', result));
    })
    .catch(err => next(new DbError())
    );
};

module.exports.designDelete = function(req, res, next) {
  const _id = req.params._id;

  // res.status(200).json(new ResObj(true, 'FAKE !! Продукт видалено'));
  DesignModel.deleteOne({_id: _id})
    .then(
      result => {
        log.debug('result', result);

        if (result.n !== 1) {
          next(new ApplicationError('Не вдалося внести зміни', 400));
        } else {
          return res.status(200).json(new ResObj(true, 'Продукт видалено'));
        }
      },
      err => next(new DbError(err.message, err.code))
    );
};
