/* 9. Write a program that displays all the combinations of two numbers between 1 and 7. 
Don't display two of the same numbers at the same time. 
Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).*/


function combinationsTwoNumber(num1, num2) {
    var result = "";
    
    for (var i = num1; i <= num2; i++){
    
        for (var j = num1; j <= num2; j++){
    
            if(i !== j){
                result += i + ", " + j + "\n";
            }
        }
    }
    return result;
}


// var a = 1;
// var b = 7;

console.log(combinationsTwoNumber(1, 7));














































// function displayComb() {
//     var combo = "";

//     for (var i = 1; i <= 7; i++) {
//       for (var j = 1; j <= 7; j++) {
//         if (i === j) {
//           continue;
//         }

//         console.log(j, i);
//       }
//     }
//   }
//   displayComb();
