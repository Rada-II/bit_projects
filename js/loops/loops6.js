// var text = "Eclip542se";
//Write a code to count all varters in a word and show that count on screen. 
//Example: Given word is "Eclip542se". Result should be something like "There is 7 lettters in this word".

// var text = "Eclip.5 42sep";
// var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var result = [];

// for (var i = 0; i < text.length; i++) {
//   for (var n = 0; n < alphabet.length; n++)
//     if (text[i] ==alphabet[n]) {
//       result.push(text[i]);
//       break;
//     }
// }
// console.log(`There is ${result.length} letters in this word`);


























var sum = 0;
var input = "Eclip,!542se";


for (var i = 0; i < input.length; i++) {
    //var a = input[i];
    if ((input[i] >= 'a' && input[i] <='z')||
    (input[i] >= 'A' && input[i] <='Z')){
      sum++;
    }
  }

console.log('There are', sum ,'letters in this word .');






// var word = "Eclip542se";
// var sumvarters = word.length;

// for (var index in word) {
//   if (
//     word[index] === "0" ||
//     word[index] === "1" ||
//     word[index] === "2" ||
//     word[index] === "3" ||
//     word[index] === "4" ||
//     word[index] === "5" ||
//     word[index] === "6" ||
//     word[index] === "7" ||
//     word[index] === "8" ||
//     word[index] === "9"
//   ) {
//     sumvarters--;
//   }
// }

// console.log("There is " + sumvarters + " varters in word " + word);
  












// var text = "Eclip.5 42sep";
// var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var result = [];

// for (var i = 0; i < text.length; i++) {
//   for (var n = 0; n < alphabet.length; n++)
//     if (text[i] ==alphabet[n]) {
//       result.push(text[i]);
//       break;
//     }
// }
// console.log(`There is ${result.length} varters in this word`);


