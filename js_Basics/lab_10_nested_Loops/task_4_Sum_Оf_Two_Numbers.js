// Task 4 - Sum of Two Numbers

function Demo(input) {
  let index = 0;
  let intervalStart = Number(input[index]);
  index++;
  let intervalEnd = Number(input[index]);
  index++;
  let magicNumber = Number(input[index]);
  index++;
  let itterationsCounter = 0;
  let result = 0;
  let magicCounter = 0;

  for (let x1 = intervalStart; x1 <= intervalEnd; x1++) {
    for (let x2 = intervalStart; x2 <= intervalEnd; x2++) {
      itterationsCounter++;
      result = x1 + x2;
      if (result === magicNumber) {
        magicCounter++;
        console.log(`Combination N:${itterationsCounter} (${x1} + ${x2} = ${magicNumber})`);
        break;
      }
      с;
    }
    if (result === magicNumber) {
      break;
    }
  }

  if (magicCounter === 0) {
    console.log(`${itterationsCounter} combinations - neither equals ${magicNumber}`);
  }
}

Demo(['1', '10', '5']);
console.log('-------------------------');
Demo(['88', '888', '1000']);
console.log('-------------------------');
Demo(['23', '24', '20']);
console.log('-------------------------');
Demo(['88', '888', '2000']);
