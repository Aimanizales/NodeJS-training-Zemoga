module.exports.isNumber = function(n){
  return !isNaN(n) ? n : NaN;
}
module.exports.isValidMeasure = function(value, errorMsn){
  var pass = value.match(/(\d+)(\.\d+)?/g);
  if (pass) {
    return true;
  }
  return errorMsn
}
