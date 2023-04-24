// Task 11 - Sum of Odd Numbers

function Demo(num) {
  let i = 1;
  let counter = 0;
  let sum = 0;
  while (counter !== num) {
    if (i % 2 !== 0) {
      console.log(i);
    }
    sum += i;
    i += 2;
    counter++;
  }
  console.log(`Sum: ${sum}`);
}

Demo(5);
console.log('---------------');
Demo(3);
