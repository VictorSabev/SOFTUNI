// Task 3 - Sum Numbers

function Demo(input) {
  let targetNumber = Number(input[0]);
  let sumOfNumbers = 0;
  let index = 1;
  let log = Number(input[index]);

  while (sumOfNumbers < targetNumber) {
    sumOfNumbers += log;
    index++;
    log = Number(input[index]);
  }
  console.log(sumOfNumbers);
}

Demo(['100', '10', '20', '30', '40']);
Demo(['20', '1', '2', '3', '4', '5', '6']);
