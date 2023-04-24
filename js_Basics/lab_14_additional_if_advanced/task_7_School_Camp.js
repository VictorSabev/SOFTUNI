// Task 7 - School Camp

function Demo(input) {
  let index = 0;
  let season = input[index];
  index++;
  let groupType = input[index];
  index++;
  let studentsCount = Number(input[index]);
  index++;
  let stayCount = Number(input[index]);
  index++;

  let pricePerStay = 0;
  let discount = 0;
  let activity = '';

  if (groupType === 'boys' || groupType === 'girls') {
    switch (season) {
      case 'Winter':
        pricePerStay = 9.6;
        break;
      case 'Spring':
        pricePerStay = 7.2;
        break;
      case 'Summer':
        pricePerStay = 15;
        break;
    }
  } else if (groupType === 'mixed') {
    switch (season) {
      case 'Winter':
        pricePerStay = 10;
        break;
      case 'Spring':
        pricePerStay = 9.5;
        break;
      case 'Summer':
        pricePerStay = 20;
        break;
    }
  }

  if (studentsCount >= 50) {
    discount = 0.5;
  } else if (studentsCount < 50 && studentsCount >= 20) {
    discount = 0.15;
  } else if (studentsCount < 20 && studentsCount >= 10) {
    discount = 0.05;
  }

  switch (groupType) {
    case 'girls':
      switch (season) {
        case 'Winter':
          activity = 'Gymnastics';
          break;
        case 'Spring':
          activity = 'Athletics';
          break;
        case 'Summer':
          activity = 'Volleyball';
          break;
      }
      break;
    case 'boys':
      switch (season) {
        case 'Winter':
          activity = 'Judo';
          break;
        case 'Spring':
          activity = 'Tennis';
          break;
        case 'Summer':
          activity = 'Football';
          break;
      }
      break;
    case 'mixed':
      switch (season) {
        case 'Winter':
          activity = 'Ski';
          break;
        case 'Spring':
          activity = 'Cycling';
          break;
        case 'Summer':
          activity = 'Swimming';
          break;
      }
      break;
  }

  let stayCost = stayCount * pricePerStay * studentsCount;
  let totalCost = stayCost - stayCost * discount;

  console.log(`${activity} ${totalCost.toFixed(2)} lv.`);
}

Demo(['Spring', 'girls', '20', '7']);
console.log('------------------');
Demo(['Winter', 'mixed', '9', '15']);
console.log('------------------');
Demo(['Summer', 'boys', '60', '7']);
console.log('------------------');
Demo(['Spring', 'mixed', '17', '14']);
