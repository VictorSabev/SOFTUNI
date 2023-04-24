// Task 2 - Bonus Score

function Demo(input) {
  let score = Number(input[0]);
  let bonusPoints;
  let superBonus;

  if (score <= 100) {
    bonusPoints = 5;
  } else if (score > 100 && score <= 1000) {
    bonusPoints = 0.2 * score;
  } else if (score > 1000) {
    bonusPoints = 0.1 * score;
  }

  if (score % 2 === 0) {
    superBonus = 1;
  } else if (score % 5 === 0) {
    superBonus = 2;
  } else {
    superBonus = 0;
  }

  let totaBonusPoints = bonusPoints + superBonus;
  let totalScore = totaBonusPoints + score;

  console.log(totaBonusPoints);
  console.log(totalScore);
}

Demo(['20']);
Demo(['175']);
Demo(['2703']);
Demo(['15875']);
