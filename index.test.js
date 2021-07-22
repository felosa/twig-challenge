const groupArrayElements = require('./index');

test('returns error if the array is empty', () => {
    const expected = "The array can't be empty"
    expect(groupArrayElements([], 3)).toBe(expected);
});

test('returns error if N is not a positive number', () => {
    const expected = "The number should be positive"
    expect(groupArrayElements([1, 2, 3, 4, 5, 6], -3)).toBe(expected);
});


test('returns an array of arrays with the same length', () => {
    expect(groupArrayElements([1, 2, 3, 4, 5, 6], 3)).toStrictEqual([[1, 2], [3, 4], [5, 6]]);
});

