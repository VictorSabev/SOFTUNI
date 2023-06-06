// Task 8 - Perfect Number

function perfecNumber(num) {
  let sum = 0;
  let numToString = num.toString();
  for (let i = 0; i < num; i++) {
    let divisor = numToString[i];
    if (divisor) sum += divisor;
  }
}

perfecNumber(6);
perfecNumber(28);
perfecNumber(1236498);
