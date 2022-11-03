/*1. Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] ->; [1, 21, 42, 1000] */

function stringToNumber(array) {
    var newArray = [];
    var index = 0;
    for (i = 0; i < array.length; i++) {
      if (array[i] === String(array[i])) {
        newArray[index] = Number(array[i]);
        index++;
      } else continue;
    }
    return newArray;
  }
  var array= ["1", "21", undefined, "42", "1e+3", Infinity];
  var func = stringToNumber(array);
  console.log(func);