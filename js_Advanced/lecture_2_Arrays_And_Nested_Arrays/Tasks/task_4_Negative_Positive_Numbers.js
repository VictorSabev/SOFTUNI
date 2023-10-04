// Task 4 - Negative / Positive Numbers

function arrayReorder(inputArr) {
  let resultArr = [];
  for (let index of inputArr) {
    if (index < 0) {
      resultArr.unshift(index);
    } else {
      resultArr.push(index);
    }
  }
  for (let i of resultArr) {
    console.log(i);
  }
}

arrayReorder([7, -2, 8, 9]);
arrayReorder([3, -2, 0, -1]);
