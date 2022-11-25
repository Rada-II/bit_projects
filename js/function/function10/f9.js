/* 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!” */

// function replaceAll (string){

//     return string.replaceAll("JS","**");   
// }      //"normal 'named' function"

// console.log(replaceAll ("Programming in JS is super interesting!"))



(function (string) {
    //let string = "Programming in JS is super interesting!";
    console.log(string.replaceAll("JS", "**"));

})('Programming in JS is super interesting!'); //self-invoking anonymous function 

/*zasto mi ovo ne radi ako su obe f-je "otkomentarisane",radi samo ako zakomentarisem prvu...
izgibila sam 2h sata pokusavajuci da skapiram sta je problem */

let replacesAllAppearances = function (string) {

    return string.replaceAll("JS", "**");
}       // "normal" anonymous function 

console.log(replacesAllAppearances("Programming in JS is super interesting!"));