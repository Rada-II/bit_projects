//1.Write a program that calculates the maximum of two given numbers.

function max(a,b) {
    if (a > b) {
        return a;
    } else {
      return b;
    }
}

var result = max(7,9);
console.log(result);