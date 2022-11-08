/*8.	Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB */

function reverse(s){
    return s.split("").reverse().join("");
}
var result = (String(reverse("Belgrade Institute of Technology")));
console.log(result);


// function reversedString(string) {
//     var result = "";
//     for (var i = string.length - 1; i >= 0; i--) {
//       result += string[i];
//     }
//     return result;
//   } 
//   var string = "Belgrade Institute of Technology";

//   var func = reversedString(string);
//   console.log(func);






















// var string = 'Belgrade Institute of Technology';
// var newstring = '';

// for(let i = 0; i < string.length; i++){
//     newstring = string[i] += newstring;
// }

// console.log(newstring);

// function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// var result = (Number(reverse_a_number(12345)));
// console.log(result);