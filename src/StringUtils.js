/**
 * Created by SerjN on 01.11.2016.
 */
var Utils = Utils || {};

Utils.StringUtils = (function () {
  var isEmpty = function (str) {
    return Utils.ObjectUtils.isNullOrUndefined(str) || str.toString().trim().length === 0;
  };

  var isNonEmpty = function (str) {
    return !isEmpty(str);
  };

  var isDigit = function (str) {
    if (Utils.ObjectUtils.isNullOrUndefined(str)) {
      return false;
    }
    if (typeof str === 'number') {
      return true;
    }
    if (!Utils.ObjectUtils.isString(str)) {
      return false;
    }
    return /^-?\d+\.?\d+?$/.test(str);
  };

  var contains = function (source, substring) {
    Utils.Preconditions.checkArgument(Utils.ObjectUtils.isString(source), "Source is not a string");
    Utils.Preconditions.checkArgument(Utils.ObjectUtils.isString(substring), "Substring is not a string");
    return source.indexOf(substring) != -1;
  };

  var starts = function (source, prefix) {
    Utils.Preconditions.checkArgument(Utils.ObjectUtils.isString(source), "Source is not a string");
    Utils.Preconditions.checkArgument(Utils.ObjectUtils.isString(prefix), "Prefix is not a string");
    return source.indexOf(prefix) == 0;
  };

  var ends = function (source, suffix) {
    Utils.Preconditions.checkArgument(Utils.ObjectUtils.isString(source), "Source is not a string");
    Utils.Preconditions.checkArgument(Utils.ObjectUtils.isString(suffix), "Suffix is not a string");
    Utils.Preconditions.checkState(source.length >= suffix.length, "Suffix length is more than source length");
    var expectedPosition = source.length - suffix.length;
    return source.lastIndexOf(suffix) == expectedPosition;
  };

  var hash = function (str) {
    Utils.Preconditions.checkArgument(Utils.ObjectUtils.isString(str), "Hash can be applicable only for string");
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