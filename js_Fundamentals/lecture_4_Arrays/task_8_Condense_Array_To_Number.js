// Task 8 - Condense Array to Number

function condense(array) {
  let arrayTest = array;
  let newArray = [];

  while (arrayTest.length !== 1) {
    for (let i = 0; i < arrayTest.length - 1; i++) {
      newArray.push(arrayTest[i] + arrayTest[i + 1]);
    }
    arrayTest = newArray;
    newArray = [];
  }
  console.log(arrayTest[0]);
}

condense([2, 10, 3]);
console.log('----------');
condense([5, 0, 4, 1, 2]);
console.log('----------');
condense([1]);
