// Zadacha 5 - Vacation

function Demo(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let sleepingLocation = '';
  let travelLocation = '';
  let holidayPrice = 0;

  if (budget <= 1000) {
    sleepingLocation = 'Camp';
    switch (season) {
      case 'Summer':
        travelLocation = 'Alaska';
        holidayPrice = budget * 0.65;
        break;
      case 'Winter':
        travelLocation = 'Morocco';
        holidayPrice = budget * 0.45;
        break;
    }
  } else if (budget > 1000 && budget <= 3000) {
    sleepingLocation = 'Hut';
    switch (season) {
      case 'Summer':
        travelLocation = 'Alaska';
        holidayPrice = budget * 0.8;
        break;
      case 'Winter':
        travelLocation = 'Morocco';
        holidayPrice = budget * 0.6;
        break;
    }
  } else if (budget > 3000) {
    sleepingLocation = 'Hotel';
    holidayPrice = budget * 0.9;
    switch (season) {
      case 'Summer':
        travelLocation = 'Alaska';
        break;
      case 'Winter':
        travelLocation = 'Morocco';
        break;
    }
  }
  console.log(`${travelLocation} - ${sleepingLocation} - ${holidayPrice.toFixed(2)}`);
}

Demo(['800', 'Summer']);
console.log('---------------');
Demo(['799.50', 'Winter']);
console.log('---------------');
Demo(['3460', 'Summer']);
console.log('---------------');
Demo(['1100', 'Summer']);
console.log('---------------');
Demo(['5000', 'Winter']);
console.log('---------------');
Demo(['2543.99', 'Winter']);
