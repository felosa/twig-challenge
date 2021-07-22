const getArrayOfArraysWithSameLength = (data, n) => {
  let result = [];
  const numberOfElements = Math.floor(data.length / n);
  for (let i = 0; i < n; i++) {
    result.push(data.slice(0, numberOfElements));
    data.splice(0, numberOfElements);
  }
  return result;
};

const groupArrayElements = (arr, n, rest = []) => {

  if (arr.length === 0 && rest.length === 0) {
    return "The array can't be empty";
  }

  if (n <= 0 || isNaN(n)) {
    return "This should be a positive number";
  }

  if(n > arr.length){
      return "n can't be higher than the array length"
  }

  const arrayCopy = [...arr];
  const isExact = arrayCopy.length % n === 0;

  if (isExact) {
    const result = getArrayOfArraysWithSameLength(arrayCopy, n);

    if (rest.length > 0) {
      result.push(rest);
    }

    return result;
  } else {
    if (rest.length > 0) {
      rest.unshift(arrayCopy.pop());
      return groupArrayElements(arrayCopy, n, rest);
    } else {
      rest.unshift(arrayCopy.pop());
      return groupArrayElements(arrayCopy, n - 1, rest);
    }
  }
};

console.log(
  "Example: given the array [1, 2, 3, 4, 5] divided in 3 parts: ",
  groupArrayElements([1, 2, 3, 4, 5], 3)
);

module.exports = groupArrayElements;
