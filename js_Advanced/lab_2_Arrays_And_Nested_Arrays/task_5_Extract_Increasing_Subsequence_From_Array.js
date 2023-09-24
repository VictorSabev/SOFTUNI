// Task 5 - Extract Increasing Subsequence from Array

function extraction(inputArr) {
  let currentBiggestNumber = inputArr[0];
  let resultArr = [];

  for (let element of inputArr) {
    if (element >= currentBiggestNumber) {
      currentBiggestNumber = element;
      resultArr.push(element);
    }
  }

  return resultArr;
}

extraction([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extraction([1, 2, 3, 4]);
extraction([20, 3, 2, 15, 6, 1]);
