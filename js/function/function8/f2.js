/*2. Write a function that takes a number and returns array of its digits.*/

function numToArr(num){
    return num.toString().split('').map(Number);
}
var num = 1230945;
var result=numToArr(num);
console.log(result);



// function numToArr (num){
//       num = num.toString();
//       let numArr = []
//       for (let i = 0; i < num.length; i++) {
//         numArr.push(num[i])
//       }
//       return numArr;
//     }
// console.log(numToArr(23456));
