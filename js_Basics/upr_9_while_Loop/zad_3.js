// Zadacha 3 - Vacation

function Demo(input) {
  let index = 0;
  let vacationPrice = Number(input[index]);
  index++;
  let savings = Number(input[index]);
  index++;

  let spendCounter = 0;
  let dayCounter = 0;

  while (savings < vacationPrice) {
    let operation = input[index];
    index++;
    let amount = Number(input[index]);
    index++;
    dayCounter++;

    if (operation === 'spend') {
      if (savings < amount) {
        savings = 0;
      } else {
        savings -= amount;
      }
      spendCounter++;
      if (spendCounter === 5) {
        console.log("You can't save the money.");
        console.log(dayCounter);
        break;
      }
    } else {
      savings += amount;
      spendCounter = 0;
    }
  }

  if (spendCounter < 5) {
    console.log(`You saved the money for ${dayCounter} days.`);
  }
}

Demo(['2000', '1000', 'spend', '1200', 'save', '2000']);
Demo([
  '110',
  '60',
  'spend',
  '10',
  'spend',
  '10',
  'spend',
  '10',
  'spend',
  '10',
  'spend',
  '10',
]);
Demo([
  '250',
  '150',
  'spend',
  '50',
  'spend',
  '50',
  'save',
  '100',
  'save',
  '100',
]);
