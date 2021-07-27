const palindromeChainLength = require("./palindromeChainLength");

//console.log(palindromeChainLength(526));

// what it exports, it returns 0 if it's palindrom, test this first

// Test every if branch case

// Classic syntax
it("tests if the result is 0 when the number is a palindrome", () => {
  expect(palindromeChainLength(121)).toBe(0);
});

it("tests if the number can be made into a palindrom in one step when the number is 123", () => {
  expect(palindromeChainLength(123)).toBe(1);
});

it("tests if the number can be made into a palindrom in 2 steps when the number is 526", () => {
  expect(palindromeChainLength(526)).toBe(2);
});

// Innovative syntax
function palindromeChainLengthTest(testDescription, number, result) {
  test(testDescription, () => {
    expect(palindromeChainLength(number)).toBe(result);
  });
}
// Call function
palindromeChainLengthTest("tests if the result is 0 when the number is a palindrome", 121, 0);

palindromeChainLengthTest("tests if the number can be made into a palindrom in one step when the number is 123", 123, 1);

palindromeChainLengthTest("tests if the number can be made into a palindrom in 2 steps when the number is 526", 526, 2);
