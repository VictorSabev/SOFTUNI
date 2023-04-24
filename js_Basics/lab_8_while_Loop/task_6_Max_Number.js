// Task 6 - Max Number

function Demo(input) {
  let index = 0;
  let log = input[index];
  let maxNum = Number.MIN_SAFE_INTEGER;

  while (log !== 'Stop') {
    let num = Number(log);
    if (num > maxNum) {
      maxNum = num;
    }
    index++;
    log = input[index];
  }
  console.log(maxNum);
}

Demo(['100', '99', '80', '70', 'Stop']);
Demo(['-10', '20', '-30', 'Stop']);
Demo(['45', '-20', '7', '99', 'Stop']);
Demo(['999', 'Stop']);
Demo(['-1', '-2', 'Stop']);
