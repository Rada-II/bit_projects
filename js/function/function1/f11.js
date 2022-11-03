/*11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc.*/

function concatenation(string, number) {
  var result = "";

  for (let i = 0; i < number; i++) {
    result += string;
  }

  return result;
}
var result = concatenation("abc",4)
console.log(result);