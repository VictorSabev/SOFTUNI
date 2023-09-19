// Task 3 - Same Numbers

function sameNumber(input) {
  let digitToString = input.toString();
  let firstDigit = digitToString.slice(0, 1);
  let sum = 0;
  let truePrint = true;

  for (let i = 1; i < digitToString.length; i++) {
    if (digitToString[i] != firstDigit) {
      console.log(false);
      truePrint = false;
      break;
    }
  }

  if (truePrint === true) {
    console.log(true);
  }

  for (let i = 0; i < digitToString.length; i++) {
    sum += Number(digitToString[i]);
  }

  console.log(sum);
}

sameNumber(2222222);
sameNumber(1234);
