// Problem 2 - Space Travel

function spaceTravel(input) {
  const startingAmountOfAmmo = Number(input.pop());
  const startingAmountOfFuel = Number(input.pop());

  let currentFuel = startingAmountOfFuel;
  let currentAmmo = startingAmountOfAmmo;

  input = input.shift().split('||');
  let instructions = input.shift().split(' ');
  let command = instructions.shift();

  while (command !== 'Titan') {
    let parameter = Number(instructions.shift());
    switch (command) {
      case 'Travel':
        let distance = parameter;
        currentFuel -= distance;
        if (currentFuel >= 0) {
          console.log(`The spaceship travelled ${distance} light-years.`);
        } else {
          console.log('Mission failed.');
          return;
        }
        break;
      case 'Enemy':
        let enemyArmor = parameter;
        if (currentAmmo >= enemyArmor) {
          currentAmmo -= enemyArmor;
          console.log(`An enemy with ${enemyArmor} armour is defeated.`);
        } else {
          currentFuel -= enemyArmor * 2;

          if (currentFuel >= 0) {
            console.log(`An enemy with ${enemyArmor} armour is outmaneuvered.`);
          } else {
            console.log('Mission failed.');
            return;
          }
        }
        break;
      case 'Repair':
        let refuel = parameter;
        let reloading = 2 * parameter;
        currentFuel += refuel;
        currentAmmo += reloading;
        console.log(`Ammunitions added: ${reloading}.`);
        console.log(`Fuel added: ${refuel}.`);
        break;
    }

    instructions = input.shift().split(' ');
    command = instructions.shift();
  }

  console.log('You have reached Titan, all passengers are safe.');
}

spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan', '50', '80']);
console.log('------------');
spaceTravel(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', '60', '100']);
