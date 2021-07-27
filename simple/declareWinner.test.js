const declareWinner = require("./declareWinner");

// write tests for all returns

// Classic syntax
it("tests if it returns fighter1 as winner if he is the first to attack and the damage is >= fighter2' health", () => {
  expect(
    declareWinner(
      { name: "fighter1Name", damagePerAttack: 2, health: 3 },
      { name: "fighter2Name", damagePerAttack: 2, health: 2 },
      "fighter1Name"
    )
  ).toBe("fighter1Name");
});

it("tests if it returns fighter1 as winner if fighter2 is the first to attack but fighter1 has more health than fighter2's damage", () => {
  expect(
    declareWinner(
      { name: "fighter1Name", damagePerAttack: 2, health: 3 },
      { name: "fighter2Name", damagePerAttack: 2, health: 2 },
      "fighter2Name"
    )
  ).toBe("fighter1Name");
});

it("tests if it returns fighter2 as winner if fighter1 is the first to attack but fighter1 has health <= fighter2's damage in the 3rd (odd) attack", () => {
  expect(
    declareWinner(
      { name: "fighter1Name", damagePerAttack: 2, health: 7 },
      { name: "fighter2Name", damagePerAttack: 4, health: 40 },
      "fighter1Name"
    )
  ).toBe("fighter2Name");
});

// Innovative syntax
function declareWinnerTest(testDescription, fighter1, fighter2, firstAttacker, result) {
  test(testDescription, () => {
    expect(declareWinner(fighter1, fighter2, firstAttacker)).toBe(result);
  });
}

// Call function
declareWinnerTest("tests if it returns fighter1 as winner if he is the first to attack and the damage is >= fighter2' health", { name: "fighter1Name", damagePerAttack: 2, health: 3 },
{ name: "fighter2Name", damagePerAttack: 2, health: 2 },
"fighter1Name", "fighter1Name");

declareWinnerTest("tests if it returns fighter1 as winner if fighter2 is the first to attack but fighter1 has more health than fighter2's damage", { name: "fighter1Name", damagePerAttack: 2, health: 3 },
{ name: "fighter2Name", damagePerAttack: 2, health: 2 },
"fighter2Name", "fighter1Name");

declareWinnerTest("tests if it returns fighter2 as winner if fighter1 is the first to attack but fighter1 has health <= fighter2's damage in the 3rd (odd) attack", { name: "fighter1Name", damagePerAttack: 2, health: 7 },
{ name: "fighter2Name", damagePerAttack: 4, health: 40 },
"fighter1Name", "fighter2Name");


