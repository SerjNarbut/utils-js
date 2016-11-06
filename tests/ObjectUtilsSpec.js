/**
 * Created by SerjN on 07.11.2016.
 */
describe("ObjectUtils spec", function () {
  describe('isUndefined', function () {
    it('should be check undefined values', function () {
      expect(Utils.ObjectUtils.isUndefined(undefined)).toBe(true);
    });
    it('should be check non undefined values', function () {
      expect(Utils.ObjectUtils.isUndefined({})).toBe(false);
    });
    it('should be check null values', function () {
      expect(Utils.ObjectUtils.isUndefined(null)).toBe(false);
    });
  });
  describe('isNull', function () {
    it('should be check undefined values', function () {
      expect(Utils.ObjectUtils.isNull(undefined)).toBe(false);
    });
    it('should be check non undefined values', function () {
      expect(Utils.ObjectUtils.isNull({})).toBe(false);
    });
    it('should be check null values', function () {
      expect(Utils.ObjectUtils.isNull(null)).toBe(true);
    });
  });
  describe('isNullOrUndefined', function () {
    it('should be check undefined values', function () {
      expect(Utils.ObjectUtils.isNullOrUndefined(undefined)).toBe(true);
    });
    it('should be check non undefined values', function () {
      expect(Utils.ObjectUtils.isNullOrUndefined({})).toBe(false);
    });
    it('should be check null values', function () {
      expect(Utils.ObjectUtils.isNullOrUndefined(null)).toBe(true);
    });
  });
  describe('type determinations', function () {
    var obj = {};
    var funct = function () {
    };
    var str = "";

    it('should be check undefined values', function () {
      expect(Utils.ObjectUtils.isFunction(undefined)).toBe(false);
      expect(Utils.ObjectUtils.isObject(undefined)).toBe(false);
      expect(Utils.ObjectUtils.isString(undefined)).toBe(false);
    });
    it('should be check object values', function () {
      expect(Utils.ObjectUtils.isFunction(obj)).toBe(false);
      expect(Utils.ObjectUtils.isObject(obj)).toBe(true);
      expect(Utils.ObjectUtils.isString(obj)).toBe(false);
    });
    it('should be check function values', function () {
      expect(Utils.ObjectUtils.isFunction(funct)).toBe(true);
      expect(Utils.ObjectUtils.isObject(funct)).toBe(false);
      expect(Utils.ObjectUtils.isString(funct)).toBe(false);
    });
    it('should be check string values', function () {
      expect(Utils.ObjectUtils.isFunction(str)).toBe(false);
      expect(Utils.ObjectUtils.isObject(str)).toBe(false);
      expect(Utils.ObjectUtils.isString(str)).toBe(true);
    });
    it('should be check null values', function () {
      expect(Utils.ObjectUtils.isFunction(null)).toBe(false);
      expect(Utils.ObjectUtils.isObject(null)).toBe(false);
      expect(Utils.ObjectUtils.isString(null)).toBe(false);
    });
  });
  describe('getFields', function () {
    it('should throw error for non-object values', function () {
      expect(function () {
        Utils.ObjectUtils.getFields("");
      }).toThrow(new Error("Cannot extract fields names from non object"));
      expect(function () {
        Utils.ObjectUtils.getFields(1);
      }).toThrow(new Error("Cannot extract fields names from non object"));
    });
    it('should be check non undefined values', function () {
      var obj = {a: 10, b: "some string", "test": []};
      var fields = ['a', 'b', 'test'];
      expect(Utils.ObjectUtils.getFields(obj)).toEqual(fields);
    });
  });
});