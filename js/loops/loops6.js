// var text = "Eclip542se";
//Write a code to count all letters in a word and show that count on screen. 
//Example: Given word is "Eclip542se". Result should be something like "There is 7 letters in this word".
// var sum = 0;
// var input = "Eclip542se";


// for (var i = 0; i < input.length; i++) {
//     var a = input[i];
//     if (isNaN(a)){
//       sum++;
//     }
//   }

// console.log('There are', sum ,'letters in this word .');






var word = "Eclip542se";
var sumLetters = word.length;

for (var index in word) {
  if (
    word[index] === "0" ||
    word[index] === "1" ||
    word[index] === "2" ||
    word[index] === "3" ||
    word[index] === "4" ||
    word[index] === "5" ||
    word[index] === "6" ||
    word[index] === "7" ||
    word[index] === "8" ||
    word[index] === "9"
  ) {
    sumLetters--;
  }
}

console.log("There is " + sumLetters + " letters in word " + word);
  













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


// var word ="Eclip542se";
// var num;
//     for(i=0; i <= word.length; i++){
//         num = i;
//     }
//     console.log("Duzina niza je :"+num);