// Zadacha 6 - Operations Between Numbers

function Demo(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let operation = input[2];
  let result = 0;
  let typeOfNumber = '';

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = (num1 / num2).toFixed(2);
      break;
    case '%':
      result = num1 % num2;
      break;
  }

  
  if (operation === '+' || operation === '-' || operation === '*') {
    if (result % 2 === 0) {
      typeOfNumber = 'even';
    } else {
      typeOfNumber = 'odd';
    }
    console.log(`${num1} ${operation} ${num2} = ${result} - ${typeOfNumber}`);
  } else if (num2 === 0 && (operation === '/' || operation === '%')) {
    console.log(`Cannot divide ${num1} by zero`);
  } else if (operation === '/') {
    console.log(`${num1} / ${num2} = ${result}`);
  } else if (operation === '%') {
    console.log(`${num1} % ${num2} = ${result}`);
  }
}

Demo(['10', '12', '+']);
Demo(['123', '12', '/']);
Demo(['112', '0', '/']);
Demo(['10', '1', '-']);
Demo(['10', '3', '%']);
Demo(['10', '0', '%']);
Demo(['7', '3', '*']);
