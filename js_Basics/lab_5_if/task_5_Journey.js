// Task 5 - Journey

function Demo(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let budgetExpence = budget;
  let destination = '';
  let establishment = '';

  if (budget <= 100) {
    destination = 'Bulgaria';
    switch (season) {
      case 'summer':
        budgetExpence *= 0.3;
        establishment = 'Camp';
        break;
      case 'winter':
        budgetExpence *= 0.7;
        establishment = 'Hotel';
        break;
    }
  } else if (budget > 100 && budget <= 1000) {
    destination = 'Balkans';
    switch (season) {
      case 'summer':
        budgetExpence *= 0.4;
        establishment = 'Camp';
        break;
      case 'winter':
        budgetExpence *= 0.8;
        establishment = 'Hotel';
        break;
    }
  } else if (budget > 1000) {
    destination = 'Europe';
    budgetExpence *= 0.9;
    establishment = 'Hotel';
  }

  budgetExpence = budgetExpence.toFixed(2);
  console.log(`Somewhere in ${destination}`);
  console.log(`${establishment} - ${budgetExpence}`);
}

Demo(['50', 'summer']);
Demo(['75', 'winter']);
Demo(['312', 'summer']);
Demo(['678.53', 'winter']);
Demo(['1500', 'summer']);
