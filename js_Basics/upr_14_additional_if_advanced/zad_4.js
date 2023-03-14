// Zadacha 4 - Car To Go

function Demo(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let carClass = '';
  let carType = '';
  let carPrice = 0;

  if (budget <= 100) {
    carClass = 'Economy class';
    switch (season) {
      case 'Summer':
        carType = 'Cabrio';
        carPrice = 0.35 * budget;
        break;
      case 'Winter':
        carType = 'Jeep';
        carPrice = 0.65 * budget;
        break;
    }
  } else if (budget > 100 && budget <= 500) {
    carClass = 'Compact class';
    switch (season) {
      case 'Summer':
        carType = 'Cabrio';
        carPrice = 0.45 * budget;
        break;
      case 'Winter':
        carType = 'Jeep';
        carPrice = 0.8 * budget;
        break;
    }
  } else if (budget > 500) {
    carClass = 'Luxury class';
    carType = 'Jeep';
    carPrice = 0.9 * budget;
  }

  console.log(carClass);
  console.log(`${carType} - ${carPrice.toFixed(2)}`);
}

Demo(['450', 'Summer']);
console.log('-------------------');
Demo(['450', 'Winter']);
console.log('-------------------');
Demo(['1010', 'Summer']);
console.log('-------------------');
Demo(['99.99', 'Summer']);
console.log('-------------------');
Demo(['1010', 'Winter']);
console.log('-------------------');
Demo(['70.50', 'Winter']);
