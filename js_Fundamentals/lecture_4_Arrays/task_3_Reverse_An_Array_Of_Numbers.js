// Task 3 - Reverse an Array of Numbers

function reverseArray(num, array) {
  let newArray = [];
  for (let i = 0; i < num; i++) {
    newArray.push(array[i]);
  }
  newArray.reverse();
  console.log(newArray.join(' '));
}

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);
