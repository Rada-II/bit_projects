/*5.(skip :))Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]*/

function descArray(array) {
  
    for (var i = 1; i < array.length; i++) {
      for (var j = 0; j < i; j++) {
        if (array[i] > array[j]) {
          var x = array[i];
          array[i] = array[j];
          array[j] = x;
        }
      }
    }
  
  
    return array;
  }
  var array = [ 13, 11, 15, 5, 6, 1, 8, 12 ];
  var func = descArray(array);
  console.log(func);



































  

// function sortDescending(arr) {
//     var result = arr.sort(function (a, b) {
//       return b - a;
//     });
//     console.log(result);
//   }

//   sortDescending([13, 11, 15, 5, 6, 1, 8, 12]);