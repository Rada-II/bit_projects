/* 5.Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
* *
* *
* *
***** */
var number = 5;
var string = "";
for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
        if (i === 0 || i === number - 1) {
            string += "*"
        } else {
            if (j === 0 || j === number - 1) {
                string += "*";
            } else {
                string += " ";
            }
        }
    }
    string += "\n";
}
console.log(string);













// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     if(i === 0 || i === n - 1) {
//       string += "*";
//     }
//     else {
//       if(j === 0 || j === n - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);







































// function drawSquare(a) {
//     var star = "*";
//     var blank = " ";
//     var rowFirst = "";
//     var rowLast = "";
//     var rowMid = "";
//     var result = "";

//     var rowBlank = "";
//     for (var i = 0; i < a; i++) {
//       rowFirst += star;
//       rowLast += star;
//     }
//     for (var j = 0; j < a - 2; j++) {
//       rowBlank += blank;
//     }
//     for (var j = 0; j < a - 2; j++) {
//       rowMid += star + rowBlank + star + "\n";
//     }
//     return (result = rowFirst + "\n" + rowMid + rowLast);
//   }
//   console.log(drawSquare(5));






















