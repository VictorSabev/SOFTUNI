// Task 5 - Suitcases Load

function Demo(input) {
  let index = 0;
  let capacity = Number(input[index]);
  index++;
  let command = input[index];
  index++;

  let bagCounter = 0;
  let bagVolume;
  let bagsStatistics = 0;

  while (command !== 'End') {
    bagVolume = Number(command);
    bagCounter++;
    if (bagCounter === 3) {
      bagCounter = 0;
      capacity = capacity - bagVolume * 1.1;
    } else {
      capacity -= bagVolume;
    }

    if (capacity < 0) {
      break;
    }
    bagsStatistics++;
    command = input[index];
    index++;
  }

  if (capacity >= 0) {
    console.log(`Congratulations! All suitcases are loaded!`);
  } else {
    console.log('No more space!');
  }
  console.log(`Statistic: ${bagsStatistics} suitcases loaded.`);
}

Demo(['550', '100', '252', '72', 'End']);
console.log('--------------');
Demo(['700.5', '180', '340.6', '126', '220']);
console.log('--------------');
Demo(['1200.2', '260', '380.5', '125.6', '305', 'End']);
