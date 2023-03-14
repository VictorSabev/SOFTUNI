// Zadacha 3 - Celsius to Fahrenheit

function Demo(input) {
  let tempInCelsium = Number(input);
  let tempInFahrenheit = tempInCelsium * (9 / 5) + 32;
  console.log(tempInFahrenheit.toFixed(2));
}

Demo('25');
Demo('0');
Demo('-5.5');
Demo('32.3');
