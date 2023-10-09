// Task 1 - Sub Sum

function subSum(array, startIndex, endIndex) {
  if (!Array.isArray(array)) {
    console.log(NaN);
    return NaN;
  }

  if (startIndex < 0) {
    startIndex = 0;
  }

  if (endIndex >= array.length) {
    endIndex = array.length - 1;
  }

  let sum = 0;

  for (let i = startIndex; i <= endIndex; i++) {
    if (isNaN(array[i])) {
      return NaN;
    }
    sum += array[i];
  }

  return sum;
}

subSum([10, 20, 30, 40, 50, 60], 3, 300);
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
subSum([10, 'twenty', 30, 40], 0, 2);
subSum([], 1, 2);
subSum('text', 0, 2);
