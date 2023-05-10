// Task 4 - Integer and Float

function checkNumber(num1, num2, num3) {
  let result = num1 + num2 + num3;
  let check = '';

  // let check = Number.isInteger(result) ? 'Integer' : 'Float';      - ternaren operator !!! 


  if (result % 1 === 0) {   // if (Number.isInteger(result))
    check = 'Integer';
  } else {
    check = 'Float';
  }

  console.log(`${result} - ${check}`);
}

checkNumber(9, 100, 1.1);
checkNumber(100, 200, 303);
 