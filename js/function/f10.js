/* 10. Write a program that calculates the number of appearances of a letter a in a given string.
 Modify the program so it calculates the number of both letters a and A.*/

function stringLetters(letter, number) {
  var result = "";

  for (var i = 0; i < letter.length; i++) {
    if (number.toUpperCase() == letter[i] || number.toLowerCase() == letter[i]) {
      result += letter[i];
    }
  }

  return result.length;
}

 var result = stringLetters("RAda", "a")

//console.log(result);


