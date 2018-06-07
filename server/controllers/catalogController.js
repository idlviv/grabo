const CatalogModel = require('../models/catalogModel');
const ResObj = require('../libs/responseObject');
const DbError = require('../errors/dbError');
const ApplicationError = require('../errors/applicationError');
const ObjectId = require('../config/mongoose').Types.ObjectId;

module.exports.getPrefix = function(req, res, next) {
  const _id = req.query.category;
  CatalogModel.findOne({_id}, {prefix: 1, _id: 0})
    .then(result => {
    return res.status(200).json(new ResObj(true, 'Префікс', result));
  })
    .catch(err => next(new DbError()));
};

getCategoryDescendants = function(category, depth) {
  return new Promise(function(resolve, reject) {
    CatalogModel.aggregate([
      {
        $match: {parent: category}
      },
      {
        $sort: {order: 1}
      },
      {
        $graphLookup: {
          from: 'catalogs',
          startWith: '$_id',
          connectFromField: '_id',
          connectToField: 'parent',
          as: 'children',
          maxDepth: depth
        }
      },
      {
        $addFields: {numOfChildren: {$size: '$children'}}
      }
    ]).then(result => resolve(result))
      .catch(err => reject(new DbError()));
  })
};
module.exports.getCategoryDescendants = getCategoryDescendants;

module.exports.getAllDescendants = function(req, res, next) {
  // const item = ObjectId(req.query.item);
  const category = req.query.category;
  const depth = +req.query.depth;
  getCategoryDescendants(category, depth)
    .then(result => {
      return res.status(200).json(new ResObj(true, 'Каталог', result));
    })
    .catch(err => next(err));
};

module.exports.getDescendants = function(req, res, next) {
  item = req.query.item;
  CatalogModel.aggregate([
    {
      $match: {parent: item}
    },
    {
      $sort: {order: 1}
    }
  ]).then(result => {
      return res.status(200).json(new ResObj(true, 'Каталог', result));
    })
    .catch(err => next(new DbError()));
};

module.exports.getMainMenu = function(req, res, next) {
  // const item = ObjectId(req.query.item);
  // item = req.query.item;
  // console.log('item', item);
  CatalogModel.aggregate([
    {
      $facet: {
        products: [
          {
            $match: {parent: 'products'}
          },
          {
            $sort: {order: 1}
          }
        ],
        blogs: [
          {
            $match: {_id: 'blogs'}
          },
          {
            $sort: {order: 1}
          }
        ],
        system: [
          {
            $match: {parent: 'system'}
          },
          {
            $sort: {order: 1}
          }
          ]
      },
    },
  ]).then(result => {
    return res.status(200).json(new ResObj(true, 'Каталог', result[0]));
  })
    .catch(err => next(new DbError()));
};
