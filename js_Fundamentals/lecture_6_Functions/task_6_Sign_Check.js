// Task 6 - Sign Check

function signCheck(num1, num2, num3) {
  let neagtiveCount = 0;
  if (num1 < 0) {
    neagtiveCount++;
  }

  if (num2 < 0) {
    neagtiveCount++;
  }

  if (num3 < 0) {
    neagtiveCount++;
  }

  if (neagtiveCount % 2 === 0) {
    console.log('Positive');
  } else {
    console.log('Negative');
  }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
