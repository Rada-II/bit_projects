/* 4. Create a function called celsiusToFahrenheit:
● Store a celsius temperature into variable.
● Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
● Now store a fahrenheit temperature into variable.
● Convert it to celsius and output "NN°F is NN°C."
*NN is actual temperature you need to convert */



function celsiusToFahrenheit(celsius) {
 let fahrenheit = (celsius * 9) / 5 + 32;
 
 return `${celsius} °C is ${fahrenheit} °F.`;
}
 


function fahrenheitToCelsius(fahrenheit) {
 let celsius = ((fahrenheit - 32) * 5) / 9;
 
 return `${fahrenheit} °F is ${celsius} °C.`;
}

console.log(celsiusToFahrenheit(25));
console.log(fahrenheitToCelsius(70));


