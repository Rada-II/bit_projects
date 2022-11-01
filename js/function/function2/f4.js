//4. Write a function to count the number of letter occurrences in a string.
//"My random string";, "n"; -> 2

function letterOccurrences(string, letter) {
    var n = 0;
    for (i = 0; i < string.length; i++) {
      if (string[i] === letter) {
        n++;
      }
    }
    return n;
  }
  
  var letterOccurrences = letterOccurrences("My random string", "n");
  console.log(letterOccurrences);

















// function letterApperances(string, letter) {
//     var result = "";
//     var a = 0;
//     for (i = 0; i < string.length; i++) {
//       if (string[i] == letter) {
//         a++;
//       }
//     }
//     result += "Letter " + letter + " in string '" + string + "' shows " + a + " times";
  
//     return result;
//   }
  
//   var string = "My random string";
//   var letter = "n";
//   console.log(letterApperances(string, letter));