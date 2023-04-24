// Task 2 - Rounding

function numRound(num1, num2) {
  let fixNum = num2;

  if (num2 > 15) {
    fixNum = 15;
  }

  let result = num1.toFixed(fixNum);
  console.log(parseFloat(result));
}

numRound(3.1415926535897932384626433832795, 2);
numRound(10.5, 3);
