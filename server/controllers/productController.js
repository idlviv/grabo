const CatalogModel = require('../models/catalogModel');
const ProductModel = require('../models/productModel');
const ResObj = require('../libs/responseObject');
const DbError = require('../errors/dbError');
const ApplicationError = require('../errors/applicationError');
const ObjectId = require('../config/mongoose').Types.ObjectId;
const formidable = require('formidable');
util = require('util');
const log = require('../config/winston')(module);
const cloudinary = require('../config/cloudinary');
const catalogController = require('../controllers/catalogController');

module.exports.getProductById = function(req, res, next) {
  const _id = req.query._id;
  let categories = [];

      ProductModel.findById(
        {_id: _id},
        // {sku: 1, _id: 0}
      )
        .then(result => {
          return res.status(200).json(new ResObj(true, 'Товар', result));
        })
        .catch(err => next(new DbError())
        );
};

module.exports.getProducts = function(req, res, next) {
  let category = req.query.category;
  let categories = [];
  catalogController.getCategoryDescendants(category, 1)
    .then(result => {
      if(result.length > 0) {
        categories = result.map(function(item) {
          return item._id;
        });
      } else {
        categories = [category];
      }
      ProductModel.find(
        {categories: {$in: categories}},
        // {sku: 1, _id: 0}
        )
        .then(result => {
          return res.status(200).json(new ResObj(true, 'Масив товарів', result));
        })
        .catch(err => next(new DbError()));
    })
    .catch(err => next(err));
};

module.exports.getMainPageProducts = function(req, res, next) {
  ProductModel.find(
    {onMainPage: true},
  )
    .then(result => {
      return res.status(200).json(new ResObj(true, 'Товари головної сторінки', result));
    })
    .catch(err => next(new DbError()));
};

module.exports.getSkuList = function(req, res, next) {
  const category = req.query.category;
  ProductModel.find({},
    // {categories: category},
    {sku: 1, _id: 0}).sort({sku: 1})
    .then(result => {
      return res.status(200).json(new ResObj(true, 'Масив артикулів', result));
    })
    .catch(err => next(new DbError()));
};

module.exports.productAddImage = function(req, res, next) {
  let form = new formidable.IncomingForm({maxFileSize: 10500000});
  // form.on('file', function(file) {
  //   log.verbose('file - uploaded');
  // });
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
        public_id: 'product_' + fields.sku + '_' + Date.now(),// jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
        // width: 1920, height: 1920, crop: 'fill'
      },
      function(err, result) {
        if (err) {
          return next(
            new ApplicationError('Помилка завантаження аватара - upload', 400)
          );
        }
        console.log('product_img_cloudinary result', result);
        return res.status(200).json(new ResObj(true, 'Зображення завнтажене', result.public_id));
      });

  });
};

module.exports.productCreate = function(req, res, next) {
  const product = req.body;
  product.createdAt = Date.now();
  const productModel = new ProductModel(product);

  productModel.save()
    .then(
      result => {
        return res.status(200).json(new ResObj(true, 'Виріб створений'));
      },
      err  =>
        // redirect to error handler
        next(new DbError(err.message, err.code))
    );
};

module.exports.productEdit = function(req, res, next) {
  const product = req.body;
  // product.createdAt = Date.now();
  // const productModel = new ProductModel(product);
  log.debug('product', product);

  ProductModel.update({_id: ObjectId(product._id)}, product)
    .then(
      result => {
        if (result.nModified !== 1) {
          next(new ApplicationError('Не вдалося внести зміни', 400));
        } else {
          return res.status(200).json(new ResObj(true, 'Зміни внесено'));
        }
      },
      err => next(new DbError(err.message, err.code))
    );
};

module.exports.productDelete = function(req, res, next) {
  const _id = req.params._id;
  // product.createdAt = Date.now();
  // const productModel = new ProductModel(product);

  res.status(200).json(new ResObj(true, 'FAKE !! Продукт видалено'));
  // ProductModel.deleteOne({_id: ObjectId(_id)})
  //   .then(
  //     result => {
  //       log.debug('result', result);
  //
  //       if (result.n !== 1) {
  //         next(new ApplicationError('Не вдалося внести зміни', 400));
  //       } else {
  //         return res.status(200).json(new ResObj(true, 'Продукт видалено'));
  //       }
  //     },
  //     err => next(new DbError(err.message, err.code))
  //   );
};
