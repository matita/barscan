var qrcode = require('zxing');
var imageFromFile = require('./image-from-file.js');


function drawImageScaled(img, ctx) {
   var canvas = ctx.canvas ;
   var hRatio = canvas.width  / img.width    ;
   var vRatio =  canvas.height / img.height  ;
   var ratio  = Math.min ( hRatio, vRatio );
   var centerShift_x = ( canvas.width - img.width*ratio ) / 2;
   var centerShift_y = ( canvas.height - img.height*ratio ) / 2;  
   ctx.clearRect(0,0,canvas.width, canvas.height);
   ctx.drawImage(img, 0,0, img.width, img.height,
                      centerShift_x,centerShift_y,img.width*ratio, img.height*ratio);  
}


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