// Task 1 - Sum First and Last

function sumFirstAndLastElelment(array) {
  const firstElement = Number(array.shift());
  const lastElement = Number(array.pop());
  let sum = firstElement + lastElement;
  console.log(sum);
}

sumFirstAndLastElelment(['20', '30', '40']);
sumFirstAndLastElelment(['5', '10']);
