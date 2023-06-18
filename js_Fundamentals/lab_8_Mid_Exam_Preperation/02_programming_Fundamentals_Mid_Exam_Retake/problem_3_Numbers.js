// Problem 3 - Numbers

function numbers(input) {
  let arrayOfNum = input
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a);
  let intSum = 0;
  let resultArray = [];

  for (let i of arrayOfNum) {
    intSum += i;
  }

  let avgSum = intSum / arrayOfNum.length;
  let count = 0;

  for (let a of arrayOfNum) {
    if (a > avgSum) {
      resultArray.push(a);
      count++;
      if (count === 5) {
        break;
      }
    }
  }
  if (count === 0) {
    console.log('No');
  } else {
    console.log(resultArray.join(' '));
  }
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');
