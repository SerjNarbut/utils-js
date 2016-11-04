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
  it('should throw error for non-string prefix', function () {
    expect(function () {
      Utils.StringUtils.starts("test", [])
    }).toThrow(new Error('Prefix is not a string'));
  });

  it('should find prefix in start of string', function () {
    expect(Utils.StringUtils.starts("Some string for testing", "Some")).toBe(true);
  });
  it('should not find prefix in starts string', function () {
    expect(Utils.StringUtils.starts("Some string for testing", "string")).toBe(false);
  })
});

describe('StringUtils.ends', function () {
  it('should throw error for non-string source', function () {
    expect(function () {
      Utils.StringUtils.ends(10, "test")
    }).toThrow(new Error('Source is not a string'));
  });
  it('should throw error for non-string suffix', function () {
    expect(function () {
      Utils.StringUtils.ends("test", [])
    }).toThrow(new Error('Suffix is not a string'));
  });

  it('should find suffix in end of string', function () {
    expect(Utils.StringUtils.ends("Some string for testing", "testing")).toBe(true);
  });
  it('should not find suffix in end string', function () {
    expect(Utils.StringUtils.ends("Some string for testing", "string")).toBe(false);
  })
});

describe('StringUtils.hashCode', function () {
  it('should throw error for non-string objects', function () {
    expect(function () {
      Utils.StringUtils.hashCode({})
    }).toThrow(new Error("Hash can be applicable only for string"));
  });
  it('should throw error for null objects', function () {
    expect(function () {
      Utils.StringUtils.hashCode(null)
    }).toThrow(new Error("Hash can be applicable only for string"));
  });
  it('should throw error for undefined objects', function () {
    expect(function () {
      Utils.StringUtils.hashCode(undefined)
    }).toThrow(new Error("Hash can be applicable only for string"));
  });
  it('should return 0 for empty string', function () {
    expect(Utils.StringUtils.hashCode("")).toBe(0);
  });
  it('should return int for non-empty string', function () {
    expect(Utils.StringUtils.hashCode("test")).toBe(3556498);
  });
  it('should return int for non-empty long string', function () {
    var string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at.";
    expect(Utils.StringUtils.hashCode(string)).toBe(1477730442);
  });
  it('should return equal code for equals string', function () {
    var string1 = "test";
    var string2 = "test";
    expect(Utils.StringUtils.hashCode(string1)).toBe(Utils.StringUtils.hashCode(string2));
  });
  it('should return different code for different string', function () {
    var string1 = "test1";
    var string2 = "test";
    expect(Utils.StringUtils.hashCode(string1)).not.toBe(Utils.StringUtils.hashCode(string2));
  });
});