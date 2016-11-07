/**
 * Created by SerjN on 07.11.2016.
 */
describe("Decorator spec", function () {
  describe('wrapper functions', function () {
    it('should watch after function call', function () {
      var obj = {
        a: 15,
        awesomeFunction: function (newValue) {
          this.a = newValue;
          return this.a * 2;
        }
      };
      var b = 0;
      Utils.DecoratorUtils.wrap(obj, 'awesomeFunction', Utils.DecoratorUtils.after(function (newValue) {
        b = newValue;
      }));

      obj.awesomeFunction(100);
      expect(b).toBe(obj.a * 2);
    });

    it('should watch before function call', function () {
      var obj = {
        a: 0,
        awesomeFunction: function (newValue) {
          this.a = newValue;
          return this.a * 2;
        }
      };
      var b = 10;
      Utils.DecoratorUtils.wrap(obj, 'awesomeFunction', Utils.DecoratorUtils.before(function () {
        b = this.a;
      }));
      obj.awesomeFunction(100);
      expect(b).toBe(0);
    });

    it('should transform input', function () {
      var obj = {
        a: 0,
        awesomeFunction: function (newValue) {
          this.a = newValue;
        }
      };
      Utils.DecoratorUtils.wrap(obj, 'awesomeFunction', Utils.DecoratorUtils.transformInput(function (newValue) {
        return newValue / 2;
      }));
      obj.awesomeFunction(100);
      expect(obj.a).toBe(50);
    });

    it('should transform result', function () {
      var obj = {
        a: 0,
        awesomeFunction: function (newValue) {
          this.a = newValue;
          return this.a * 2;
        }
      };
      Utils.DecoratorUtils.wrap(obj, 'awesomeFunction', Utils.DecoratorUtils.transformResult(function (oldResult) {
        return oldResult + 4;
      }));
      var result = obj.awesomeFunction(100);
      expect(result).toBe(204);
    });
  });
});
