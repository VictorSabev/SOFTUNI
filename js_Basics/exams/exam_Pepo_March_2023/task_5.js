// Task 5 -

function Demo(input) {
  let index = 0;
  let target = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let serviceType = '';
  let specificity = input[index];
  index++;

  let price = 0;
  let incomeCounter = 0;

  while (command !== 'closed') {
    serviceType = command;

    switch (serviceType) {
      case 'haircut':
        switch (specificity) {
          case 'mens':
            price = 15;
            break;
          case 'ladies':
            price = 20;
            break;
          case 'kids':
            price = 10;
            break;
        }
        break;
      case 'color':
        switch (specificity) {
          case 'touch up':
            price = 20;
            break;
          case 'full color':
            price = 30;
            break;
        }
        break;
    }

    incomeCounter += price;

    if (incomeCounter >= target) {
      break;
    }

    command = input[index];
    index++;
    specificity = input[index];
    index++;
  }

  let diference = Math.abs(incomeCounter - target);

  if (incomeCounter >= target) {
    console.log('You have reached your target for the day!');
    console.log(`Earned money: ${incomeCounter}lv.`);
  } else {
    console.log(`Target not reached! You need ${diference}lv. more.`);
    console.log(`Earned money: ${incomeCounter}lv.`);
  }
}

Demo(['300', 'haircut', 'ladies', 'haircut', 'kids', 'color', 'touch up', 'closed']);
console.log('-------------------');
Demo(['50', 'color', 'full color', 'haircut', 'ladies']);
