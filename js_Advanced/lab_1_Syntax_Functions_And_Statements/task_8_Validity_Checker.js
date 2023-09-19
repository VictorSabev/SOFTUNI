// Task 8 - Validity Checker

function validityChecker(x1, y1, x2, y2) {
  const firstResult = Math.sqrt((x1 - 0) ** 2 + (y1 - 0) ** 2);
  const secondResult = Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2);
  const thirdResult = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  let currentStatus = '';

  if (Number.isInteger(firstResult)) {
    currentStatus = 'valid';
  } else {
    currentStatus = 'invalid';
  }
  console.log(`{${x1}, ${y1}} to {0, 0} is ${currentStatus}`);

  if (Number.isInteger(secondResult)) {
    currentStatus = 'valid';
  } else {
    currentStatus = 'invalid';
  }
  console.log(`{${x2}, ${y2}} to {0, 0} is ${currentStatus}`);

  if (Number.isInteger(thirdResult)) {
    currentStatus = 'valid';
  } else {
    currentStatus = 'invalid';
  }
  console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${currentStatus}`);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
