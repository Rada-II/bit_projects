//5.Write a code to calculate the sum of digits in a number and show that sum on screen.
// Example: "Sum of digits in number 232 is 7"
//232 % 10 = 2
//232/10=23
var number = 2354;
var digit = 0;
var sum=0;
for ( ;number!=0 ;){
  digit = number%10;
  sum+= digit;
  number = Math.floor(number/10);
}

console.log(sum);






// var sum = 0;
// var input = 248 ;
// var inpstr = input.toString()

// for (var i = 0; i < inpstr.length; i++) {
    
//       sum += Number(inpstr[i])
//     }
  

// console.log('Sum of digits in number', input ,'is' , sum);






















// var a="223";
// var sum = 0;
// for (let i = 0; i < a.length; i++)
// {
//     sum = sum + parseInt(a[i]);
// }
// console.log(sum)








// var arr = ['2','3','2'];
// var total = 0; 
// for(var i in arr){
//   total += parseInt(arr[i]);
// }console.log(total);

// var value = 225,
//   sum = 0;

// while (value) {
//   sum += value % 10;
//   value = Math.floor(value / 10);
// }

// console.log(sum);