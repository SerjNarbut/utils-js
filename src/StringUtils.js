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
    if (!isString(source)) {
      throw new Error("Source is not a string");
    }
    if (!isString(substring)) {
      throw new Error("Substring is not a string");
    }
    return source.indexOf(substring) != -1;
  };

  var starts = function (source, starts) {
    if (!isString(source)) {
      throw new Error("Source is not a string");
    }
    if (!isString(starts)) {
      throw new Error("Substring is not a string");
    }

    return source.indexOf(starts) == 0;
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
  }
})();