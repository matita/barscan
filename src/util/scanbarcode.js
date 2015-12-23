var BarcodeReader = require('barcode-reader');

var extCallback;

BarcodeReader.Init();
BarcodeReader.DecodeSingleBarcode();
BarcodeReader.SetImageCallback(function(results) {
  if (!extCallback)
    return;

  if (results.length > 0) {
    var result = results[0];
    extCallback(null, result.Value, result.Format);
  } else {
    extCallback('No barcode found');
  }

  extCallback = null;
});


module.exports = function(img, callback) {
  extCallback = callback;
  BarcodeReader.DecodeImage(img);
}