/* 2. Write a function named calculateDogAge that:
● takes 1 argument: your puppy's age.
● calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
● outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
years. */

let calculateDogAge = function (yourPuppyAge, yourAge) {
    let dogsAge = yourPuppyAge * 7;
    let humanAge = parseInt(yourAge/7) ;
    let output = `Your doggie is ${dogsAge}  years old in dog years, and you are ${humanAge} years old in doggy years!`;
     return output;
}
 console.log(calculateDogAge(7,26));
 console.log(calculateDogAge(5,35));
 console.log(calculateDogAge(7,45));