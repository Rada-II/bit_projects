/*5. Write a function that returns a function that calculates a decimal value of the given octal
number.
Input: 034
Output: 28 */



    function filter(num) {

        let octalNumber = parseInt(num);
        return octalNumber;
        
    }
    filter(034);
    

function calculateDecimal (number,callback){
console.log(callback(number));

}
calculateDecimal(034,filter)






































































































    // function calculateDec() {
    //     return function (octal) {
    //       console.log(octal);
    //     };
    //   }
    
    //   var a = calculateDec();
    //   a(034);




// (
// function (octalNumber) {
//     let octalNumberString = "" + octalNumber;

//     console.log(octalNumberString);
    
// }
// )(034);
