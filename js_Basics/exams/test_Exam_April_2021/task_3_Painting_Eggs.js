// Task 3 - Painting Eggs

function Demo(input) {
  let eggSize = input[0];
  let eggColor = input[1];
  let numberOfEggs = Number(input[2]);

  let eggPrice = 0;

  if (eggSize === 'Large') {
    switch (eggColor) {
      case 'Red':
        eggPrice = 16;
        break;
      case 'Green':
        eggPrice = 12;
        break;
      case 'Yellow':
        eggPrice = 9;
        break;
    }
  } else if (eggSize === 'Medium') {
    switch (eggColor) {
      case 'Red':
        eggPrice = 13;
        break;
      case 'Green':
        eggPrice = 9;
        break;
      case 'Yellow':
        eggPrice = 7;
        break;
    }
  } else if (eggSize === 'Small') {
    switch (eggColor) {
      case 'Red':
        eggPrice = 9;
        break;
      case 'Green':
        eggPrice = 8;
        break;
      case 'Yellow':
        eggPrice = 5;
        break;
    }
  }
  let totalEggsPrice = eggPrice * numberOfEggs;
  let profit = totalEggsPrice - totalEggsPrice * 0.35;

  console.log(`${profit.toFixed(2)} leva.`);
}

Demo(['Large', 'Red', '7']);
Demo(['Medium', 'Green', '5']);
Demo(['Small', 'Yellow', '3']);
