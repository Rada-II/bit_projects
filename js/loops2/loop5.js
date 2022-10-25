// Write a program which prints the elements of the following array as a single string.
var array = ['1','A','B','c','r', true, NaN, undefined];
var string = "";

for (i = 0; i < array.length; i++) {
    string += array[i] + "";
}

console.log(string);















// for (var i = 0; i < array.length; i++){
//     console.log((i + 1) + '. ' + array[i])
// }