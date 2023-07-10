// Task 1 - Garage

function garageSort(input) {
  let parkingArea = {};
  for (let element of input) {
    let [garageNumber, car] = element.split(' - ');
    car = car.split(', ');
    let newCar = [];
    let newestCar = [];
    car.forEach((element) => {
      element = element.split(': ').join(' - ');
      newCar.push(element);
    });

    newCar = newCar.join(', ');
    newestCar.push(newCar);
    // console.log(newestCar);

    if (parkingArea.hasOwnProperty(garageNumber)) {
      parkingArea[garageNumber] = parkingArea[garageNumber].concat(newestCar);
    } else {
      parkingArea[garageNumber] = newestCar;
    }
  }

  for (const entry in parkingArea) {
    console.log(`Garage № ${entry}`);
    for (const element of parkingArea[entry]) {
      console.log(`--- ${element}`);
    }
  }
}

garageSort([
  '1 - color: blue, fuel type: diesel',
  '1 - color: red, manufacture: Audi',
  '2 - fuel type: petrol',
  '4 - color: dark blue, fuel type: diesel, manufacture: Fiat',
]);
console.log('---------------');
garageSort([
  '1 - color: green, fuel type: petrol',
  '1 - color: dark red, manufacture: WV',
  '2 - fuel type: diesel',
  '3 - color: dark blue, fuel type: petrol',
]);
