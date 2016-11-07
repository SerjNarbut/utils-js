/**
 * Created by SerjN on 08.11.2016.
 */
var Utils = Utils || {};

Utils.DecoratorUtils = (function () {
  var wrap = function (obj, name, wrapperFunction) {
    Utils.Preconditions.checkArgument(Utils.ObjectUtils.isObject(obj), "cannot wrap function for non objects");
    Utils.Preconditions.checkArgument(Utils.ObjectUtils.isString(name), "name of function to wrapping must be string");
    Utils.Preconditions.checkArgument(Utils.ObjectUtils.isFunction(wrapperFunction), "wrapped function must be function");
    Utils.Preconditions.checkState(Utils.ObjectUtils.isFunction(obj[name]), "is not a function:'" + name + "'");
    obj[name] = wrapperFunction(obj[name]);
  };

  var after = function (afterFunction) {
    return function (original) {
      return function () {
        var results = original.apply(this, arguments);
        afterFunction(results);
        return results;
      }
    }
  };

  var before = function (beforeFunction) {
    return function (original) {
      return function () {
        beforeFunction.apply(this, arguments);
        return original.apply(this, arguments);
      }
    }
  };

  var transformInput = function (transformer) {
    return function (original) {
      return function () {
        return original.call(this, transformer.apply(this, arguments));
      }
    }
  };

  var transformResult = function (transformer) {
    return function (original) {
      return function () {
        return transformer.call(this, original.apply(this, arguments));
      }
    }
  };

  return {
    wrap: wrap,
    after: after,
    before: before,
    transformInput: transformInput,
    transformResult: transformResult
  }
})();