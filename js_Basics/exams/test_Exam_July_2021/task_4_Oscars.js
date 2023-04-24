// Task 4 - Oscars

function Demo(input) {
  let actorsName = input[0];
  let academyPoints = Number(input[1]);
  let numberOfDudges = Number(input[2]);

  let dudgeName = '';
  let mark = 0;

  let scoreCount = academyPoints;

  for (let i = 3; i < input.length; i++) {
    dudgeName = input[i];
    mark = (Number(input[i + 1]) * dudgeName.length) / 2;
    i++;
    scoreCount += mark;
    if (scoreCount > 1250.5) {
      break;
    }
  }

  let diference = Math.abs(scoreCount - 1250.5);

  if (scoreCount > 1250.5) {
    console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${scoreCount.toFixed(1)}!`);
  } else {
    console.log(`Sorry, ${actorsName} you need ${diference.toFixed(1)} more!`);
  }
}

Demo(['Zahari Baharov', '205', '4', 'Johnny Depp', '45', 'Will Smith', '29', 'Jet Lee', '10', 'Matthew Mcconaughey', '39']);
Demo(['Sandra Bullock', '340', '5', 'Robert De Niro', '50', 'Julia Roberts', '40.5', 'Daniel Day-Lewis', '39.4', 'Nicolas Cage', '29.9', 'Stoyanka Mutafova', '33']);
