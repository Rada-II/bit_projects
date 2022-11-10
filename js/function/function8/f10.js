/*10. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
square of the height (in meters). Write a function that takes two parameters, weight and
height, computes the BMI, and prints the corresponding BMI category:
* Starvation: less than 15
* Anorexic: less than 17.5
* Underweight: less than 18.5
* Ideal: greater than or equal to 18.5 but less than 25
* Overweight: greater than or equal to 25 but less than 30
* Obese: greater than or equal to 30 but less than 40
* Morbidly obese: greater than or equal to 40 */

function BMI(weight, height) {
    var BMI;
    var result = "";

    BMI = weight / (height * height);

    if( BMI < 15){
        result = "Starvation";
    } else if (BMI >= 15 && BMI < 17.5){
        result = "Anorexic";
    } else if (BMI >= 17.5 && BMI < 18.5){
        result = "Underweight";
    } else if (BMI >= 18.5 && BMI < 25){
        result = "Ideal";
    } else if (BMI >= 25 && BMI < 30){
        result = "Overweight";
    } else if (BMI >= 30 && BMI < 40){
        result = "Obese";
    } else if (BMI >= 40){
        result = "Morbidly obese";
    }

    return result;
    
}

var a = 75;
var b = 1.78;
console.log(BMI(a, b));