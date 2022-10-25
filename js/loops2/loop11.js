//zadatak 2. Write a program that multiplies every positive element of a given array by 2.
//Input array: [-3, 11, 5, 3.4, -8]
var array =[-3, 11, 5, 3.4, -8];
for (var i = 0; i < array.length; i++){
    if(array[i] > 0){
        array[i]= array[i]*2
    }
    console.log(array[i]);
  }





// var firstArray = [-3, 11, 5, 3.4, -8];
// var result = [];

// for (var i = 0; i < firstArray.length; i++) {
//   if (firstArray[i] > 0) {
//     result = firstArray[i] * 2;
//   } else {
//     result = firstArray[i];
//   }
//   console.log(result);
// }