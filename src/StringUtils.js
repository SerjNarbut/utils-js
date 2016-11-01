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
    if (!isString(str)) {
      return false;
    }
    return /^-?\d+\.?\d+?$/.test(str);
  };

  var contains = function (source, substring) {
    Utils.Preconditions.checkArgument(isString(source), "Source is not a string");
    Utils.Preconditions.checkArgument(isString(substring), "Substring is not a string");
    return source.indexOf(substring) != -1;
  };

  var starts = function (source, prefix) {
    Utils.Preconditions.checkArgument(isString(source), "Source is not a string");
    Utils.Preconditions.checkArgument(isString(prefix), "Prefix is not a string");
    return source.indexOf(prefix) == 0;
  };

  var ends = function (source, suffix) {
    Utils.Preconditions.checkArgument(isString(source), "Source is not a string");
    Utils.Preconditions.checkArgument(isString(suffix), "Suffix is not a string");
    Utils.Preconditions.checkState(source.length >= suffix.length, "Suffix length is more than source length");
    var expectedPosition = source.length - suffix.length;
    return source.lastIndexOf(suffix) == expectedPosition;
  };

  var isString = function (str) {
    return typeof str === 'string';
  };

  return {
    isEmpty: isEmpty,
    isNonEmpty: isNonEmpty,
    isDigit: isDigit,
    contains: contains,
    starts: starts,
    ends: ends
  }
})();