// Task 6 - Print And Sum

function sumInterval(num1, num2) {
  let array = String(num1);
  let result = num1;

  for (let i = num1 + 1; i <= num2; i++) {
    array += ` ${i}`;
    result += i;
  }
  console.log(array);
  console.log(`Sum: ${result}`);
}

sumInterval(5, 10);
sumInterval(0, 26);
sumInterval(50, 60);
