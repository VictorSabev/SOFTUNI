// Task 3 - Sum Prime Non Prime

function Demo(input) {
  let index = 0;
  let command = input[index];
  index++;
  let primeCounter = 0;
  let nonPrimeCounter = 0;

  while (command !== 'stop') {
    let num = Number(command);

    if (num < 0) {
      console.log(`Number is negative.`);
      command = input[index];
      index++;
      continue;
    }
    if (num === 1) {
      primeCounter += num;
      command = input[index];
      index++;
      continue;
    }

    let isPrime = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        nonPrimeCounter += num;
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeCounter += num;
    }

    command = input[index];
    index++;
  }

  console.log(`Sum of all prime numbers is: ${primeCounter}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeCounter}`);
}

Demo(['3', '9', '0', '7', '19', '4', 'stop']);
console.log('----------------');
Demo(['30', '83', '33', '-1', '20', 'stop']);
console.log('----------------');
Demo(['0', '-9', '0', 'stop']);
