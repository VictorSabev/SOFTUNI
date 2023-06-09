// Task 3 - Points Validation

function pointsValidation(input) {
  const x0 = 0;
  const y0 = 0;
  let currentX1 = 0;
  let currentY1 = 0;
  let currentX2 = 0;
  let currentY2 = 0;
  let counter = 0;
  let result = 0;

  for (let i = 0; i < input.length + 1; i = i + 2) {
    if (counter === 2) {
      i = 0;
      currentX1 = input[i + 2];
      currentY1 = input[i + 3];
    }
    currentX2 = input[i];
    currentY2 = input[i + 1];

    if (counter < 2) {
      currentX1 = x0;
      currentY1 = y0;
    }

    counter++;

    result = Math.sqrt((currentX2 - currentX1) ** 2 + (currentY2 - currentY1) ** 2);

    if (result % 1 === 0) {
      console.log(`{${currentX2}, ${currentY2}} to {${currentX1}, ${currentY1}} is valid`);
    } else {
      console.log(`{${currentX2}, ${currentY2}} to {${currentX1}, ${currentY1}} is invalid`);
    }

    if (counter === 3) {
      break;
    }
  }
}

pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);
