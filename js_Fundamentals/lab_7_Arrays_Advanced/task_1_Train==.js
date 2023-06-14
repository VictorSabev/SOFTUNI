// Task 1 - Train

function train(input) {
  let wagons = input.shift().split(' ').map(Number);
  let maxCapacityPreWagon = Number(input.shift());

  for (let i of input) {
    if (i.includes('Add')) {
      i = Number(i.split(' ').pop());
      wagons.push(i);
    } else {
      for (let a = 0; a < wagons.length; a++) {
        let totalAmountOfPeoplePerWagon = Number(i) + wagons[a];
        if (totalAmountOfPeoplePerWagon <= maxCapacityPreWagon) {
          wagons[a] = totalAmountOfPeoplePerWagon;
          break;
        }
      }
    }
  }
  console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);
