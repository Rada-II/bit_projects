/*7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9];
Output array: [4, 3, 5, 8, 6, 11, 2, 9]; */

// var a= [4, 5, 6, 2];
// var b = [3, 8, 11, 9];


// for (var i = 0; i < a.length; i++) {
//     for (var i = 0; i < b.length; i++) {

//        console.log(a[i]);
//        console.log(b[i]);
    
//   }
// }
var array1 = [4,5,6,2];
var array2 = [3,8,11,9];
var array3 = [];
for (var i = 0; i< array1.length; i++){
    array3.push(array1[i]);
    array3.push(array2[i]);
}
console.log (array3);