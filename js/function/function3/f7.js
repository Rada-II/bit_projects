/*7. Write a function that says whether a number is perfect.
28 -> 28 is a perfect number.*/
function perfectNumber(num) {
    var result = "";
    var sum = 0;
    for (var i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    if (num === sum) {
      result = "Number " + num + " is perfect!";
    } else {
      result = "Number " + num + " is not perfect!";
    }
  
    return result;
  }
  var num = 8128;
  var func = perfectNumber(num)
  console.log(func);