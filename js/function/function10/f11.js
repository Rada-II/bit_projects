/* 4. Write a function that deletes a character from the given position in the string. 
Input: “Goodd morning!”, 3 
Output: “Good morning!”*/

// const test = 'Goodd morning';
// const result = test.slice(0, 3) + test.slice(4);
// console.log(result);

function deletesCharacter(string,index){
    return string.slice(0,index) + string.slice(index +1)
}         //"normal 'named' function"

console.log(deletesCharacter("Goodd morning",3));



(function (string, index){
   
    console.log(string.slice(0,index) + string.slice(index+1));
  })("Goodd morning",3);  //self-invoking anonymous function 



  let deleteCharacter = function (string,index){
    return string.slice(0,index) + string.slice(index +1)
}    // "normal" anonymous function 

console.log(deleteCharacter("Goodd morning",3));
