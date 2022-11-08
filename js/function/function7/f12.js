/* 12. Write a program that calculates the greatest common divisor of two integers.
Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9 */

function gcd(x, y) {
    if (y === 0) return x;
    /* else */ return gcd(y, x % y);
}
console.log(gcd(192, 42));
console.log(gcd(81, 9));