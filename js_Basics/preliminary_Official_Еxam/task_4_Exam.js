// Task 4 - Exam

function Demo(input) {
  let NumberOfStudents = Number(input[0]);
  let score = 0;

  let scoreCounter = 0;
  let failCounter = 0;
  let midCounter = 0;
  let highCounter = 0;
  let perfectCounter = 0;

  for (let i = 1; i <= NumberOfStudents; i++) {
    score = Number(input[i]);
    scoreCounter += score;

    if (score < 3) {
      failCounter++;
    } else if (score >= 3 && score <= 3.99) {
      midCounter++;
    } else if (score >= 4 && score <= 4.99) {
      highCounter++;
    } else if (score >= 5) {
      perfectCounter++;
    }
  }

  let avgScore = scoreCounter / NumberOfStudents;

  let avgFail = (failCounter / NumberOfStudents) * 100;
  let avgMid = (midCounter / NumberOfStudents) * 100;
  let avgHigh = (highCounter / NumberOfStudents) * 100;
  let avgPerfect = (perfectCounter / NumberOfStudents) * 100;

  console.log(`Top students: ${avgPerfect.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${avgHigh.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${avgMid.toFixed(2)}%`);
  console.log(`Fail: ${avgFail.toFixed(2)}%`);
  console.log(`Average: ${avgScore.toFixed(2)}`);
}

Demo(['10', '3.00', '2.99', '5.68', '3.01', '4', '4', '6.00', '4.50', '2.44', '5']);
console.log('---------------------------');
Demo(['6', '2', '3', '4', '5', '6', '2.2']);
