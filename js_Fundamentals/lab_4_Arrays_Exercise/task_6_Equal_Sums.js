// Task 6 - Equal Sums

function equalSums(array) {
  let sumBefore = 0;
  let sumAfter = 0;
  let magicNumberCounter = 0;

  for (let currentElement = 0; currentElement < array.length; currentElement++) {
    for (let elementBefore = 0; elementBefore < currentElement; elementBefore++) {
      sumBefore += array[elementBefore];
    }
    for (let elementAfter = currentElement + 1; elementAfter < array.length; elementAfter++) {
      sumAfter += array[elementAfter];
    }
    if (sumBefore === sumAfter) {
      console.log(currentElement);
      magicNumberCounter++;
    }
    if (currentElement === array.length - 1 && magicNumberCounter === 0) {
      console.log('no');
    }
    sumBefore = 0;
    sumAfter = 0;
  }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
