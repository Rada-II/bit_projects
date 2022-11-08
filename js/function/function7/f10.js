/* 10. Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false */


function isPrime(num) {
    var prime = ""; //false;
    for(var i = num-1; i>1; i--) {
        if(num % i == 0) {
            prime = false;
            break;
        } else {
            prime = true;
        }
    }
    return prime;
}
var result = isPrime(17);
 console.log(result);
