// 9. Write a function to hide email address.
// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"



function hideEmail(email){
    var string = email.slice(0, 3) + "...@gmail.com";
    return string;
}
var func = hideEmail("myemailaddress@bgit.rs");
console.log(func);