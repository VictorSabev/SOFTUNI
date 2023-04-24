// Task 2 - Exam Preparation

function Demo(input) {
  let index = 0;
  let carteBlanche = Number(input[index]);
  index++;
  let command = input[index];
  index++;

  let neagtiveScore = 0;
  let sumOfGrades = 0;
  let countOfAssignments = 0;
  let assignment = '';

  while (command !== 'Enough') {
    assignment = command;
    let score = Number(input[index]);
    index++;
    countOfAssignments++;
    sumOfGrades += score;

    if (score <= 4) {
      neagtiveScore++;
      if (neagtiveScore === carteBlanche) {
        console.log(`You need a break, ${neagtiveScore} poor grades.`);
        break;
      }
    }

    command = input[index];
    index++;
  }
  let avgScore = sumOfGrades / countOfAssignments;

  if (carteBlanche > neagtiveScore) {
    console.log(`Average score: ${avgScore.toFixed(2)}`);
    console.log(`Number of problems: ${countOfAssignments}`);
    console.log(`Last problem: ${assignment}`);
  }
}

Demo(['3', 'Money', '6', 'Story', '4', 'Spring Time', '5', 'Bus', '6', 'Enough']);
Demo(['2', 'Income', '3', 'Game Info', '6', 'Best Player', '4']);
