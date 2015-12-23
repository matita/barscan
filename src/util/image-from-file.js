module.exports = function(file, callback) {
  var img = new Image();
  img.onload = function() {
    callback(img);
    URL.revokeObjectURL(img.src);
  }
  img.src = URL.createObjectURL(file);
};