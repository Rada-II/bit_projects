/*6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * * /*/
function starPattern(a, b, c) {
      var star = "*";
      var result1 = "";
      var result2 = "";
      var result3 = "";
    
      for (var i = 0; i < a; i++) {
        result1 += star;
      }
    
      for (var j = 0; j < b; j++) {
        result2 += star;
      }
      for (var n = 0; n < c; n++) {
        result3 += star;
      }
    
      return "" + result1 + "\n" + result2 + "\n" + result3;
      
    }
    var result = starPattern(5,3,7);
    console.log(result);




















    //`${result1}\n${result2}\n${result3}`;