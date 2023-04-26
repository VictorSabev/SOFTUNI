// Task 1 - Sort Numbers

function Sort(num1, num2, num3) {
  let array = [num1, num2, num3];
  array.sort(function (a, b) {
    return b - a;
  });

  let a = array[0];
  let b = array[1];
  let c = array[2];

  console.log(a);
  console.log(b);
  console.log(c);
}

Sort(2, 1, 3);
console.log('---------------');
Sort(-2, 1, 3);
console.log('---------------');
Sort(0, 0, 2);
