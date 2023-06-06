// Task 4 - Non-Decreasing Subset

function whatever(array) {
  let currentBigestNumber = 0;
  let newArray = [];

  for (let i of array) {
    if (i >= currentBigestNumber) {
      currentBigestNumber = i;
      newArray.push(i);
    }
  }
  console.log(newArray.join(' '));
}

whatever([1, 3, 8, 4, 10, 12, 3, 2, 24]);
whatever([1, 2, 3, 4]);
whatever([20, 3, 2, 15, 6, 1]);
