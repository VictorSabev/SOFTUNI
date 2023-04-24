// Task 8 - Equal Pairs

function Demo(input) {
  let index = 0;
  let numberOfPairs = Number(input[index]);
  index++;
  let num1 = 0;
  let num2 = 0;
  //let pairValue = 0;

  for (let i = 1; i < numberOfPairs * 2; i++) {
    num1 = Number(input[index]);
    index++;
    num2 = Number(input[index]);
    index++;

    if (i % 2 == 0) {
      pairValue = num + Number(input[i - 1]);
    }
  }
}

Demo(['3', '1', '2', '0', '3', '4', '-1']);
Demo(['4', '1', '1', '3', '1', '2', '2', '0', '0']);
Demo(['2', '-1', '0', '0', '-1']);
Demo(['2', '1', '2', '2', '2']);
Demo(['1', '5', '5']);
Demo(['2', '-1', '2', '0', '-1']);
