const monkeyTalk = require("./monkeyTalk");

// JEST SMOKE TEST
it('Test if jest works', () => {
  expect(1).toBe(1)
})

// Classic syntax
it("tests if the result is 'Eek.' when the phrase starts with a vowel", () => {
  expect(monkeyTalk("aardvark")).toBe("Eek.")
})

it("tests if the result is 'Ook.' when the phrase starts with a consonant", () => {
  expect(monkeyTalk("aardvark")).toBe("Eek.")
})

// Innovative syntax
function monkeyTalkTest(testDescription, phrase, result) {
  test(testDescription, () => {
    expect(monkeyTalk(phrase)).toBe(result);
  });
}

// Call function
monkeyTalkTest("It tests if the result is 'Eek.' when the phrase starts with a vowel", "aardvark", "Eek.")

// Call function
monkeyTalkTest("It tests if the result is 'Ook.' when the phrase starts with a consonant", "banooon", "Ook.")



//console.log(monkeyTalk("banón"));