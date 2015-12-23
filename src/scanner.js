var scanQR = require('./util/scanqr.js');
var scanBarcode = require('./util/scanbarcode.js');
var imageFromFile = require('./util/image-from-file.js');

module.exports = function(file, callback) {
  imageFromFile(file, 500, 500, function(img) {
    scanQR(img, function(qrErr, result) {
      if (!qrErr && result)
        return callback(null, result, 'QR');

      scanBarcode(img, function(barcodeErr, result, format) {
        if (barcodeErr)
          return callback(qrErr, null, null);

        if (result)
          return callback(null, result, format);
      });
    });
  });
};