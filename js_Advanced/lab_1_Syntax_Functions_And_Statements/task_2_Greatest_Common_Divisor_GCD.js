// Task 2 - Greatest Common Divisor – GCD

function commonDivisor(num1, num2) {
  let biggestNumber = Math.max(num1, num2);
  let resultArr = [];

  for (let i = 1; i <= biggestNumber; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      resultArr.push(i);
    }
  }

  let biggestDivisor = resultArr.pop();

  console.log(biggestDivisor);
}

commonDivisor(15, 5);
commonDivisor(2154, 458);
