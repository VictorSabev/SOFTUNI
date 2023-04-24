// Task 11 - Odd / Even Position

function Demo(input) {
  let entryNumber = Number(input[0]);
  let num = 0;
  let evenNumberMax = Number(input[1]);
  let oddNumberMax = Number(input[0]);
  let evenNumberMin = Number(input[0]);
  let oddNumberMin = Number(input[0]);
  let evenSUM = 0;
  let oddSUM = 0;

  for (let i = 1; i <= entryNumber; i++) {
    num = Number(input[i]);
    if ((entryNumber = 0)) {
    }

    if (num % 2 === 0) {
      evenSUM += num;
      if (num > evenNumberMax) {
        evenNumberMax = num;
      } else if (num < evenNumberMin) {
        evenNumberMin = num;
      }
    } else {
      oddSUM += num;
      if (num > oddNumberMax) {
        oddNumberMax = num;
      } else if (num < oddNumberMin) {
        oddNumberMin = num;
      }
    }
  }

  console.log(`OddSum= ${oddSUM},`);
  console.log(`OddMin= ${oddNumberMin},`);
  console.log(`OddMax= ${oddNumberMax},`);
  console.log(`EvenSum= ${evenSUM},`);
  console.log(`EvenMin= ${evenNumberMin},`);
  console.log(`EvenMax= ${evenNumberMax}`);
}

Demo(['6', '2', '3', '5', '4', '2', '1']);
console.log('------------------');
Demo(['2', '1.5', '-2.5']);
console.log('------------------');
Demo(['1', '1']);
console.log('------------------');
Demo(['0']);
console.log('------------------');
Demo(['5', '3', '-2', '8', '11', '-3']);
console.log('------------------');
Demo(['4', '1.5', '1.75', '1.5', '1.75']);
console.log('------------------');
Demo(['1', '-5']);
console.log('------------------');
Demo(['3', '-1', '-2', '-3']);
