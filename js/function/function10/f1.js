/*1. Write IIFE that replaces the first and the last element of the given array and prints out its
elements.
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4] */


(function (arr) {
    
    let element = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = element;
    console.log(arr);
    // return arr;
})([4, 5, 11, 9]);



// var arr=[4, 5, 11, 9];
// (function (arr) {
//     var a = arr[0];
//     arr[0] = arr[arr.length-1];
//     arr[arr.length-1] = a;
//     console.log(arr);
//     // return arr;
// })(arr);