//5. Napisati funkciju koja vraca najveci I najmanji element niza. Rezultat prikazati kao niz.

var array = [1, 15, 21, 3, 84, 32, 4, 5];

function minMax (array) {
  'use strict'
  var min = array[0];
  var max = array[0];
  var newArray = [];
  for (var  i = 0; i < array.length; i++ ) {
    if ( array[i] < min ) {
      min = array[i];
    }

    if(array[i] > max) {
      max = array[i];
    }
  }
  newArray[0] = min;
  newArray[1] = max;
  return newArray;
}
var array = [1, 15, 21, 3, 84, 32, 4, 5];
var func = minMax(array);
console.log(func);




