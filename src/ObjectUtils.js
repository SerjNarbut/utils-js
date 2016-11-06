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

  var isObject = function (obj) {
    return !isNull(obj) && typeof obj === 'object';
  };

  var isFunction = function (obj) {
    return typeof obj === 'function';
  };

  var isString = function (obj) {
    return typeof obj === 'string';
  };

  var getFields = function (obj) {
    Utils.Preconditions.checkArgument(isObject(obj), "Cannot extract fields names from non object");
    var result = [];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        result.push(prop);
      }
    }
    return result;
  };

  var extend = function (dest, source) {
    if (isNullOrUndefined(source)) {
      return dest;
    }
    dest = dest || {};
    var fields = getFields(source);
    fields.map(function (value) {
      if (!isNullOrUndefined(source[value]) && !dest.hasOwnProperty(value)) {
        dest[value] = source[value];
      }
    });
    return dest;
  };

  return {
    isUndefined: isUndefined,
    isNull: isNull,
    isNullOrUndefined: isNullOrUndefined,
    isObject: isObject,
    isFunction: isFunction,
    isString: isString,
    getFields: getFields,
    extend: extend
  }
})();