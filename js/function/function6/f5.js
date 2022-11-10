/*5. Kreirati funkciiu koia prihvata niz stringova kao ulazni parametar, a na izlazu
ispisuie samo stringove koii u sebi ne sadrže brojeve. Primer: ulazni niz [“12bb",
“pp", “as23s", “00sd"] -> rezultat [“pp"].*/

//var arr=["12bb","pp", "as23s", "00sd"];

// function printNumberless(arr) {
//   var arr1 = [];
//   for (var i = 0; i < arr.length; i++) {
//           count = 0;
//     for (var j = 0; j < arr[i].length; j++) {
//       if ( isNaN(arr[i][j])) {
//         count++;
//         if (arr[i].length === count) {
//                arr1.push(arr[i]);
//         }
//       }
//     }
//   }
//   return arr1;
// }

// console.log(printNumberless([ "pp", "e3434", "sfdfs323", "sd23sdsa","asasd"]));









































function onlyLetters2 (str){
  var input = str.replaceAll(" ","").replaceAll(".","").replaceAll(",","").replaceAll("?","");
 
  //for (let i=0;i<input.length;i++){
   let i = 0; 
  while(i<input.length){  
  if (!isNaN(input[i])){
      return null;    
    }
    i++;
}
return input;
}
function onlyLetters (str){
  var input = str.replaceAll(" ","").replaceAll(".","").replaceAll(",","").replaceAll("?","");
 
  for (let i=0;i<input.length;i++){
    if (!isNaN(input[i])){
      return null;    
    }
}
return input;
}
//console.log(onlyLetters ("1 2?b,b"));


function onlyLettersString (arr) {

  let result = [];
  for (let i=0;i<arr.length;i++){
    let a = onlyLetters2(arr[i]);
    if (a != null) {       
      result.push(a) 
    } //if
  } //for
  return result
} //funkcija
console.log(onlyLettersString (["12bb","pp", "as23s", "00sd"]));

            




















//var tempStr = onlyLetters(arr[i]);
//     if(tempStr.length === arr[i].length)

// var text = "Eclip.5 42sep";
// var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var result = [];

// for (var i = 0; i < text.length; i++) {
//   for (var n = 0; n < alphabet.length; n++)
//     if (text[i] ==alphabet[n]) {
//       result.push(text[i]);
//       break;
//     }
// }
// console.log(`There is ${result.length} letters in this word`);