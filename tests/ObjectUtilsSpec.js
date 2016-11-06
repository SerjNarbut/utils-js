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
});