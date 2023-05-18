// Task 7 - Equal Arrays

function arrayCompare(array1, array2) {
  let array1Length = array1.length;
  let array2Length = array2.length;
  let sum = 0;

  for (let a1 = 0, a2 = 0; a1 < array1Length, a2 < array2Length; a1++, a2++) {
    array1[a1] = Number(array1[a1]);
    array2[a2] = Number(array2[a2]);
  }

  let areEqual = true;
  for (let i = 0; i < array1Length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      areEqual = false;
      break;
    }
    sum += array1[i];
  }

  if (areEqual === true) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

arrayCompare(['10', '20', '30'], ['10', '20', '30']);
arrayCompare(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
arrayCompare(['1'], ['10']);
