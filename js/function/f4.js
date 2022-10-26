//4. Write a program that calculates an arithmetic mean of four numbers.

var values = [2, 4, 5, 3];
var findArithmeticMean = () => {
var result = 0;
for (var i = 0; i < values.length; i++){
result += values[i];
}
console.log(result/values.length);
}
findArithmeticMean();