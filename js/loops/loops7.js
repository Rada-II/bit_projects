//7. Write a code to find on which index in array is letter "C" and show that index on screen. 
//Given array is: [1, 3, 32, $, g, h, t,  s, c, 66, 23, h2].

var array = [1, 3, 32, "$", "g", "h", "t", "s", "c", 66, 23, "h2"];
for (var i = 0; i < array.length; i++){
  if (array[i] === "c") console.log("index is" ,i);
}







// var arr = [1, 3, 32, "$", "g", "h", "t", "s", "c", 66, 23, "h2"];
// var letter = "C";

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == letter.toLocaleLowerCase() || arr[i] == letter.toUpperCase()) {
//     console.log(`Its in ${arr.indexOf(arr[i])} index of array`);
//   }
// }