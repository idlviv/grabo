const config = require('../config');
const ResObj = require('../libs/responseObject');

module.exports.getCloudinary = function(req, res, next) {

      return res.status(200).json(new ResObj(true, 'Cloudinary cloud name', config.get('CLOUDINARY_NAME')));

};
