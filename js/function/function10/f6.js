/*6. Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!
Input: JSGuru123
Output: Your password is cool! */



function checkLength(password){
    //let passLengthMess = "Password length must be between 6 and 24 characters!";
    if(password.length > 6 && password.length < 24) {   
       return true;
   } else {
       //console.log(passLengthMess);
       return false;
   }
}



function atLeastOneDigit(password){
    const digits = [0,1,2,3,4,5,6,7,8,9];
    //const atLeastOneDigitMess = 'There is no digits in your password!';
    for(let i = 0; i < digits.length; i++){
        if(password.includes(digits[i])){
            return true;
        }
    }
    //console.log(atLeastOneDigitMess );
    return false;
}


function validatePassword (password) {
    let checkLengthOfPassword = checkLength(password);
    let checkAtLeastOneDigitPassword = atLeastOneDigit(password);
    let successCallback = "Your password is cool!" ;
    let errorCallback = "Your password is invalid!";

    if(checkLengthOfPassword && checkAtLeastOneDigitPassword){
        
        console.log(successCallback);
    }else{
        console.log(errorCallback);
    }

}

validatePassword("JSGuru123")



//meni bas sad nije jasno da je ovo ustvari callback,zbog console.log? 
//zato sto smo mi ovako radili vec onaj zadatak na isti ovaj nacin, pa me sad buni da je i ovo callback?


















































































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