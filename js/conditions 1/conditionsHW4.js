//zadatak 4.
//proba
var number = 1;
var noun = "cat";
var noun2 = "dog";
var noun3 = "bird";

function zadatak4(number){
if(number>1){
    return("I like " + noun2 + "s" + " and " + noun3 + "s" + "." );
}else if(number==1){
    return("I have" + " " + number + " "+ noun + ".")
}else{
    return("I like all animals.");
}
}
console.log(zadatak4(1));
console.log(zadatak4(2));
console.log(zadatak4(0));
