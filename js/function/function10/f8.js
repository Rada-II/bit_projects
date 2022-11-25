/* 1. Write a function that checks if a given string contains digit 5.
Input: “1b895abd” 
Output: true
Input: “1bser9re”
Output: false */

function specialNum(string) {

    const specialNum = /[5]/;

    if (specialNum.test(string)) {
        return true;
    } else {

        return false;
    }
}   //"normal 'named' function"

console.log(specialNum('1b895abd'));
console.log(specialNum('1bserabd'));


(function (string) {

    const specialNum = /[5]/;

    if (specialNum.test(string)) {
        console.log(true);
    } else {
        console.log(false);
    }

})('1b895abd');   //self-invoking anonymous function 


let includesNumber = function (string) {

    const specialNum = /[5]/;

    if (specialNum.test(string)) {

        return true;
    } else {

        return false;
    }
}    // "normal" anonymous function 

console.log(includesNumber('1bserabd'));