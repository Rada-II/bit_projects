/*3. Write a program to filter out falsy values from the array.
	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
  Output: [15, -22, 47] */
  
function filter(array) {
  var newArray = [];

  for ( i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray[newArray.length] = array[i];
    }
  }
  return newArray;
}
var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
var func = filter(array);
console.log(func); 