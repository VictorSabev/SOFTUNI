// Task 3 - Same Numbers

function sameNumber(input) {
  let digitToString = input.toString();
  let firstDigit = digitToString[0];
  let sum = 0;
  let isTrue = true;

  for (let i = 1; i < digitToString.length; i++) {
    if (digitToString[i] != firstDigit) {
      console.log(false);
      isTrue = false;
      break;
    }
  }

  if (isTrue === true) {
    console.log(true);
  }

  for (let i = 0; i < digitToString.length; i++) {
    sum += Number(digitToString[i]);
  }

  console.log(sum);
}

sameNumber(2222222);
sameNumber(1234);
