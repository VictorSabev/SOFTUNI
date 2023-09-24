// Task 7 - Sorting Numbers

function sortingNumbers(inputArr) {
  inputArr.sort((a, b) => a - b);
  let resultArr = [];

  while (inputArr.length > 0) {
    let firstElement = inputArr.shift();
    resultArr.push(firstElement);
    let secondElement = inputArr.pop();
    resultArr.push(secondElement);
  }
  return resultArr;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
