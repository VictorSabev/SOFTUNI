// Task 2 - Bike Race

function Demo(input) {
  let index = 0;
  let juniors = Number(input[index]);
  index++;
  let seniors = Number(input[index]);
  index++;
  let trackType = input[index];
  index++;

  let juniorsTax = 0;
  let seniorsTax = 0;
  let taxDiscount = 0;

  switch (trackType) {
    case 'trail':
      juniorsTax = 5.5;
      seniorsTax = 7;
      break;
    case 'cross-country':
      juniorsTax = 8;
      seniorsTax = 9.5;
      break;
    case 'downhill':
      juniorsTax = 12.25;
      seniorsTax = 13.75;
      break;
    case 'road':
      juniorsTax = 20;
      seniorsTax = 21.5;
      break;
  }

  let totalParticipents = seniors + juniors;

  if (totalParticipents >= 50 && trackType === 'cross-country') {
    taxDiscount = 0.25;
  }

  let organizationExpences = 0.05;

  let inceome = juniors * juniorsTax + seniors * seniorsTax;
  let subTotal = inceome - inceome * taxDiscount;
  let totalIncome = subTotal - subTotal * organizationExpences;

  console.log(totalIncome.toFixed(2));
}

Demo(['10', '20', 'trail']);
Demo(['21', '26', 'cross-country']);
Demo(['30', '25', 'cross-country']);
Demo(['10', '10', 'downhill']);
Demo(['3', '40', 'road']);
