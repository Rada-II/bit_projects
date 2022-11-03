/*5. Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
Output: 2*/
function floatNum (array){
  var countFloat = 0;
  for (var i=0; i<array.length; i++)
  if (typeof (array[i]) === 'number' &&
  !Number.isNaN(array[i]) &&
  !Number.isInteger(array[i]))
  countFloat ++;
    return countFloat; 
}

var array1 = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];
var func = floatNum(array1);
console.log(func);