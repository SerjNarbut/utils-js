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

describe('StringUtils.isNonEmpty', function () {

  it('has check null string', function () {
    return expect(Utils.StringUtils.isNonEmpty(null)).toBe(false);
  });

  it('has check undefined string', function () {
    return expect(Utils.StringUtils.isNonEmpty(undefined)).toBe(false);
  });

  it('has check empty string', function () {
    return expect(Utils.StringUtils.isNonEmpty("")).toBe(false);
  });

  it('has check whitespaces string', function () {
    return expect(Utils.StringUtils.isNonEmpty("   ")).toBe(false);
  });

  it('has check number', function () {
    return expect(Utils.StringUtils.isNonEmpty(111)).toBe(true);
  });

  it('has check string', function () {
    return expect(Utils.StringUtils.isNonEmpty("test")).toBe(true);
  });
});

describe('StringUtils.isDigit', function () {

  it('has check null string', function () {
    return expect(Utils.StringUtils.isDigit(null)).toBe(false);
  });

  it('has check undefined string', function () {
    return expect(Utils.StringUtils.isDigit(undefined)).toBe(false);
  });

  it('has check empty string', function () {
    return expect(Utils.StringUtils.isDigit("")).toBe(false);
  });

  it('has check integer string', function () {
    return expect(Utils.StringUtils.isDigit("11")).toBe(true);
  });

  it('has check negative integer string', function () {
    return expect(Utils.StringUtils.isDigit("-11")).toBe(true);
  });

  it('has check number string', function () {
    return expect(Utils.StringUtils.isDigit("11.12")).toBe(true);
  });

  it('has check negative number string', function () {
    return expect(Utils.StringUtils.isDigit("-11.12")).toBe(true);
  });

  it('has check zero number string', function () {
    return expect(Utils.StringUtils.isDigit("0.12")).toBe(true);
  });

  it('has check negative zero number string', function () {
    return expect(Utils.StringUtils.isDigit("-0.12")).toBe(true);
  });

  it('has check integer', function () {
    return expect(Utils.StringUtils.isDigit(111)).toBe(true);
  });

  it('has check number', function () {
    return expect(Utils.StringUtils.isDigit(11.12)).toBe(true);
  });

  it('has check zero number', function () {
    return expect(Utils.StringUtils.isDigit(0.12)).toBe(true);
  });

  it('has check non digit string', function () {
    return expect(Utils.StringUtils.isDigit("test")).toBe(false);
  });

  it('has check wrong format digit string', function () {
    return expect(Utils.StringUtils.isDigit("11 test")).toBe(false);
  });

  it('has check wrong format number string', function () {
    return expect(Utils.StringUtils.isDigit("11.12.14")).toBe(false);
  });

  it('has check object', function () {
    return expect(Utils.StringUtils.isDigit({})).toBe(false);
  });

  it('has check array', function () {
    return expect(Utils.StringUtils.isDigit([])).toBe(false);
  });
});

describe('StringUtils.contains', function () {
  it('should throw error for non-string source', function () {
    expect(function () {
      Utils.StringUtils.contains(10, "test")
    }).toThrow(new Error('Source is not a string'));
  });
  it('should throw error for non-string substring', function () {
    expect(function () {
      Utils.StringUtils.contains("test", [])
    }).toThrow(new Error('Substring is not a string'));
  });

  it('should find substring in string', function () {
    expect(Utils.StringUtils.contains("Some string for testing", "e str")).toBe(true);
  });
  it('should not find substring in string', function () {
    expect(Utils.StringUtils.contains("Some string for testing", "none")).toBe(false);
  })
});

describe('StringUtils.starts', function () {
  it('should throw error for non-string source', function () {
    expect(function () {
      Utils.StringUtils.starts(10, "test")
    }).toThrow(new Error('Source is not a string'));
  });
  it('should throw error for non-string substring', function () {
    expect(function () {
      Utils.StringUtils.starts("test", [])
    }).toThrow(new Error('Substring is not a string'));
  });

  it('should find substring in starts of string', function () {
    expect(Utils.StringUtils.starts("Some string for testing", "Some")).toBe(true);
  });
  it('should not find substring in starts string', function () {
    expect(Utils.StringUtils.starts("Some string for testing", "string")).toBe(false);
  })
});