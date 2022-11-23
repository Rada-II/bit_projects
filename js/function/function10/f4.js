/*4. Write a function with parameters name and surname that returns a function that
suggests an email in the form name.surnameC.
Input: pera peric
Output: pera.peric@gmail.com */


(function (name, surname) {

    let suggestsEmail = "@gmail.com"
    let email = name + "." + surname + suggestsEmail;
    console.log(email);
    
})("pera","peric");