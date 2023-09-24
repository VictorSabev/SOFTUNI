// Task 3 - Add and Remove Elements

function addRemoveElements(inputArr) {
  let result = 1;
  let resultArr = [];
  let command = '';
  for (let i = 0; i < inputArr.length; i++) {
    command = inputArr[i];

    if (command === 'remove') {
      resultArr.pop();
    } else {
      resultArr.push(result);
    }
    result++;
  }
  if (resultArr.length > 0) {
    console.log(resultArr.join('\n'));
  } else {
    console.log('Empty');
  }
}

addRemoveElements(['add', 'add', 'add', 'add']);
addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addRemoveElements(['remove', 'remove', 'remove']);
