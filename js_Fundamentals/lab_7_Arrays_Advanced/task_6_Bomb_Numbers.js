// Task 6 - Bomb Numbers

function yesRicoKaboom(mineField, mineSpecs) {
  let mineDesignation = mineSpecs[0];
  let blastRadius = mineSpecs[1];

  while (mineField.includes(mineDesignation)) {
    let kaboomPoint = mineField.indexOf(mineDesignation);
    let startinPoint = kaboomPoint - blastRadius;
    let endPoint = blastRadius * 2 + 1;
    if (startinPoint < 0) {
      startinPoint = 0;
    }
    if (endPoint > mineField.length) {
      endPoint = mineField.length;
    }
    mineField.splice(startinPoint, endPoint);
  }
  let sum = 0;
  for (let i of mineField) {
    sum += i;
  }
  console.log(sum);
}

yesRicoKaboom([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
yesRicoKaboom([1, 4, 4, 2, 8, 9, 1], [9, 3]);
yesRicoKaboom([1, 7, 7, 1, 2, 3], [7, 1]);
yesRicoKaboom([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
