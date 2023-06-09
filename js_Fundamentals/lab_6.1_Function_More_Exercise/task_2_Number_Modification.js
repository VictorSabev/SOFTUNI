// Task 2 - Number Modification

function numberModification(number) {
  let numberToString = number.toString();
  let stringToArray = numberToString.split('');
  let sum = 0;

  for (let i of stringToArray) {
    sum += Number(i);
  }

  let result = sum / stringToArray.length;

  while (result < 5) {
    stringToArray.push(9);
    sum += 9;
    result = sum / stringToArray.length;
  }

  let newNumber = stringToArray.join('');
  console.log(newNumber);
}

numberModification(101);
numberModification(5835);
