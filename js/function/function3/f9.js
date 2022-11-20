// 9. Write a function to test email address.
// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"



function testEmail(str, num) {
  
    if (str.length > num) {
    
    if ( num > 3) num -= 3;
    
    str = str.substring(0, num).concat("...@bgit.rs");
  }

  
  return str;
}
console.log(testEmail("myemailaddress@bgit.rs", 3));




































// function testEmail(email){
//     var string = email.slice(0, 3) + "...@gmail.com";
//     return string;
// }
 
// console.log(function testEmail("myemailaddress@bgit.rs"));



// function testEmail(str, num) {
//     if (str.length > num) {
//       return str.slice(0, num) + "...";
//     } else {
//       return str;
//     }
//   }

// console.log(function testEmail("myemailaddress@bgit.rs", 3));


























// var func = testEmail("myemailaddress@bgit.rs");
// console.log(func);

// function test(nekiMail , pocetak , kraj){
//     var result = "";
// for (var i = pocetak; i < kraj; i++){
//     //console.log(nekiMail[i]);
//     result += nekiMail[i]
// }
// return result;  
// }
// var res = test("nekiMail dejan", 2, 4);
// console.log(res);
//console.log("nekiMail dejan".slice(2,4));



// function test(nekiMail){
//     var result = "";
// for (var i = nekiMail.length-1; i >=0; i--){
//     //console.log(nekiMail[i]);
//     result += nekiMail[i];
// }
// return result;
// }
// var res = test("nekiMail dejan");
// console.log(res);




