// Task 6 - Even and Odd Subtraction

function differenceCalculator(numbers) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i of numbers) {
    if (i % 2 === 0) {
      evenSum += i;
    } else {
      oddSum += i;
    }
  }

  let result = evenSum - oddSum;
  console.log(result);
}

differenceCalculator([1, 2, 3, 4, 5, 6]);
differenceCalculator([3, 5, 7, 9]);
differenceCalculator([2, 4, 6, 8, 10]);
