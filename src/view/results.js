var isUrl = require('is-url');


function tmpl(value) {
  if (isUrl(value))
    return '<a href="' + value + '">' + value + '</a>';
  return value;
}


module.exports = function(selector) {
  var dom = document.querySelector(selector);

  return {
    add: function(value, format) {
      dom.innerHTML = '<li>' + tmpl(value, format) + '</li>' + dom.innerHTML;
    }
  }
}