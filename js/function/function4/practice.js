function reverseString(str){
    var result = "";
for (var i = str.length-1; i >=0; i--){
      result += str[i]
}
return result;  
}
var res = reverseString('nekiMail dejan');
console.log(res);


// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// reverseString('hello');


// function reverseString2(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// var inp23 = reverseString2('dajMail');
// console.log(inp23);