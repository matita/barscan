var drawImageScaled = require('./draw-image-scaled.js');


module.exports = function(file, width, height, callback) {
  var img = new Image();
  img.onload = function() {
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');
    drawImageScaled(img, ctx);

    var scaledImg = new Image();
    scaledImg.onload = function() {
      callback(scaledImg);
      
    }
    scaledImg.src = canvas.toDataURL();

    URL.revokeObjectURL(img.src);  
  }
  img.src = URL.createObjectURL(file);
};