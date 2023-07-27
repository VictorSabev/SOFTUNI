// Problem 3 - Need for Speed III

function cars(input) {
  let numberOfCars = input.shift();
  let dataBase = {};

  for (let i = 0; i < numberOfCars; i++) {
    let currentCar = input.shift();
    let [car, distance, fuel] = currentCar.split('|');
    dataBase[car] = {
      distance: Number(distance),
      fuel: Number(fuel),
    };
  }

  let instructions = input.shift();

  while (instructions !== 'Stop') {
    instructions = instructions.split(' : ');
    const command = instructions.shift();
    const car = instructions.shift();

    switch (command) {
      case 'Drive':
        const distanceToDrive = +instructions[0];
        const fuelToBurn = +instructions[1];
        if (dataBase[car].fuel < fuelToBurn) {
          console.log('Not enough fuel to make that ride');
        } else {
          dataBase[car].distance += distanceToDrive;
          dataBase[car].fuel -= fuelToBurn;
          console.log(
            `${car} driven for ${distanceToDrive} kilometers. ${fuelToBurn} liters of fuel consumed.`
          );
        }
        if (dataBase[car].distance >= 100000) {
          console.log(`Time to sell the ${car}!`);
          delete dataBase[car];
        }
        break;

      case 'Refuel':
        let refuelAmount = +instructions[0];
        if (refuelAmount + dataBase[car].fuel > 75) {
          refuelAmount = 75 - dataBase[car].fuel;
          dataBase[car].fuel = 75;
        } else {
          dataBase[car].fuel += refuelAmount;
        }

        console.log(`${car} refueled with ${refuelAmount} liters`);
        break;

      case 'Revert':
        const carPreperationToBeSoldInTheBalkans = +instructions[0];
        if (
          dataBase[car].distance - carPreperationToBeSoldInTheBalkans <
          10000
        ) {
          dataBase[car].distance = 10000;
        } else {
          dataBase[car].distance -= carPreperationToBeSoldInTheBalkans;
          console.log(
            `${car} mileage decreased by ${carPreperationToBeSoldInTheBalkans} kilometers`
          );
        }
        break;
    }

    instructions = input.shift();
  }
  for (const car in dataBase) {
    console.log(
      `${car} -> Mileage: ${dataBase[car].distance} kms, Fuel in the tank: ${dataBase[car].fuel} lt.`
    );
  }
}

// cars([
//   '3',
//   'Audi A6|38000|62',
//   'Mercedes CLS|11000|35',
//   'Volkswagen Passat CC|45678|5',
//   'Drive : Audi A6 : 543 : 47',
//   'Drive : Mercedes CLS : 94 : 11',
//   'Drive : Volkswagen Passat CC : 69 : 8',
//   'Refuel : Audi A6 : 50',
//   'Revert : Mercedes CLS : 500',
//   'Revert : Audi A6 : 30000',
//   'Stop',
// ]);
console.log('-----------');
cars([
  '4',
  'Lamborghini Veneno|11111|74',
  'Bugatti Veyron|12345|67',
  'Koenigsegg CCXR|67890|12',
  'Aston Martin Valkryie|99900|50',
  'Drive : Koenigsegg CCXR : 382 : 82',
  'Drive : Aston Martin Valkryie : 99 : 23',
  'Drive : Aston Martin Valkryie : 2 : 1',
  'Refuel : Lamborghini Veneno : 40',
  'Revert : Bugatti Veyron : 2000',
  'Stop',
]);
