// Task 9 - Biggest Element

function biggestElement(inputArr) {
  let allNumbersToSgtring = inputArr.join(',');
  let allNumbers = allNumbersToSgtring.split(',');
  allNumbers = allNumbers.map(Number);

  let soretedArr = allNumbers.sort((a, b) => b - a);

  let result = soretedArr.shift();

  return result;
}

biggestElement([
  [20, 50, 10],
  [8, 33, 145],
]);
biggestElement([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
