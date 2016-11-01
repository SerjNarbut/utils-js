/**
 * Created by SerjN on 02.11.2016.
 */
describe("Preconditions.checkArgument", function () {
  it('should throw message', function () {
    expect(function () {
      Utils.Preconditions.checkArgument(2 > 3, "Wrong value");
    }).toThrow(new Error("Wrong value"));
  });
  it('should throw with default message', function () {
    expect(function () {
      Utils.Preconditions.checkArgument(2 > 3);
    }).toThrow(new Error("Illegal argument"));
  });
});