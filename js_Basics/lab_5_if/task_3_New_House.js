// Task 3 - New House

function Demo(input) {
  let typeOfFlower = input[0];
  let numberOfFlowers = Number(input[1]);
  let budget = Number(input[2]);

  let price = 0;

  switch (typeOfFlower) {
    case 'Roses':
      price = 5;
      break;
    case 'Dahlias':
      price = 3.8;
      break;
    case 'Tulips':
      price = 2.8;
      break;
    case 'Narcissus':
      price = 3;
      break;
    case 'Gladiolus':
      price = 2.5;
      break;
  }

  if (typeOfFlower === 'Roses' && numberOfFlowers > 80) {
    price = price - price * 0.1;
  } else if (typeOfFlower === 'Dahlias' && numberOfFlowers > 90) {
    price = price - price * 0.15;
  } else if (typeOfFlower === 'Tulips' && numberOfFlowers > 80) {
    price = price - price * 0.15;
  } else if (typeOfFlower === 'Narcissus' && numberOfFlowers < 120) {
    price = price * 1.15;
  } else if (typeOfFlower === 'Gladiolus' && numberOfFlowers < 80) {
    price = price * 1.2;
  }

  let totalSum = price * numberOfFlowers;
  let difference = Math.abs(budget - totalSum).toFixed(2);

  if (totalSum <= budget) {
    console.log(`Hey, you have a great garden with ${numberOfFlowers} ${typeOfFlower} and ${difference} leva left.`);
  } else {
    console.log(`Not enough money, you need ${difference} leva more.`);
  }
}

Demo(['Roses', '55', '250']);
Demo(['Tulips', '88', '260']);
Demo(['Narcissus', '119', '360']);
