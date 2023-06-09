// Task 1 - Car Wash

function carwash(condition) {
  let cleanFactor = 0;

  for (let i of condition) {
    switch (i) {
      case 'soap':
        cleanFactor += 10;
        break;
      case 'water':
        cleanFactor *= 1.2;
        break;
      case 'vacuum cleaner':
        cleanFactor *= 1.25;
        break;
      case 'mud':
        cleanFactor = cleanFactor - cleanFactor * 0.1;
        break;
    }
  }
  console.log(`The car is ${cleanFactor.toFixed(2)}% clean.`);
}

carwash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carwash(['soap', 'water', 'mud', 'mud', 'water', 'mud', 'vacuum cleaner']);
