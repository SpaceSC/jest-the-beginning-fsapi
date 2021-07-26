const findUnique = require("./findUnique");

// write tests for all returns

// Classic syntax
it("tests if the first unique number is 2 in an array of [1,1,2]", () => {
  expect(findUnique([1,1,2])).toBe(2)
})

it("tests if it returns the second number when the first numbers are not equal", () => {
  expect(findUnique([1,2,3])).toBe(2)
})

it("tests if it returns the first number when the second and third numbers are equal", () => {
  expect(findUnique([1,4,4])).toBe(1)
})

it("tests if it returns undefined when all the numbers are equal", () => {
  expect(findUnique([4,4,4])).toBe(undefined)
})

// Innovative syntax
function findUniqueTest(testDescription, numbers, result) {
  test(testDescription, () => {
    expect(findUnique(numbers)).toBe(result);
  });
}

// Call function
findUniqueTest("It tests if the first unique number is 2 in an array of [1,1,2]", [1,1,2], 2)

findUniqueTest("tests if it returns the second number when the first numbers are not equal", [1,2,3], 2)

findUniqueTest("tests if it returns the first number when the second and third numbers are equal", [1,4,4], 1)

findUniqueTest("tests if it returns undefined when all the numbers are equal", [4,4,4], undefined)
