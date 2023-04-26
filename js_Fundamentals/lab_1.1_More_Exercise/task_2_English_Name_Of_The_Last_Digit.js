// Task 2 - English Name of the Last Digit

function lastDigit(num) {
  let input = String(num);
  let selector1 = input.length;
  let selector2 = input.length - 1;

  input = Number(input.slice(selector2, selector1));

  let result = '';

  switch (input) {
    case 1:
      result = 'one';
      break;
    case 2:
      result = 'two';
      break;
    case 3:
      result = 'three';
      break;
    case 4:
      result = 'four';
      break;
    case 5:
      result = 'five';
      break;
    case 6:
      result = 'six';
      break;
    case 7:
      result = 'seven';
      break;
    case 8:
      result = 'eight';
      break;
    case 9:
      result = 'nine';
      break;
    case 0:
      result = 'zero';
      break;
  }
  console.log(result);
}

lastDigit(512);
lastDigit(1);
lastDigit(1643);
