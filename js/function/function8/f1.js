/* 1. Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2] */


 function rotate(arr, k) {
    for (var i = 0; i < k; i++) {
        arr.push(arr.shift());
    }
    return arr;
    }
    console.log(rotate([1,2,3,4,5,6], 2));
















// function rotArray(array, n) {
//     var newArray = [];
//     for (var i = n, j = 0; i < array.length + n; i++) {
//       if (i >= array.length) {
//         newArray[newArray.length] = array[j];
//         j++;
//       } else {
//         newArray[newArray.length] = array[i];
//       }
//     }
//     return newArray;
//   }
//   var array = [1, 2, 3, 4, 5, 6];
//   var n = 2;
//   var func = rotArray(array, n);
//   console.log(func);
 