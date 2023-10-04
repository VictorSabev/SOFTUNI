// Task 5 - Smallest Two Numbers

function solve(inputArr) {
  inputArr = inputArr.sort((a, b) => a - b);
  let resultArr = [];
  resultArr.push(inputArr[0], inputArr[1]);
  console.log(resultArr.join(' '));
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);
