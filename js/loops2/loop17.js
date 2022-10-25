/*8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

// var a= [4, 5, 6, 2];
// var b = [3, 8, 11, 9];


// for (var i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }
// for (var i = 0; i < b.length; i++) {
//        console.log(b[i]);
//  }


var array1 = [4,5,6,2];
var array2 = [3,8,11,9];
for (var i = 0; i< array2.length; i++){
    if(!array1.includes(array2[i]))
        array1.push(array2[i]);
}
console.log (array1);
//ni ovo nismo radili ali daje onako bi trebalo da bude resenje




