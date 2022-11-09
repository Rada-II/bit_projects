/* 11.	Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true                      */

// function isPalindrome(str) {
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] != str[str.length - i - 1]) {
//             return false;
//         }
//     }
//     return true;
// }
 
// console.log(isPalindrome("geek"));


function reflectivePalindrome (string) {
    return string === string.split('').reverse().join('');
  };

  var result = (String(reflectivePalindrome("eye")));
  console.log(result);

// Komentar: "a nut for a jar of tuna" je palindrom, tebi funkcija vraca da nije.
