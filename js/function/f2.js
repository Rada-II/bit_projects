//2. Write a program that checks if a given number is odd.
function isOdd(a){
    if (a%2 == 0)
        return "number is even";
    else
        return "number is odd";
}
var result = isOdd(9);
console.log(result);