// Task 5 - Account Balance

function Demo(input) {
  let index = 0;
  let log = input[index];
  let counter = 0;

  while (log !== 'NoMoreMoney') {
    let logAsNUmber = Number(log);

    if (logAsNUmber < 0) {
      console.log(`Invalid operation!`);
      break;
    }

    counter += logAsNUmber;

    console.log(`Increase: ${logAsNUmber.toFixed(2)}`);
    index++;
    log = input[index];
  }

  console.log(`Total: ${counter.toFixed(2)}`);
}

Demo(['5.51', '69.42', '100', 'NoMoreMoney']);
console.log('-------------------');
Demo(['120', '45.55', '-150']);
