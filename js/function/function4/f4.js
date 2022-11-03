/*4. Write a program that calculates a number of integer values in the array.
	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
  Output: 3*/
  
function integerNumber(array) {
  var counter = 0;
  for (i = 0; i < array.length; i++) {
    var intNumber = parseInt(array[i]);
    if (isFinite(intNumber) && parseFloat(array[i]) === intNumber){
      counter++;
    } 
      

  }
  return counter;
}
var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
var func = integerNumber(array);
console.log(func);
