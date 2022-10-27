/* 1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no */

var e = 3, 
a = [5, -4.2, 18, 7]
result = "";

for (i = 0; i < a.length; i++) {
    if (e === a[i]) {
        result = "yes";
        break;
    } else {
        result = "no";
    }
}

console.log(result);






// var e = 3;
// var a = [5, -4.2, 3, 7];

// var result = "";

// for (var i = 0; i < a.length; i++) {
//   if (e == a[i]) {
//     result = "YES";
//     break;
//   } else {
//     result = "NO";
//   }
// }

// console.log(result);






























































// var e = 3;
// var a = [5, -4.2, 3, 7];

// var result = "";

// for (var i = 0; i < a.length; i++) {
//   if (e == a[i]) {
//     result = "YES";
//     break;
//   } else {
//     result = "NO";
//   }
// }

// console.log(result);






// var arr = [5, -4.2, 3, 7];
// var e = 3;

// for( var i=0; i< arr.length;i++) {
//   if(arr[i]=== e){
//     console.log("Yes");
// break;
//  } else console.log("No");
// }