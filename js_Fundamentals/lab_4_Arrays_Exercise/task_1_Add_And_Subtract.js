// Task 1 - Add and Subtract

function modifyArrays(input) {
  let newArray = input;
  let inputSum = 0;
  let newArraySum = 0;
  for (let i = 0; i < input.length; i++) {
    inputSum += input[i];
    if (input[i] % 2 === 0) {
      newArray[i] = input[i] + i;
    } else {
      newArray[i] = input[i] - i;
    }
    newArraySum += newArray[i];
  }
  console.log(newArray);
  console.log(inputSum);
  console.log(newArraySum);
}

modifyArrays([5, 15, 23, 56, 35]);
modifyArrays([-5, 11, 3, 0, 2]);
