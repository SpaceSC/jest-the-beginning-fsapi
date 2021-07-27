const greet = require("./greet");

beforeAll(() => {
  console.log = jest.fn(); // mock console log
});

afterEach(() => {
  jest.useRealTimers(); // resets time, but now fake time is set every time, so it's optional
  jest.clearAllMocks();
});

it("tests if it logs 'Heyho!' if age < 30 and it is morning", () => {
  //given
  const age = 29;

  jest
  .useFakeTimers('modern')
  .setSystemTime(new Date('2020-01-01T09:00:00').getTime());

  
  //when
  greet(age)

  //then
  expect(console.log).toHaveBeenCalledWith('Heyho!');
});

it("tests if it logs 'Good morning' if age >= 30 and it is morning", () => {
  //given
  const age = 30;

  jest
  .useFakeTimers('modern')
  .setSystemTime(new Date('2020-01-01T09:00:00').getTime());

  
  //when
  greet(age)

  //then
  expect(console.log).toHaveBeenCalledWith('Good morning');
});

it("tests if it logs 'Hello...' if age < 30 and it is evening", () => {
  //given
  const age = 18;

  jest
  .useFakeTimers('modern')
  .setSystemTime(new Date('2020-01-01T22:00:00').getTime());

  
  //when
  greet(age)

  //then
  expect(console.log).toHaveBeenCalledWith('Hello...');
});

it("tests if it logs 'Good evening' if age >= 30 and it is evening", () => {
  //given
  const age = 32;

  jest
  .useFakeTimers('modern')
  .setSystemTime(new Date('2020-01-01T22:00:00').getTime());

  
  //when
  greet(age)

  //then
  expect(console.log).toHaveBeenCalledWith('Good evening');
});

it("tests if it logs 'Hi' if age < 30 between 9:00-17:00", () => {
  //given
  const age = 28;

  jest
  .useFakeTimers('modern')
  .setSystemTime(new Date('2020-01-01T14:00:00').getTime());

  
  //when
  greet(age)

  //then
  expect(console.log).toHaveBeenCalledWith('Hi');
});

it("tests if it logs 'Good day' if age >= 30 between 9:00-17:00", () => {
  //given
  const age = 34;

  jest
  .useFakeTimers('modern')
  .setSystemTime(new Date('2020-01-01T14:00:00').getTime());

  
  //when
  greet(age)

  //then
  expect(console.log).toHaveBeenCalledWith('Good day');
});