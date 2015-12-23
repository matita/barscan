var qrcode = require('zxing');
var StackBlur = require('stackblur-canvas');

var canvas = document.getElementById('qr-canvas');
var ctx = canvas.getContext('2d');
var inp = document.getElementById('capture');

inp.addEventListener('change', function(e) {
  var img = new Image;
  img.onload = function() {
      drawImageScaled(img, ctx);

      //StackBlur.canvasRGB(canvas, 0, 0, canvas.width, canvas.height, 4);

      qrcode.decode(function(err, result) {
        alert(err || result);
      });
  }
  img.src = URL.createObjectURL(e.target.files[0]);
}, false);



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