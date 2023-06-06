// Task 2 - Add_And_Remove

function addAndRemove(array) {
  let newArray = [];
  const initialNumber = 1;
  let currentNumber = initialNumber;

  for (let i of array) {
    if (i === 'add') {
      newArray.push(currentNumber);
    } else if (i === 'remove') {
      newArray.splice(newArray.length - 1, 1);
    }

    currentNumber++;
  }
  if (newArray.length === 0) {
    console.log('Empty');
  } else {
    console.log(newArray.join(' '));
  }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);
