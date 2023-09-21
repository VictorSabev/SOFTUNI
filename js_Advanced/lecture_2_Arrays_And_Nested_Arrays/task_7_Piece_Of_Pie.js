// Task 7 - Piece of Pie

function pieceOFPie(inputArr, target1, target2) {
  let startTarget = inputArr.indexOf(target1);
  let endTarget = inputArr.indexOf(target2);
  let resultArr = inputArr.slice(startTarget, endTarget + 1);

  return resultArr;
}

pieceOFPie(
  [
    'Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie',
  ],
  'Key Lime Pie',
  'Lemon Meringue Pie'
);
pieceOFPie(
  [
    'Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie',
  ],
  'Pot Pie',
  'Smoked Fish Pie'
);
