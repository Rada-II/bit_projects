//zadatak 3.

function grade(a){
if(a>=51 && a<=60) {return("Grade is E");}
else if(a>=61 && a<=70) {return("Grade is D");}
else if(a>=71 && a<=80) {return("Grade is C");}
else if(a>=81 && a<=90) {return("Grade is B");}
else if(a>=91 && a<=100) {return("Grade is A");}
else {return("Student has failed the exam.");}
}

console.log(grade(75));
console.log(grade(89));
console.log(grade(50));

//trying to save changes on github