/*8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.*/
function isPrime(num) {
    var prime = ""; //false;
    for(var i = num-1; i>1; i--) {
        if(num % i == 0) {
            prime = num + " it is not prime number";//false;
            break;
        } else {
            prime = "it is prime number";//true;
        }
    }
    return prime;
}
var result = isPrime(4);
 console.log(result);

























// function isPrimeNum(num) {
//     var result = "";

//     if (num <= 1) {
//       result = num + " is NOT prime";
//     } else if (num === 2) {
//       result = num + " is prime";
//     } else {
//       for (var i = 2; i < num; i++) {
//         if (num % i === 0) {
//           result = num + " is NOT prime";
//           break;
//         } else {
//           result = num + " is prime";
//         }
//       }
//     }

//     return console.log(result);
//   }
//   isPrimeNum(5);









//  var num = 123;

// function prime(num) {
//   var string = "";
//   if (num > 1) {
//     if (num !== 2) {
//       for (i = 2; i < num; i++) {
//         if (num % i === 0) {
//           string = "Number is not prime";
//           break;
//         } else {
//           string = "Number is prime";
//         }
//       }
//     } else {
//       string = "Number is prime";
//     }
//   } else {
//     string = "Number is lower than 2. Please type number greather than 1";
//   }
//   return string;
// }
// console.log(prime(num));







