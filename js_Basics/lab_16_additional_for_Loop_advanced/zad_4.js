// Zadacha 4 - Grades

function Demo(input) {
  let numberOfStudents = Number(input[0]);
  let score = 0;
  let scoreCount = 0;

  let topStudentsCount = 0;
  let highScoreStudentsCount = 0;
  let midScoreStudentsCount = 0;
  let failStudentsCount = 0;

  for (let i = 1; i <= numberOfStudents; i++) {
    score = Number(input[i]);
    scoreCount += score;

    if (score <= 2.99) {
      failStudentsCount++;
    } else if (score >= 3 && score <= 3.99) {
      midScoreStudentsCount++;
    } else if (score >= 4 && score <= 4.99) {
      highScoreStudentsCount++;
    } else if (score >= 5 && score <= 6) {
      topStudentsCount++;
    }
  }

  let avgScore = (scoreCount / numberOfStudents).toFixed(2);
  let avgTop = ((topStudentsCount / numberOfStudents) * 100).toFixed(2);
  let avgHigh = ((highScoreStudentsCount / numberOfStudents) * 100).toFixed(2);
  let avgMid = ((midScoreStudentsCount / numberOfStudents) * 100).toFixed(2);
  let avgFail = ((failStudentsCount / numberOfStudents) * 100).toFixed(2);

  console.log(`Top students: ${avgTop}%`);
  console.log(`Between 4.00 and 4.99: ${avgHigh}%`);
  console.log(`Between 3.00 and 3.99: ${avgMid}%`);
  console.log(`Fail: ${avgFail}%`);
  console.log(`Average: ${avgScore}`);
}

Demo(['10', '3.00', '2.99', '5.68', '3.01', '4', '4', '6.00', '4.50', '2.44', '5']);
console.log('------------------------');
Demo(['6', '2', '3', '4', '5', '6', '2.2']);
console.log('------------------------');
