// Task 5 - Best Player

function Demo(input) {
  let index = 0;
  let playerName = input[index];
  index++;
  let goalScored = Number(input[index]);
  index++;

  let highestScore = 0;
  let bestPlayer = '';
  let hatTrick = false;

  while (playerName !== 'END') {
    if (goalScored > highestScore) {
      highestScore = goalScored;
      bestPlayer = playerName;
    }

    if (highestScore >= 3) {
      hatTrick = true;
    }

    if (goalScored >= 10) {
      break;
    }

    playerName = input[index];
    index++;
    goalScored = Number(input[index]);
    index++;
  }

  console.log(`${bestPlayer} is the best player!`);
  if (hatTrick === true) {
    console.log(`He has scored ${highestScore} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${highestScore} goals.`);
  }
}

Demo(['Neymar', '2', 'Ronaldo', '1', 'Messi', '3', 'END']);
console.log('-----------------------');
Demo(['Silva', '5', 'Harry Kane', '10']);
console.log('-----------------------');
Demo(['Petrov', '2', 'Drogba', '11']);
console.log('-----------------------');
Demo(['Rooney', '1', 'Junior', '2', 'Paolinio', '2', 'END']);
console.log('-----------------------');
Demo(['Zidane', '1', 'Felipe', '2', 'Johnson', '4', 'END']);
