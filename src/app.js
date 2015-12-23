var scan = require('./scanner.js');
var inp = document.getElementById('capture');
var results = require('./view/results.js')('.results');

inp.addEventListener('change', function(e) {
  var file = e.target.files[0];

  if (!file)
    return;

  scan(file, function(err, result, format) {
    if (err)
      return alert(err);

    results.add(result);
  });
}, false);