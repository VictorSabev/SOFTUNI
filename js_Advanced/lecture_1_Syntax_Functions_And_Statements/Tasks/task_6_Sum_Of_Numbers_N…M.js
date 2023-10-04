// Task 6 - Sum of Numbers N…M

function printSum(n, m) {
  const startPosition = Number(n);
  const endPosition = Number(m);

  let result = 0;

  for (let i = startPosition; i <= endPosition; i++) {
    result += i;
  }

  console.log(result);
}

printSum('1', '5');
printSum('-8', '20');
