var expect = chai.expect;

describe("max", function () {
  it("should return the max of two numbers that are passed in", function () {
    var num1 = 10;
    var num2 = 24;

    var result = max(num1, num2);

    expect(result).to.eql(num2);
  });
});
