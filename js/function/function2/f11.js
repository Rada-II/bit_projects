/*11. Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] ->; [1, 21, 42, 1000] */



function convertArray(array) {
  var result = [];

  for (i = 0; i < array.length; i++) {
    if (isFinite(array[i])) {
      result[result.length] = parseFloat(array[i]);
    }
  }
  return result;
}
var array = ["1", "21", undefined, "42", "1e+3", Infinity];
console.log(convertArray(array));





















// function filterNumber(array) {
//     numbers = array.filter(Number);
//     return numbers;
// }
// var result = filterNumber(["1", "21", undefined, "42", "1e+3", Infinity]);
// var toNumbers = result.map(Number);
// console.log(toNumbers);