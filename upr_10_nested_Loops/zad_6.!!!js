// Zad 6 - Building

function Demo(input) {
  let numberOfFloors = Number(input[0]);
  let apartmentsPerFloor = Number(input[1]);
  let roomType = '';

  for (let floor = numberOfFloors; floor >= 1; floor--) {
    let result = ''; // Ima znachenie kade se definira promenlivata - za da moje za vsqka iteraciq na cikyla da ne se syhranqvat dannite ot predishnata iteraciq na cikala
    if (floor === numberOfFloors) {
      roomType = 'L';
    } else if (floor % 2 === 0) {
      roomType = 'O';
    } else {
      roomType = 'A';
    }
    for (let roomNumber = 0; roomNumber < apartmentsPerFloor; roomNumber++) {
      result += ` ${roomType}${floor}${roomNumber}`;
    }
    console.log(result);
  }
}

Demo(['6', '4']);
console.log('-----------------------');
Demo(['9', '5']);
console.log('-----------------------');
Demo(['4', '4']);
