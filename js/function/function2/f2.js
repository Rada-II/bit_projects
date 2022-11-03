//2. Write a function to check whether a string is blank or not.
//"My random string" -> false
//" " -> true
//12 -> false
//false -> false

function stringIsBlank(input) {
  if (input.length === 0)
    //var input = input.length;
    return true;
  else
    return false;
}
var input = "  ";
//var input1 = input.trim();
var func = stringIsBlank(input.trim());
console.log(func);
// console.log(stringIsBlank(12));
// console.log(stringIsBlank(false));
// console.log(stringIsBlank("My random string"));