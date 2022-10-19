function correctAge( Age) {
    if(Age < 0) {
        str = "This age has negative value";
    }
    else if(Age > 120) {
        str = "This age is greater than 120";
    }
    else str = "Correct age";
    return str;
};
