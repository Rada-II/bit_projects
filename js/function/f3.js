//3. Write a program that checks if a given number is a three digit long number.

function digit(a){
    if (a>99 && a<1000)
        return "number is three digit long ";
    else
        return "number is not three digit long";
}
var result = digit(10000);
console.log(result);