//zadatak 5.

function driving(a){
    if(a>=18) {return("You are old enough to drive");}
    else {return ("You need to wait "+(18-a) +" years to drive");}
    }
    
    console.log(driving(13));