/**
 * Created by SerjN on 01.11.2016.
 */
var Utils = Utils || {};

Utils.StringUtils = (function () {
  var isEmpty = function (str) {
    return typeof str == "undefined"
      || str === null
      || str.toString().trim().length === 0;
  };

  var isNonEmpty = function (str) {
    return !isEmpty(str);
  };

  var isDigit = function (str) {
    if (typeof str === "undefined" || str == null) {
      return false;
    }
    if (typeof str === 'number') {
      return true;
    }
    if (typeof str !== 'string') {
      return false;
    }
    return /^-?\d+\.?\d+?$/.test(str);
  };

  return {
    isEmpty: isEmpty,
    isNonEmpty: isNonEmpty,
    isDigit: isDigit
  }
})();