//10. Write a function to get the first n characters and add “...” at the end of newly created string.

function newlyString(string, number) {
  if (string.length > number) {
    return string.slice(0, number) + "...";
  } else {
    return string;
  }
}
var result = newlyString("My random string", 7);
console.log(result);
















// var string = "My random string";
// var n = 5;

// function newString (string, num) {
//   var result = "";
//   var add = "..."
//   for (var i = 0; i < num; i++) {
//       result += string[i];
//   }
//   result += add;
  
//   return result;
// }
// var func = newString(string, n);
// console.log(func);



