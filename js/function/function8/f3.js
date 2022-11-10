/* 3. Write a program that prints a multiplication table for numbers up to 12.*/

function multiplication(number1,number2) {
  var result = "";

  for(var i = 1; i <= number1; i++){
      for(var j = 1; j <= number2; j++){
  
          result += i + " x " + j + " = " + (i * j) + "\t\n" //+"\n";
      }
  }

  return result; 
}

//var  = 12;
console.log(multiplication(12,12));



























// function multiplication(num) {
//   var result = "";
//   var sum = 0;
//   for (var i = 1; i <= num; i++) {
//     for (var j = 1; j <= num; j++) {
//       sum = i * j;
//       result += i + " * " + j + " = " + sum  + "\n";
//     }
//     result += "\n";
//   }

//   return result;
// }
// var num = 12;
// var func = multiplication(num);
// console.log(func);