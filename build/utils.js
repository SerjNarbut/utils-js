/**
 * Created by SerjN on 07.11.2016.
 */

var Utils = Utils || {};

Utils.ObjectUtils = (function () {
  var isUndefined = function (obj) {
    return typeof obj === 'undefined';
  };

  var isNull = function (obj) {
    return obj === null;
  };

  var isNullOrUndefined = function (obj) {
    return isUndefined(obj) || isNull(obj);
  };

  return {
    isUndefined: isUndefined,
    isNull: isNull,
    isNullOrUndefined: isNullOrUndefined
  }
})();
/**
 * Created by SerjN on 02.11.2016.
 */
var Utils = Utils || {};
Utils.LOG_ENABLED = Utils.LOG_ENABLED || false;

Utils.Preconditions = (function () {
  var getMessage = function (message, defaultMessage) {
    return message || defaultMessage;
  };

  var checkArgument = function (expression, message) {
    check(expression, message, "Illegal argument");
  };

  var checkState = function (expression, message) {
    check(expression, message, "Illegal state");
  };

  var check = function (expression, message, defaultMessage) {
    if (expression) {
      return;
    }
    var mess = getMessage(message, defaultMessage);
    if (Utils.LOG_ENABLED) {
      console.error(mess);
    }
    throw new Error(mess);
  };

  return {
    checkArgument: checkArgument,
    checkState: checkState
  }
})();
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

  var hash = function (str) {
    Utils.Preconditions.checkArgument(isString(str), "Hash can be applicable only for string");
    var len = str.length;
    if (len == 0) {
      return 0;
    }
    var hash = 0;
    for (var i = 0; i < len; i++) {
      hash = hash * 31 + str.charCodeAt(i);
      hash |= 0; //to 32 bit int
    }
    return hash;
  };

  return {
    isEmpty: isEmpty,
    isNonEmpty: isNonEmpty,
    isDigit: isDigit,
    contains: contains,
    starts: starts,
    ends: ends,
    hashCode: hash
  }
})();