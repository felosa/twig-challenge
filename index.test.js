const groupArrayElements = require("./index");

test("returns error if the array is empty", () => {
  const expected = "The array can't be empty";
  expect(groupArrayElements([], 3)).toBe(expected);
});

test("returns error if N is not a positive number", () => {
  const expected = "This should be a positive number";
  expect(groupArrayElements([1, 2, 3, 4, 5, 6], -3)).toBe(expected);
});

test("returns error if N is higher than the array length", () => {
  const expected = "n can't be higher than the array length";
  expect(groupArrayElements([1, 2, 3, 4], 5)).toBe(expected);
});

test("returns an array of arrays with the same length", () => {
  expect(groupArrayElements([1, 2, 3, 4, 5, 6], 3)).toStrictEqual([
    [1, 2],
    [3, 4],
    [5, 6],
  ]);
});

test("returns an array of arrays with the last array having different length", () => {
  expect(groupArrayElements([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7],
  ]);
});
