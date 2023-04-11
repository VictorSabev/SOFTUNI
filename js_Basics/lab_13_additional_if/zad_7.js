// Zadacha 7 - Fuel Tank

function Demo(input) {
  let fuelType = input[0];
  let initialFuel = Number(input[1]);

  if (fuelType !== 'Diesel' && fuelType !== 'Gasoline' && fuelType !== 'Gas') {
    console.log('Invalid fuel!');
  } else if (initialFuel >= 25) {
    console.log(`You have enough ${fuelType.toLowerCase()}.`);
  } else if (initialFuel < 25) {
    console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
  }
}

Demo(['Diesel', '10']);
Demo(['Gasoline', '40']);
Demo(['Gas', '25']);
Demo(['Kerosene', '200']);
