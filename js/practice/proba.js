function rightSpeed( ) {
    if(Age < 0) {
        return  "This age has negative value";
    }
    else if(Age > 120) {
        return "This age is greater than 120";
    }
    else str = "Correct age";
    return str;
};
console.log(correctsAge (35));