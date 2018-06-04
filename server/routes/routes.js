const express = require('express');
const router = express.Router();
const ApplicationError = require('../errors/applicationError');
// const passport = require('passport');
// const userController = require('../controllers/userController');
// const catalogController = require('../controllers/catalogController');
// const uploadController = require('../controllers/uploadController');
// const productController = require('../controllers/productController');
// const recaptcha = require('../middleware/recaptcha');


/**
 * catch apis 404 and forward to error handler
 */

router.use('*', function(req, res, next) {
  const err = new ApplicationError(404, 'Помилковий запит');
  next(err);
});

module.exports = router;

