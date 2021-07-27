const uniqueInOrder = require("./uniqueInOrder");

// write tests for all returns

// Classic syntax
it("tests if the iterable is an empty array, it returns an empty array", () => {
  expect(uniqueInOrder([])).toStrictEqual([]);
});

it("tests if the iterable.length = 1, it returns the iterable array", () => {
  expect(uniqueInOrder(["kutya"])).toStrictEqual(["kutya"]);
});

it("tests if the iterable.length > 1, it only returns the elements that had no duplicate neighbors", () => {
  expect(uniqueInOrder(["kutya", "kutya", "cica"])).toStrictEqual(["kutya", "cica"]);
});

// Innovative syntax
function uniqueInOrderTest(testDescription, iterable, result) {
  test(testDescription, () => {
    expect(uniqueInOrder(iterable)).toStrictEqual(result);
  });
}

// Call function
uniqueInOrderTest("tests if the iterable is an empty array, it returns an empty array", [], []);

uniqueInOrderTest("tests if the iterable.length = 1, it returns the iterable array", ["kutya"], ["kutya"]);

uniqueInOrderTest("tests if the iterable.length > 1, it only returns the elements that had no duplicate neighbors", ["kutya", "kutya", "cica"], ["kutya", "cica"]);

