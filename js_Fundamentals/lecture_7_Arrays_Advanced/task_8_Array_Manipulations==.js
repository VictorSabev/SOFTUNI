// Task 8 - Array Manipulations

function arrayManipulation(input) {
  let arrayOfNumbers = input.shift().split(' ').map(Number);

  let argument = 0;
  for (let i = 0; i < input.length; i++) {
    let command = input[i];

    switch (true) {
      case command.includes('Add'):
        argument = command.slice(4);
        arrayOfNumbers.push(Number(argument));
        break;
      case command.includes('RemoveAt'):
        argument = command.slice(9);
        arrayOfNumbers = arrayOfNumbers.filter((x, i) => i !== Number(argument));
        break;
      case command.includes('Remove'):
        argument = command.slice(7);
        arrayOfNumbers = arrayOfNumbers.filter((x) => x !== Number(argument));
        break;
      case command.includes('Insert'):
        argument = command.slice(7);
        argument = argument.split(' ');
        let elementToInsert = Number(argument[0]);
        let index = Number(argument[1]);
        arrayOfNumbers.splice(index, 0, elementToInsert);
        break;
    }
  }
  console.log(arrayOfNumbers.join(' '));
}

arrayManipulation(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
arrayManipulation(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);
