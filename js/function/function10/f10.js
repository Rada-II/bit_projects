/*3. Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’ 
Output: “Good morning” */



    
    function insertInString(string, index, character) {
        return string.slice(0, index - 1) + character + string.slice(index - 1);
          
      }         //"normal 'named' function"
  
      console.log(insertInString("Goo morning", 4, "d"));



      (function (string, index, character){
   
        console.log(string.slice(0, index - 1) + character + string.slice(index - 1));
      })("Goo morning", 4, "d");   //self-invoking anonymous function 
      
    
    
      let insertCharacter = function (string, index, character){
        return string.slice(0, index - 1) + character + string.slice(index - 1);
    }     // "normal" anonymous function 

    
    console.log(insertCharacter("Goo morning", 4, "d"));
    


