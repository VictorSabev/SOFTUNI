// Task 2 - Prime Number Checker

function primeChecker(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeChecker(7));
console.log(primeChecker(8));
console.log(primeChecker(81));
