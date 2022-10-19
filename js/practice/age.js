
    function correctAge(Age) {
        if (Age < 0 ) {
          return "This age has negative value"
        }
         else if ( Age > 120){
        return "This age is greater than 120"
        }
         return "Correct Age"
        }
    
        console.log(correctAge(-7));