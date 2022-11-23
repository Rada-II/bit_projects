/*6. Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!
Input: JSGuru123
Output: Your password is cool! */

function successCallback(){
    return "Your password is cool!";
}
function errorCallback(){
   return "Your password is invalid!";
}

function checkPassword(password, successCallback , errorCallback) {
    
            if(/\d/.test(password) && password.length >6){
                return successCallback();
            }else{
                return errorCallback();
            }

    
    }


console.log(checkPassword("JSGuru123",successCallback , errorCallback));













// function errorCallback(){
//     console.log("Your password is invalid!")
// }
// function successCallback(){
//     console.log("Your password is cool!")
// }

// function checkPassword(password, successCallback , errorCallback) {
  
//   const digits = [0,1,2,3,4,5,6,7,8,9];
//   if(password.length < 6 ) {
//        errorCallback();
//  }
//   for(let i = 0; i < digits.length; i++){
//       if(password.includes(digits[i])){
//           successCallback();
//           return;
//       }
// }
// errorCallback();
// }
// checkPassword("JSGuru123", successCallback, errorCallback);













































// function checkLength(password){
//     //let passLengthMess = "Password length must be between 6 and 24 characters!";
//     if(password.length > 6 ) {   
//        return true;
//    } else {
//        console.log(passLengthMess);
//        return false;
//    }
// }



// function atLeastOneDigit(password){
//     const digits = [0,1,2,3,4,5,6,7,8,9];
//     //const atLeastOneDigitMess = 'There is no digits in your password!';
//     for(let i = 0; i < digits.length; i++){
//         if(password.includes(digits[i])){
//             return true;
//         }
//     }
//     //console.log(atLeastOneDigitMess );
//     return false;
// }


// function validatePassword (password) {
//     let checkLengthOfPassword = checkLength(password);
//     let checkAtLeastOneDigitPassword = atLeastOneDigit(password);
//     let successCallback = "Your password is cool!" ;
//     let errorCallback = "Your password is invalid!";

//     if(checkLengthOfPassword && checkAtLeastOneDigitPassword){
        
//         console.log(successCallback);
//     }else{
//         console.log(errorCallback);
//     }

// }

// validatePassword("JSGuru123")



// invokeAdd(

//     function () { return 1; },
    
//     function () { return 2; }
    
//     );






















//console.log(checkPassword("JSGuru123",successCallback , errorCallback));













































































// function squareNumbers(number) {
//     console.log(`Squared number = ${number * number}`)
//   }
  
//   function addNumbers(number1, number2) {
//     return number1 + number2
//   }
  
//   function useCallbackForNumbers(callbackAdd, callbackSquare) {
//     const sumOfNumbers = callbackAdd(arguments[2], arguments[3])
//     callbackSquare(sumOfNumbers)
//   }
  
//   useCallbackForNumbers(addNumbers, squareNumbers, 2, 3)

// // let password = "JSGuru123";



// function callback(checkLength, atLeastOneDigit) {
//     checkLength();
//     atLeastOneDigit();

//     let successCallback = "Your password is cool!" ;
//     let errorCallback = "Your password is invalid!";

//     if(checkLength && atLeastOneDigit){
//         console.log(successCallback);
//     }else {
//         console.log(errorCallback);
//     }
// }

// console.log(callback);














































// var password = "JSGuru123";

// (
// function (pass) {
//     var successCallback = "Your password is cool!" ;
//     var errorCallback = "Your password is invalid!";
//     var letterCount = 0;
//     var digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     var isDigit = false;

    
//     for(var i = 0; i < password.length; i++){
//         letterCount++;
//     }

//     for(var j = 0; j < password.length; j++){
//         for(var k = 0; k < digit.length; k++){
//             if(digit[k] == password[j]){
//                 isDigit = true;
//                 break;
//             }
//         }
//     }

//     if(letterCount >= 6 && isDigit === true){
//         console.log(successCallback);
//     }
//     else{
//         console.log(errorCallback); 
//     }
    
// }
// )(password);







// function first() {
//     console.log('A!');

//     return function () {
//         console.log('B!');
//     };
//  }
 
//  var bigB = first();
//  bigB();

// Ovo je identicno pozivanje funkcije kao na iznad, pomocu dulpih zagrada
//first()();



// function One(arg) {
//     Two(arg);
//     Three(arg);
// }

// function validatePassword(password){
//     checkLength(password);
//     atLeastOneDigit(password);
// }



// function validatePassword(fucntionTwo, fucntionThree) {

//     fucntionTwo(resp)
//     fucntionThree(resp)
// }

// funcOne(function (resp) {
//     console.log(resp)
// }, function (resp) {
//         console.log(resp)
// })




// function checkPass(password, successCallback, errorCallback) {
//     let  atLeast6 = password.length;
//     let  atLeastOneDigit = /\d/.test(password);

//     if (atLeastOneDigit && atLeast6 >= 6) {
//       successCallback();
//     } else {
//       errorCallback();
//     }
//   }

//   checkPass("JSGuru123", successCallback, errorCallback);