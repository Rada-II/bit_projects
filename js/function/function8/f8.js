/*8. Write a function to find the average of N elements. Make the function flexible to receive
dynamic number or parameters. */

function averageEl(){
  'use strict'
  var sum = 0;
  var avg;
  for ( var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  avg = sum / arguments.length;
  return avg;
}

var func = averageEl(12, 15, 18, 120, -25, 3, 63);
console.log(func);