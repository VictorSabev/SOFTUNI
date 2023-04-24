// Task 7 - Sum of Numbers

function Demo(input) {
  let num = input[0];
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  console.log(`The sum of the digits is:${sum}`);
}

Demo(['1234']);
console.log('-------------------');
Demo(['564891']);
