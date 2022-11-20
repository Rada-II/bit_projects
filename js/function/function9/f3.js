/* 3. Write a function named calculateSupply that:
● takes 2 arguments: age, amount per day.
● calculates the amount consumed for rest of the life (based on a constant max age).
● outputs the result to the screen like so: "You will need NN to last you until the ripe old age of
X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number. */

function calculateSupply(age, amountPerDay) {
    const maxAge = 70;
    let supply = parseInt((maxAge - age) * 365 * amountPerDay);

    return `You will need ${supply} to last you until the ripe old age of ${maxAge}.`
    
}

console.log(calculateSupply(50, 2.7));
console.log(calculateSupply(30, 4));
console.log(calculateSupply(60, 3.2));