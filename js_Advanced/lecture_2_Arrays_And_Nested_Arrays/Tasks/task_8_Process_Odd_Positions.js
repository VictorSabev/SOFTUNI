// Task 8 - Process Odd Positions

function oddNumberProcess(inputArr) {
  let processArr = [];

  for (let i = 0; i < inputArr.length; i++) {
    let currentElement = inputArr[i];
    if (i % 2 !== 0) {
      currentElement *= 2;
      processArr.unshift(currentElement);
    }
  }

  return processArr;
}

oddNumberProcess([10, 15, 20, 25]);
oddNumberProcess([3, 0, 10, 4, 7, 3]);
