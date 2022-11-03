/*4. Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2 */

function nextToMin(array) {
  var min = array[0];
  var nextMin = array[1];
  if (min>nextMin)
  { 
    min = array[1];
    nextMin = array[0];
  }
  for (var i = 2; i < array.length; i++) {
    if (array[i] < min) {
      nextMin = min;
      min = array[i];
    } else if (array[i] < nextMin) {
      nextMin = array[i];
    }
  }
  return nextMin;
}

var array = [4, 2, 2, -1, 6];
var func = nextToMin(array);
console.log(func);