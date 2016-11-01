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