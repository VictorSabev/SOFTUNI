// Task 1 - Sum Digits

function sumDigits(num) {
  let inputData = String(num);
  let sum = 0;
  for (let i = 0; i < inputData.length; i++) {
    let result = Number(inputData[i]);
    sum += result;
  }
  console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);
