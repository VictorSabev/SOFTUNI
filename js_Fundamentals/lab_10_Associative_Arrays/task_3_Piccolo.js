// Task 3 - Piccolo

function piccolo(input) {
  let garageInventory = {};

  for (let element of input) {
    let currentElement = element.split(', ');

    let direction = currentElement[0];
    let licensePlate = currentElement[1];

    if (direction === 'IN') {
      garageInventory[licensePlate] = 'parked';
    } else if (direction === 'OUT') {
      delete garageInventory[licensePlate];
    }
  }
  let sortArray = Object.entries(garageInventory);
  sortArray.sort((a, b) => a[0].localeCompare(b[0]));

  if (sortArray.length === 0) {
    console.log('Parking Lot is Empty');
  } else {
    for (let carNumber of sortArray) {
      console.log(carNumber[0]);
    }
  }
}

piccolo([
  'IN, CA2844AA',

  'IN, CA1234TA',

  'OUT, CA2844AA',

  'IN, CA9999TT',

  'IN, CA2866HI',

  'OUT, CA1234TA',

  'IN, CA2844AA',

  'OUT, CA2866HI',

  'IN, CA9876HH',

  'IN, CA2822UU',
]);

console.log('----------');

piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);
