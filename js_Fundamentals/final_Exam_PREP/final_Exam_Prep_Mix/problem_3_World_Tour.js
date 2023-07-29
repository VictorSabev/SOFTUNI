// Problem 3 - World Tour

function worldTour(input) {
  let text = input.shift();

  let instructions = input.shift();

  while (instructions !== 'Travel') {
    instructions = instructions.split(':');
    let command = instructions.shift();

    switch (command) {
      case 'Add Stop':
        let index = +instructions[0];
        let string = instructions[1];

        if (index >= 0 && index < text.length) {
          // check if index is valid
          let tempString1 = text.slice(0, index);
          let tempString2 = text.slice(index);
          text = tempString1 + string + tempString2;
        }
        console.log(text);
        break;

      case 'Remove Stop':
        let startIndex = +instructions[0];
        let endIndex = +instructions[1];

        if (startIndex >= 0 && endIndex < text.length) {
          // check if startIndex and endIndex are valid
          let deleteString = text.substring(startIndex, endIndex + 1);
          text = text.replace(deleteString, '');
        }
        console.log(text);
        break;

      case 'Switch':
        let oldString = instructions[0];
        let newString = instructions[1];

        if (text.includes(oldString)) {
          text = text.replace(oldString, newString);
        }
        console.log(text);
        break;
    }

    instructions = input.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${text}`);
}

worldTour([
  'Hawai::Cyprys-Greece',
  'Add Stop:7:Rome',
  'Remove Stop:11:16',
  'Switch:Hawai:Bulgaria',
  'Travel',
]);
console.log('------------');
worldTour([
  'Albania:Bulgaria:Cyprus:Deuchland',
  'Add Stop:3:Nigeria',
  'Remove Stop:4:8',
  'Switch:Albania: Azərbaycan',
  'Travel',
]);
