// Task 1 - Sort Array

function sortArray(inputArr, instructions) {
  if (instructions === 'asc') {
    return inputArr.sort((a, b) => a - b);
  } else {
    return inputArr.sort((a, b) => b - a);
  }
}

sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');
