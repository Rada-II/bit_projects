//2. Write a function to check whether a string is blank or not.
//"My random string" -> false
//" " -> true
//12 -> false
//false -> false

function stringIsBlank(input) {
    if (input.length === 0)
    return true;
    else 
    return false;
  }
console.log(stringIsBlank("My random string"));
console.log(stringIsBlank(""));
console.log(stringIsBlank(12));
console.log(stringIsBlank(false));

//Komentar: sta bi ti pokazalo kada bi proveravala za ovakav string: "     " ? Dobila bi da to nije prazan string :) 
// Probaj da vidis kako bi mogla takvu situaciju da resis.
