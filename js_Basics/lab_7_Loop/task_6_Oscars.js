// Task 6 - Oscars

function Demo(input) {
  let index = 0;
  let name = input[index];
  index++;

  let academyPoints = Number(input[index]);
  index++;

  let n = Number(input[index]);
  index++;

  let hasNominee = false;

  for (let i = 0; i < n; i++) {
    let currentName = input[index];
    index++;

    let currentPoint = input[index];
    index++;

    let totalPoints = (currentName.length * currentPoint) / 2;
    academyPoints += totalPoints;

    if (academyPoints > 1250.5) {
      hasNominee = true;
      console.log(`Congratulations, ${name} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
      break;
    }
  }
  if (!hasNominee) {
    let diff = Math.abs(academyPoints - 1250.5);
    console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
  }
}
Demo(['Zahari Baharov', '205', '4', 'Johnny Depp', '45', 'Will Smith', '29', 'Jet Lee', '10', 'Matthew Mcconaughey', '39']);
console.log('-------------------');
Demo(['Sandra Bullock', '340', '5', 'Robert De Niro', '50', 'Julia Roberts', '40.5', 'Daniel Day-Lewis', '39.4', 'Nicolas Cage', '29.9', 'Stoyanka Mutafova', '33']);
