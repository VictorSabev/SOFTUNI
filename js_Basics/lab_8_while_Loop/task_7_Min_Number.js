// Task 7 - Min Number

function Demo(input) {
  let index = 0;
  let log = input[index];
  let minNum = Number.MAX_SAFE_INTEGER;

  while (log !== 'Stop') {
    let num = Number(log);
    if (num < minNum) {
      minNum = num;
    }
    index++;
    log = input[index];
  }
  console.log(minNum);
}

Demo(['100', '99', '80', '70', 'Stop']);
Demo(['-10', '20', '-30', 'Stop']);
Demo(['45', '-20', '7', '99', 'Stop']);
Demo(['999', 'Stop']);
Demo(['-1', '-2', 'Stop']);
