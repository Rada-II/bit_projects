/*. Write a function to get the last element of an array. Passing a parameter 'n' will return the
last 'n' elements of the array.
[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]*/

function lastElement(array, n) {
    newArray = array.slice(array.length - n), array.length;
    
    return newArray;
}  
  

var func = lastElement([7, 9, 0, -2],2);
console.log(func);


//var y = [7, 9, 0, -2];

// console.log(y.slice((y.length - 2), y.length))
//  //array.slice(-n);





















//[7, 9, 0, -2].slice().reverse([2]);