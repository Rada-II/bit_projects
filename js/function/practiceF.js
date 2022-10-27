var a = 5;
var string ="";
function starPattern(a) {
         var result = "";
         
    for (var i = 0; i < a; i++) {
      result += "*";
    }
    result+="\n";
    for(var d = 0; d < a-2; d++){
      result+="*";
      for(var r = 0; r < a-2; r++){
        result+=" " ; 
      }
      result+="*";
      break;
      result+="\n";
    }
        for (var j = 0; j < a; j++) {
      result += "*";
    }
    result+="\n";
    return result;
}
var result = starPattern(10);
    console.log(result);