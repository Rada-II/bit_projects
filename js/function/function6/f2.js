/*2. Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je
prestupna. Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako
nije deljiva sa 100 - 1900. nije bila prestupna). Od toga odstupa svaka četvrta
godina veka (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je
prestupna).*/


// program to check leap year
function checkLeapYear(year) {

    
    if ((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)) {
        return(year + ' is a leap year');
    } else {
        return(year + ' is not a leap year');
    }
}



var result = checkLeapYear(2000);
console.log(result);




// function leapYear(year)
// {
//   return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }