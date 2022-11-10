/* 11. Write a function that takes a list of strings and prints them, one per line, in a rectangular
frame.:
For example the list ["Hello", "World", "in", "a", "frame"] gets
printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********  */

function helloWorld(array){
    var p = "";
    var x = "";
    for(var i = 0; i < array.length; i++){
      if(array[i].length > p.length){ // najduza rec
        p = array[i]
      }
    }
    var line = p.length + 4; // najduza rec + 4 mesta
    for(var j = 0; j < line; j++){
      x += "*"   //  prvi red
    }
    console.log(x);
    for(var k = 0; k < array.length; k++){
      x = "* " + array[k];
      var countSpace = line - x.length-1;
      for(var l = 0; l < countSpace; l++){
        x += " "
      } 
      x+="*"
      console.log(x)
    }
    x = ""; 
    for(var m = 0; m < line; m++){
      x += "*"   //  zadnji red
    }
    console.log(x)
  }
  var arr = ["Hello", "World", "in", "a", "frame"];
  helloWorld(arr);







































































// function makeFrame(array) {                                       

//     let maxWordLength = 0;
//     let topAndBottomString = "";
//     let topAndBottomLength = 0;
//     let middlePart = "";
//     let spaceLength = 0
//     let spaceString = ""; 
//     let frame = "";

//     function makeStringFromChar (char, num) {
//         let resultString = "";
//         for (let i = 0; i < num; i++) {
//             resultString += char;
//         }
//         return resultString;
//     }
//     // find longest word
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].length > maxWordLength) {
//             maxWordLength = array[i]. length;
//         }
//     }
//     // make top and bottom strings
//     topAndBottomLength = maxWordLength + 4;
//     topAndBottomString = makeStringFromChar ("*", topAndBottomLength);
//     //create middle part
//     for (let k = 0; k < array.length; k++) {
//         spaceLength = maxWordLength - array[k].length;
//         spaceString = makeStringFromChar(" ", spaceLength);
//         middlePart += "* " + array[k] + spaceString + " *\n";
//     }
//     // create frame
//     frame = topAndBottomString + "\n" + middlePart + topAndBottomString;

//     return frame;
// }

// console.log(makeFrame(["Hello", "World", "in", "a", "frame"]));
