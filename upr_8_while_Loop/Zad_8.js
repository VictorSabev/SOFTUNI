// Zadacha - 08. Graduation

function Demo(input) {
  let index = 0;
  let name = input[0];
  let classCounter = 1;
  let notPass = 0;
  let totalScore = 0;

  while (classCounter <= 12) {
    index++;
    let currentMark = Number(input[index]);

    if (currentMark >= 4) {
      classCounter++;
      totalScore += currentMark;
    } else if (currentMark < 4) {
      notPass++;
    } else if (notPass >= 1) {
      console.log(`${name} has been excluded at ${classCounter} grade`);
      break;
    }
  }
  let avrMark = (totalScore / 12).toFixed(2);
  if (notPass <= 1) {
    console.log(`${name} graduated. Average grade: ${avrMark}`);
  }
}

Demo([
  'Gosho',
  '5',
  '5.5',
  '6',
  '5.43',
  '5.5',
  '6',
  '5.55',
  '5',
  '6',
  '6',
  '5.43',
  '5',
]);
Demo(['Mimi', '5', '6', '5', '6', '5', '6', '6', '2', '3']);
