// Task 3 - Sum First Last

function firstAndLast(inputArr) {
  inputArr = inputArr.map(Number);
  const firstIndex = inputArr.shift();
  const lastIndex = inputArr.pop();

  const result = firstIndex + lastIndex;
  console.log(result);
}

firstAndLast(['20', '30', '40']);
firstAndLast(['5', '10']);
