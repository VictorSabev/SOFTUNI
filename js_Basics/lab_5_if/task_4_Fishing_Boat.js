// Task 4 - Fishing Boat

function Demo(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let numberOfFishermen = Number(input[2]);

  let basePrice = 0;
  let discount = 0;
  let additionalDiscount = 0;

  switch (season) {
    case 'Spring':
      basePrice = 3000;
      break;
    case 'Summer':
    case 'Autumn':
      basePrice = 4200;
      break;
    case 'Winter':
      basePrice = 2600;
      break;
  }

  if (numberOfFishermen <= 6) {
    discount = 0.1;
  } else if (numberOfFishermen >= 7 && numberOfFishermen <= 11) {
    discount = 0.15;
  } else if (numberOfFishermen >= 12) {
    discount = 0.25;
  }

  if (numberOfFishermen % 2 === 0 && season !== 'Autumn') {
    additionalDiscount = 0.05;
  }

  let totalSum = basePrice - basePrice * discount - basePrice * additionalDiscount;
  let difference = Math.abs(budget - totalSum).toFixed(2);

  if (budget >= totalSum) {
    console.log(`Yes! You have ${difference} leva left.`);
  } else {
    console.log(`Not enough money! You need ${difference} leva.`);
  }
}

Demo(['3000', 'Summer', '11']);
Demo(['3600', 'Autumn', '6']);
Demo(['2000', 'Winter', '13']);
