// Task 8 - Magic Sum

function magicSum(array, sum) {
  let num1 = 0;
  let num2 = 0;

  for (let i = 0; i < array.length; i++) {
    num1 = array[i];
    for (let a = i + 1; a < array.length; a++) {
      num2 = array[a];
      if (num1 + num2 === sum) {
        console.log(`${num1} ${num2}`);
      }
    }
  }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
console.log('----------');
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
console.log('----------');
magicSum([1, 2, 3, 4, 5, 6], 6);
