const isNerdy = require("./isNerdy");

it("tests if categories include nerdy when the type = success", async () => {
  //given
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          type: "success",
          value: {
            id: 20,
            joke: "The Chuck Norris military unit was not used in the game Civilization 4, because a single Chuck Norris could defeat the entire combined nations of the world in one turn.",
            categories: ["nerdy"],
          },
        }),
    })
  );
  //when
  const result = await isNerdy(20);
  
  //then
  expect(result).toBe(true);
});

it("tests if it returns null when the type is 'NoSuchQuoteException'", async () => {
  //given
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          "type": "NoSuchQuoteException",
          "value": "No quote with id=22."
        }),
    })
  );
  //when
  const result = await isNerdy(22);
  
  //then
  expect(result).toBe(null);
});

it("tests if it returns Unknown type when the type is other than 'NoSuchQuoteException' or 'success'", async () => {
  //given
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          "type": "Something else"
        }),
    })
  );

  console.log = jest.fn(); // mock console log
  //when
  const result = await isNerdy(400);
  
  //then
  
  expect(console.log).toHaveBeenCalledWith("Something else");
  expect(console.log).toHaveBeenCalledWith("Unknown type");
  expect(result).toBe(null);
});