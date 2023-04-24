// Task 3 - Computer Room

function Demo(input) {
  let month = input[0];
  let hoursSpent = Number(input[1]);
  let peooplePerGroup = Number(input[2]);
  let timeOfDay = input[3];

  let price = 0;
  let discount = 0.1;
  let additionaDiscount = 0.5;

  if (month === 'march' || month === 'april' || month === 'may') {
    switch (timeOfDay) {
      case 'day':
        price = 10.5;
        break;
      case 'night':
        price = 8.4;
        break;
    }
  } else if (month === 'june' || month === 'july' || month === 'august') {
    switch (timeOfDay) {
      case 'day':
        price = 12.6;
        break;
      case 'night':
        price = 10.2;
        break;
    }
  }

  if (peooplePerGroup >= 4) {
    price = price - price * discount;
  }

  if (hoursSpent >= 5) {
    price = price - price * additionaDiscount;
  }

  totalCost = price * peooplePerGroup * hoursSpent;

  console.log(`Price per person for one hour: ${price.toFixed(2)}`);
  console.log(`Total cost of the visit: ${totalCost.toFixed(2)}`);
}

Demo(['march', '3', '3', 'day']);
Demo(['july', '5', '5', 'night']);
