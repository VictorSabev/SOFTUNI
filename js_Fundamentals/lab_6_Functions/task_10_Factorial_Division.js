// Task 10 - Factorial Division

function factorialDevison(num1, num2) {
  let sumFactorial1 = num1;
  let sumFactorial2 = num2;
  for (let i = 1; i < num1; i++) {
    sumFactorial1 *= i;
  }

  for (let i = 1; i < num2; i++) {
    sumFactorial2 *= i;
  }
  let finalResult = sumFactorial1 / sumFactorial2;
  console.log(finalResult.toFixed(2));
}

factorialDevison(5, 2);
factorialDevison(6, 2);
