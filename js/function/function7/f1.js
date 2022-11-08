/* 1. Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ] */

function switchPlaces(array) {
    var min = array[0];
    var max = array[0];
    var newArray = array;
  
    for (var i = 0; i < array.length; i++) {
      if (min > array[i]) {
        min = array[i];
        var minIndex = i;
      }
  
      if (max < array[i]) {
        max = array[i];
        var maxIndex = i;
      }
    }
    newArray[minIndex] = max;
    newArray[maxIndex] = min;
  
    return newArray;
  }
  var array = [3, 500, 12, 149, 53, 414, 1, 19];
  var func = switchPlaces(array);
  console.log(func);































// var nums = [3, 500, 12, 149, 53, 414, 1, 19];
// console.log(Math.min.apply(Math, nums));
// console.log(Math.max.apply(Math, nums));
// function swapElements(nums, i1, i2) {
//   let temp = nums[i1];
//   nums[i1] = nums[i2];
//   nums[i2] = temp;
// }
// swapElements(nums, 1, 6);
// console.log(nums);