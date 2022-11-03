/*6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * * /*/
function starPattern(a, b, c) {
     
      var result = "";
     
    
      for (var i = 0; i < a; i++) {
        result += "*";
      }
      result+="\n";
      for (var j = 0; j < b; j++) {
        result += "*";
      }
      result+="\n";
      for (var n = 0; n < c; n++) {
        result+= "*";
      }
       return result;
      
      
    }
    var result = starPattern(5,3,7);
    console.log(result);






























    //return "" + result1 + "\n" + result2 + "\n" + result3;

    //`${result1}\n${result2}\n${result3}`;