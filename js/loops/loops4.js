//4. Write a code to display the n terms of even natural number and their sum.
//Example:Input number of terms - 5. Expected output: "The even numbers are 2, 4, 6, 8, 10".
 
var sum = 0;
var term = 5;

for (var i = 2; i <= 2 * term; i+=2) {
console.log("The even numbers are", i)
    //sum = sum + i;
    sum += i;  
}

console.log('sum:', sum);





// var i; var rez = 5; var sum=0;
// for (i=1; i <= rez; i++){
//     if(i%2==0){ 
//         console.log(i);
//         sum+=i;
//     }
// }
// console.log(sum);































// var z=5;//broj elemenata
// var result=0;
// for (var i = 2; i <= z*2; i=i+2) {
//     result += i+2;
//     console.log("even natural number is:  "+ i);
// }
// console.log("Their sum is:  "+ result);

// var number = 4;
// var result = number * (number + 1);
// var array = [];


// // for (let i = number * 2; i >= 1; i--) {
// //   if (i % 2 == Number.isInteger()) {
// //     arr.push(i);
// //   }
// // }

// // console.log(`The even numbers are ${arr} and the sum is ${result}`);