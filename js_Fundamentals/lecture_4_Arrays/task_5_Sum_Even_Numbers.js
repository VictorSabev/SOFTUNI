// Task 5 - Sum Even Numbers

function sumNumbers(numbers) {
  let result = 0;
  for (let number of numbers) {
    if (number % 2 === 0) {
      result += Number(number);
    }
  }
  console.log(result);
}

sumNumbers(['1', '2', '3', '4', '5', '6']);
sumNumbers(['3', '5', '7', '9']);
sumNumbers(['2', '4', '6', '8', '10']);
