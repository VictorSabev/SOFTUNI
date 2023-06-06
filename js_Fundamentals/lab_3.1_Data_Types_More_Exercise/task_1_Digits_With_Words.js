// Task 1 - Digits with Words

function stingToNumberConvertor(string) {
  let num = 0;
  switch (string) {
    case 'nine':
      num = 9;
      break;
    case 'eight':
      num = 8;
      break;
    case 'seven':
      num = 7;
      break;
    case 'six':
      num = 6;
      break;
    case 'five':
      num = 5;
      break;
    case 'four':
      num = 4;
      break;
    case 'three':
      num = 3;
      break;
    case 'two':
      num = 2;
      break;
    case 'one':
      num = 1;
      break;
    case 'zero':
      num = 0;
      break;
  }
  console.log(num);
}

stingToNumberConvertor('nine');
stingToNumberConvertor('two');
stingToNumberConvertor('zero');
