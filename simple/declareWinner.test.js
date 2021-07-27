const gps = require("./declareWinner");

// write tests for all returns

// Classic syntax
it("tests if there's only one checkpoint, the max speed = the only speed", () => {
  expect(gps(3600, [0, 1000])).toBe(1000);
});




// // Innovative syntax
// function declareWinnerTest(testDescription, fighter1, fighter2, firstAttacker result) {
//   test(testDescription, () => {
//     expect(gps(seconds, distancesFromOrigin)).toBe(result);
//   });
// }

// // Call function
// declareWinnerTest("tests if there's only one checkpoint, the max speed = the only speed", 3600, [0, 1000], 1000);




