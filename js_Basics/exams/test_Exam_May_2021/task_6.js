// Task 6 -

function Demo(input) {
  let index = 0;
  let tournamentDays = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let game = '';
  let result = '';

  let totalWinsCounter = 0;
  let totalLoosesCounter = 0;
  let dayWinsCounter = 0;
  let dayLoosesCounter = 0;
  let dayIncomeCounter = 0;
  let totalIncomeCounter = 0;

  for (let i = 0; i < tournamentDays; i++) {
    while (command !== 'Finish') {
      game = command;
      result = input[index];
      index++;

      if (result === 'win') {
        dayIncomeCounter += 20;
        dayWinsCounter++;
      } else {
        dayLoosesCounter++;
      }

      command = input[index];
      index++;
    }

    if (dayWinsCounter > dayLoosesCounter) {
      dayIncomeCounter *= 1.1;
    }

    totalWinsCounter += dayWinsCounter;
    totalLoosesCounter += dayLoosesCounter;
    totalIncomeCounter += dayIncomeCounter;

    dayIncomeCounter = 0;
    dayWinsCounter = 0;
    dayLoosesCounter = 0;

    command = input[index];
    index++;
  }

  if (totalWinsCounter > totalLoosesCounter) {
    totalIncomeCounter *= 1.2;
  }

  if (totalWinsCounter > totalLoosesCounter) {
    console.log(`You won the tournament! Total raised money: ${totalIncomeCounter.toFixed(2)}`);
  } else {
    console.log(`You lost the tournament! Total raised money: ${totalIncomeCounter.toFixed(2)}`);
  }
}

Demo(['2', 'volleyball', 'win', 'football', 'lose', 'basketball', 'win', 'Finish', 'golf', 'win', 'tennis', 'win', 'badminton', 'win', 'Finish']);
console.log('---------------------');
Demo([
  '3',
  'darts',
  'lose',
  'handball',
  'lose',
  'judo',
  'win',
  'Finish',
  'snooker',
  'lose',
  'swimming',
  'lose',
  'squash',
  'lose',
  'table tennis',
  'win',
  'Finish',
  'volleyball',
  'win',
  'basketball',
  'win',
  'Finish',
]);
