// var text = "Eclip542se";
//Write a code to count all letters in a word and show that count on screen. 
//Example: Given word is "Eclip542se". Result should be something like "There is 7 letters in this word".
var sum = 0;
var input = "Eclip542se";


for (var i = 0; i < input.length; i++) {
    var a = input[i];
    if (isNaN(a)){
      sum++;
    }
  }

console.log('There are', sum ,'letters in this word .');










// var myArray = text.split("");
// let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let myAlphabet = alphabet.split("");
// let result = [];

// for (let i = 0; i < myArray.length; i++) {
//   for (let n = 0; n < myAlphabet.length; n++)
//     if (myArray[i] == myAlphabet[n]) {
//       result.push(myArray[i]);
//     }
// }

// console.log(`There is ${result.length} letters in this word`);