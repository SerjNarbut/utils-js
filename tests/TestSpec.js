describe('StringUtils.isEmpty', function () {

  it('has check null string', function () {
    return expect(Utils.StringUtils.isEmpty(null)).toBe(true);
  });

  it('has check undefined string', function () {
    return expect(Utils.StringUtils.isEmpty(undefined)).toBe(true);
  });

  it('has check empty string', function () {
    return expect(Utils.StringUtils.isEmpty("")).toBe(true);
  });

  it('has check whitespaces string', function () {
    return expect(Utils.StringUtils.isEmpty("   ")).toBe(true);
  });

  it('has check number', function () {
    return expect(Utils.StringUtils.isEmpty(111)).toBe(false);
  });

  it('has check string', function () {
    return expect(Utils.StringUtils.isEmpty("test")).toBe(false);
  });
});