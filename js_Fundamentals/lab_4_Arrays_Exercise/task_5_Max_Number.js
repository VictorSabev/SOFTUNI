// Task 5 - Max Number

function maxNumber(array) {
  let newArray = [];
  const arrayLength = array.length;
  let chekcNumber = 0;
  let chekcNumber2 = 0;

  for (let i = 0; i < arrayLength; i++) {
    chekcNumber = array[i];

    for (let a = i + 1; a < arrayLength; a++) {
      chekcNumber2 = array[a];

      if (chekcNumber <= chekcNumber2) {
        break;
      }
    }

    if (chekcNumber > chekcNumber2) {
      newArray.push(chekcNumber);
    }
  }

  newArray.push(array[arrayLength - 1]);
  console.log(newArray.join(' '));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
