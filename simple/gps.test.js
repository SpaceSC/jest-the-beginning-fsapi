const gps = require("./gps");

// write tests for all returns

// Classic syntax
it("tests if there's only one checkpoint, the max speed = the only speed", () => {
  expect(gps(3600, [0, 1000])).toBe(1000);
});

it("tests if there are more than one checkpoints, it returns the max speed", () => {
  expect(gps(3600, [0, 1000, 1500])).toBe(1000);
});


// Innovative syntax
function gpsTest(testDescription, seconds, distancesFromOrigin, result) {
  test(testDescription, () => {
    expect(gps(seconds, distancesFromOrigin)).toBe(result);
  });
};

// Call function
gpsTest("tests if there's only one checkpoint, the max speed = the only speed", 3600, [0, 1000], 1000);

gpsTest("tests if there are more than one checkpoints, it returns the max speed", 3600, [0, 1000, 1500], 1000);


