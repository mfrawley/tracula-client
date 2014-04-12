String.prototype.replaceAll = function(str, replacement) {
  var regex;
  regex = new RegExp(str, "ig");
  return this.replace(regex, replacement);
};

window.utf8_to_b64 = function( str ) {
  return window.btoa(unescape(encodeURIComponent( str )));
}