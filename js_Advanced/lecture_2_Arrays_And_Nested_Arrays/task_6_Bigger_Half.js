// Task 6 - Bigger Half

function biggerHalf(inputArr) {
  const inputArrCopy = inputArr.slice();

  const arrLength = inputArrCopy.length;
  const halfLength = Math.ceil(arrLength / 2);
  const inputArrSorted = inputArrCopy.sort((a, b) => a - b);

  let resultArr = inputArrSorted.slice(-halfLength);
  return resultArr;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
