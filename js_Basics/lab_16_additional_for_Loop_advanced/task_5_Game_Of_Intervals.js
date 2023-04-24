// Task 5 - Game Of Intervals

function Demo(input) {
  let numberOfTurns = Number(input[0]);
  let turn = 0;
  let score = 0;

  counter1 = 0;
  counter2 = 0;
  counter3 = 0;
  counter4 = 0;
  counter5 = 0;
  counter6 = 0;

  for (let i = 1; i <= numberOfTurns; i++) {
    turn = Number(input[i]);

    if (turn < 0 || turn > 50) {
      turn = 0;
      score = score / 2;
      counter1++;
    } else if (turn >= 0 && turn <= 9) {
      score += turn * 0.2;
      counter2++;
    } else if (turn >= 10 && turn <= 19) {
      score += turn * 0.3;
      counter3++;
    } else if (turn >= 20 && turn <= 29) {
      score += turn * 0.4;
      counter4++;
    } else if (turn >= 30 && turn <= 39) {
      score += 50;
      counter5++;
    } else if (turn >= 40 && turn <= 50) {
      score += 100;
      counter6++;
    }
  }

  let avg1 = ((counter1 / numberOfTurns) * 100).toFixed(2);
  let avg2 = ((counter2 / numberOfTurns) * 100).toFixed(2);
  let avg3 = ((counter3 / numberOfTurns) * 100).toFixed(2);
  let avg4 = ((counter4 / numberOfTurns) * 100).toFixed(2);
  let avg5 = ((counter5 / numberOfTurns) * 100).toFixed(2);
  let avg6 = ((counter6 / numberOfTurns) * 100).toFixed(2);

  console.log(score.toFixed(2));
  console.log(`From 0 to 9: ${avg2}%`);
  console.log(`From 10 to 19: ${avg3}%`);
  console.log(`From 20 to 29: ${avg4}%`);
  console.log(`From 30 to 39: ${avg5}%`);
  console.log(`From 40 to 50: ${avg6}%`);
  console.log(`Invalid numbers: ${avg1}%`);
}

Demo(['10', '43', '57', '-12', '23', '12', '0', '50', '40', '30', '20']);
