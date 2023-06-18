// Problem 2 - The Lift

// solution modified by chat GPT, initial solution - 90 / 100 points


function liftDistribution(input) {
  let passengersQueue = Number(input.shift());
  let wagonsArray = input.shift().split(' ').map(Number);
  const maximumCapacity = 4;

  for (let i = 0; i < wagonsArray.length; i++) {
    let wagonState = wagonsArray[i];
    let freeSpaces = maximumCapacity - wagonState;

    while (freeSpaces > 0 && passengersQueue > 0) {
      wagonsArray[i]++;
      freeSpaces--;
      passengersQueue--;
    }
  }

  let lastWagonFreeSpace = maximumCapacity - wagonsArray[wagonsArray.length - 1];

  if (passengersQueue === 0 && lastWagonFreeSpace > 0) {
    console.log(`The lift has empty spots!\n${wagonsArray.join(' ')}`);
  } else if (passengersQueue > 0 && lastWagonFreeSpace === 0) {
    console.log(`There isn't enough space! ${passengersQueue} people in a queue!\n${wagonsArray.join(' ')}`);
  } else {
    console.log(`${wagonsArray.join(' ')}`);
  }
}

liftDistribution(['15', '0 0 0 0 0']);
liftDistribution(['20', '0 2 0']);
