// Zadacha 6 - Easter Competition

function Demo(input) {
  let index = 0;
  let numberOfCakes = Number(input[index]);
  index++;
  let command = input[index];
  index++;

  let chefName = '';
  let score = 0;
  let currentScore = 0;
  let currentLead = 0;
  let chefLead = '';

  for (i = 1; i <= numberOfCakes; i++) {
    while (command !== 'Stop') {
      score = Number(command);
      if (isNaN(score)) {
        chefName = command;
      } else {
        currentScore += score;
      }
      command = input[index];
      index++;
    }
    console.log(`${chefName} has ${currentScore} points.`);
    if (currentScore > currentLead) {
      currentLead = currentScore;
      chefLead = chefName;
      console.log(`${chefLead} is the new number 1!`);
    }

    currentScore = 0;
    command = input[index];
    index++;
  }
  console.log(`${chefLead} won competition with ${currentLead} points!`);
}

Demo(['3', 'Chef Manchev', '10', '10', '10', '10', 'Stop', 'Natalie', '8', '2', '9', 'Stop', 'George', '9', '2', '4', '2', 'Stop']);
console.log('----------------------');
Demo(['2', 'Chef Angelov', '9', '9', '9', 'Stop', 'Chef Rowe', '10', '10', '10', '10', 'Stop']);
