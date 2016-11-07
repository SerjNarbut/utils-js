/**
 * Created by SerjN on 08.11.2016.
 */
var Utils = Utils || {};

Utils.DecoratorUtils = (function () {
  var wrap = function (obj, name, watchFunct) {
    obj[name] = watchFunct(obj[name]);
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