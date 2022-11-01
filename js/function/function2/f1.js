//1. Write a function to check whether the `input` is a string or not.
//"My random string"; -> true
//12 -> false

var input = "My random string";

function checkString(input) {

  if (typeof input === "string") {
    return true;
  } 
  return false;
  
}
    
    console. log(checkString("My random string"));
    console. log(checkString(12));