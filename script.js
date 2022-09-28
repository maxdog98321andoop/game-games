// Current temperature in Kelvin degrees.
const kelvin = 293;
console.log(kelvin);
const celsius = kelvin - 273;
console.log(celsius);
let fahrenheit = celsius * (9/5) + 32;
console.log(fahrenheit);

fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);