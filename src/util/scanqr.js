var qrcode = require('zxing');
var drawImageScaled = require('./draw-image-scaled.js');



module.exports = function(img, callback) {
  var canvas = document.getElementById('qr-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.style.display = 'none';
    document.body.appendChild(canvas);
  }

  canvas.width = 500;
  canvas.height = 500;
  var ctx = canvas.getContext('2d');

  drawImageScaled(img, ctx);
  qrcode.decode(callback);
};