/*5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1.*/


function firstOccurrence(string, letter) {
      let result = "";
    
      // result = string.indexOf(letter);            
      for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
          result = string.indexOf(letter);
          break;                                //zasto ovde break?
        }else{
            result = "-1";
        }
      }
    
      return result;
    }
    var firstOccurrence = firstOccurrence("My random string", "c");
    console.log(firstOccurrence);
    






















   
    
