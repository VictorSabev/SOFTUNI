// Task 10 - Aggregate Elements

function arrManipulation(input) {
  let sumOfElements = 0;
  let inverseSum = 0;
  let concatResult = '';

  for (let i = 0; i < input.length; i++) {
    let currentNum = input[i];
    let currenNumString = input[i].toString();
    sumOfElements += currentNum;
    inverseSum += 1 / currentNum;
    concatResult += currenNumString;
  }
  console.log(sumOfElements);
  console.log(inverseSum);
  console.log(concatResult);
}

arrManipulation([1, 2, 3]);
arrManipulation([2, 4, 8, 16]);
