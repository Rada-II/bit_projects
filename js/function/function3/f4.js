/*4. Write a function that reverses a number. The result must be a number.
12345 -> 54321 // Output must be a number */

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
var result = (Number(reverse_a_number(12345)));
console.log(result);