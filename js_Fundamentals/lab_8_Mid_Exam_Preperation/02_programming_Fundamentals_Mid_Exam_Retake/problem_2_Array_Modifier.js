// Problem 2 - Array Modifier

function arrayModifier(input) {
  let arraOfIntigers = input.shift().split(' ').map(Number); // extacting the array of intigers and convertin the string elements into numbers
  let instructions = input.shift().split(' ');
  let command = instructions.shift();

  while (command !== 'end') {
    let firstElement = Number(instructions.shift());
    let secondElement = Number(instructions.shift()); 

    switch (command) {
      case 'swap':
        let swap1 = arraOfIntigers[firstElement];
        let swap2 = arraOfIntigers[secondElement];
        arraOfIntigers.splice(firstElement, 1, swap2);
        arraOfIntigers.splice(secondElement, 1, swap1);
        break;
      case 'multiply':
        let multiply1 = arraOfIntigers[firstElement];
        let multiply2 = arraOfIntigers[secondElement];
        let result = multiply1 * multiply2;
        arraOfIntigers.splice(firstElement, 1, result);
        break;
      case 'decrease':
        arraOfIntigers = arraOfIntigers.map((x) => x - 1);
        break;
    }

    instructions = input.shift().split(' ');
    command = instructions.shift();
  }
  console.log(arraOfIntigers.join(', '));
}

arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease', 'end']);
arrayModifier(['1 2 3 4', 'swap 0 1', 'swap 1 2', 'swap 2 3', 'multiply 1 2', 'decrease', 'end']);
