var scan = require('./scanner.js');
var inp = document.getElementById('capture');

inp.addEventListener('change', function(e) {
  var file = e.target.files[0];

  if (!file)
    return alert('No file selected');

  scan(file, function(err, result, format) {
    alert(err || result);
  });
}, false);