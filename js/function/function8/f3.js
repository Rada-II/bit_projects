/* 3. Write a program that prints a multiplication table for numbers up to 12.*/

function multiplication(number) {
  var result = "";

  for(var i = 1; i <= number; i++){
      for(var j = 1; j <= number; j++){
  
          //result += i + " x " + j + " = " + (i * j) + "\t\n" //+"\n";
          result += `${i} x ${j} = ${(i*j)}`+ "\n";
      }
  }

  return result; 
}

//var  = 12;
console.log(multiplication(12));



























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