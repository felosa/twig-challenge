const groupArrayElements = (arr, n) => {

    let result = [];
    const elemPerPart = Math.floor(arr.length / n);
    for (let i = 0; i < n; i++) {
        result.push(arr.slice(0, elemPerPart));
        arr.splice(0, elemPerPart);
    }
    return result;

}


console.log('Example: given the array [1, 2, 3, 4, 5, 6] divided in 3 parts: ', groupArrayElements([1, 2, 3, 4, 5, 6], 3))

module.exports = groupArrayElements;