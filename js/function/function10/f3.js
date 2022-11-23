/*3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
number of replacements.
Input: prograMming
Output: progra**ing, 2 */


// let input = "prograMming";

// (
// function (string) {
//     let newString = "";
//     let count = 0; 

//     for(let i = 0; i < string.length; i++){

//         if(string[i] === "m" || string[i] === "M"){
//             newString += "*";
//             count++;
                
//         }else if(string[i] !== "m" || string[i] !== "M"){
//             newString += string[i];
//         }
            
           
//     }

//     console.log(newString, ", " ,count);
// }
// )(input);




// var input1="prograMming";
// (function () {
//     var niz=input1.toUpperCase();
//     var niz2=[];
//     var brojac=0;
//     for (let i = 0; i < niz.length; i++) {
//         if(niz[i]==='M'){
//         brojac++;
//     }
//     niz2=niz.replaceAll('M','*')
//     }
//      console.log(niz2,brojac);
// })(input1);