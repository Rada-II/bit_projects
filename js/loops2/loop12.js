//3.Write a program that finds the minimum of a given array and prints out its value and index.
//Input array: [4, 2, 2, -1, 6]
//Output: -1, 3
var array = [4, 2, 2, -1, 6]
var index = 0;
var minimum = array[0];
for (var i = 0; i < array.length; i++) {
  if (minimum>array[i]) {
    minimum = array[i];
    index = i;
  }
}
console.log("Najmanja vrednost je:", minimum,"a indeks je:", index)











// var minimum = Number.MAX_SAFE_INTEGER;
// var index = -1;
// for (var i=0; i< array.length; i++){
//   if (array[i] < minimum){
//        minimum = array[i];
//        index = i;
//    }
// }
// console.log("Najmanja vrednost : " + minimum + ", indeks : " + index)







// for (var i = 0; i < array.length; i++){
//     if (array[i] > max) console.log(i);
//     if (testArray[i] > max) {
//         max = testArray[i];
//       }
//   }
//   let max = testArray[0];
// for (let i = 1; i < testArrayLength; ++i) {
//   if (testArray[i] > max) {
//     max = testArray[i];
//   }
// }