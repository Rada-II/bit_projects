//2. Write a program that checks if a given number is odd.
function isEven(a){
    if (a%2 == 0)
        return "number is even";
    else
        return "number is odd";
}
var result = isEven(9);
console.log(result);