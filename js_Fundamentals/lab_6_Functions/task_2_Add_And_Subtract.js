// Task 2 - Add and Subtract

function addAndSubtracrt(int1, int2, int3) {
  function add(firstNUmber, secondNumber) {
    let result1 = firstNUmber + secondNumber;
    return result1;
  }

  let firstResult = add(int1, int2);

  function subtract(addResult, lastNumber) {
    let result2 = addResult - lastNumber;
    return result2;
  }

  let secondResult = subtract(firstResult, int3);

  console.log(secondResult);
}

addAndSubtracrt(23, 6, 10);
addAndSubtracrt(1, 17, 30);
addAndSubtracrt(42, 58, 100);
