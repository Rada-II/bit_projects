    // 10. Write a program that inserts a given element e on the given position p in the array a.
    // If the value of the position is greater than the array length, print the error message.
    // Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
    // Output: [2, -2, 33, 78, 12, 5, 8]

    var someArr14 = [2, -2, 33, 12, 5, 8];
    var input3 = 78;
    var position = 3;
    var someArr15 = [];

    if (position > someArr14.length) {
      someArr15 = "Error";
    } else {
      for (var ii = 0; ii < someArr14.length; ii++) {
        if (ii !== position) {
          someArr15[ii] = someArr14[ii];
        } else {
          someArr15[ii] = input3;
          break;
        }
      }

      for (var jj = position + 1; jj <= someArr14.length; jj++) {
        console.log(jj);
        someArr15[jj] = someArr14[jj - 1];
      }
    } // end else

    console.log(someArr15);

















// 9. Write a program that deletes a given element e from the array a.
    // Input: e = 2, a = [4, 6, 2, 8, 2, 2]
    // Output array: [4, 6, 8]
    // var someArr12 = [4, 6, 2, 8, 2, 2];
    // var input2 = 2;
    // var someArr13 = [];
    // var someArr13Index = 0;

    // for (var x = 0; x < someArr12.length; x++) {
    //   if (someArr12[x] !== input2) {
    //     someArr13[someArr13Index] = someArr12[x];
    //     someArr13Index++;
    //   }
    // }
    // console.log(someArr13);




























// 8. Write a program that concatenates two arrays.
    // Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
    // Output array: [4, 5, 6, 2, 3, 8, 11, 9]
    // someArr8 = [4, 5, 6, 2];
    // someArr9 = [3, 8, 11, 9];
    // var someArr11 = [];
    // var cIndex = someArr8.length;

    // for (var z = 0; z < someArr8.length; z++) {
    //   someArr11[z] = someArr8[z];
    //   someArr11[cIndex] = someArr9[z];
    //   cIndex++;
    // }

    // console.log(someArr11);

















// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same length.
    // Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
    // Output array: [4, 3, 5, 8, 6, 11, 2, 9]

// var someArr8 = [4, 5, 6, 2];
// var someArr9 = [3, 8, 11, 9];
// var someArr10 = [];
// var xIndex = 0;
// var zIndex = 1;

// for (var g = 0; g < someArr8.length; g++) {
//   someArr10[xIndex] = someArr8[g];
//   someArr10[zIndex] = someArr9[g];
//   xIndex += 2;
//   zIndex += 2;
// }

// console.log(someArr10);