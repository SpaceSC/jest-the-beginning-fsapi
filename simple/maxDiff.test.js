const maxDiff = require("./maxDiff");

// write tests for all returns

// Classic syntax
it("tests if it returns 0 when the list's length is 0", () => {
  expect(maxDiff([])).toBe(0);
});

it("tests if it returns 0 when the list's length is 1", () => {
  expect(maxDiff([5])).toBe(0);
});

it("tests if it returns the difference between the largest number and the smallest", () => {
  expect(maxDiff([5, 10, 2])).toBe(8);
});

// Innovative syntax
function maxDiffTest(testDescription, list, result) {
  test(testDescription, () => {
    expect(maxDiff(list)).toBe(result);
  });
}

// Call function
maxDiffTest("tests if it returns 0 when the list's length is 0", [], 0);

maxDiffTest("tests if it returns 0 when the list's length is 1", [5], 0);

maxDiffTest("tests if it returns the difference between the largest number and the smallest", [5, 10, 2], 8);
