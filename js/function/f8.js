/*8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
result: 3 */

function appearances(array, number) {
  var result = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] == number) {
      result.push(array[i]);
    }
  }

  return result.length;
}
var result = appearances([2, 4, 7, 8, 7, 7, 1],7);
console.log(result);




















// function countOccurrences(array,n,x)
//     {
//         var result = 0;
//         for (var i=0; i<n; i++)
//         {
//             if (x == array[i])
//                 result++;
//         }
//         return result;
//     }
     
//     var array = [2, 4, 7, 8, 7, 7, 1];
//     var  n = array.length;
//     var x = 7;
//     var result = countOccurrences(array, n, x);
//     console.log(result);
     