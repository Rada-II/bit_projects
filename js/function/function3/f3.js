/*3. Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47] */

function filterOut(arr) {
    return arr.filter(Boolean);
  }
  
  var result = filterOut([NaN, 0, 15, false, -22, '', undefined, 47, null]);
  console.log(result);
