// Problem 5 - Secret Chat

function decodeMessage(input) {
  let message = input.shift();
  let instructions = input.shift();

  while (instructions !== 'Reveal') {
    instructions = instructions.split(':|:');
    const command = instructions.shift();

    switch (command) {
      case 'InsertSpace':
        const insertIndex = +instructions[0];
        let tempString1 = message.slice(0, insertIndex);
        let tempString2 = message.slice(insertIndex);
        message = tempString1 + ' ' + tempString2;
        console.log(message);
        break;

      case 'Reverse':
        let substring = instructions[0];
        if (message.includes(substring)) {
          let tempString = message.replace(substring, '');
          let newString = '';
          for (let i = substring.length - 1; i >= 0; i--) {
            newString += substring[i];
          }
          message = tempString + newString;
          console.log(message);
        } else {
          console.log('error');
        }

        break;

      case 'ChangeAll':
        {
          let substring = instructions[0];
          let replacement = instructions[1];

          while (message.includes(substring)) {
            message = message.replace(substring, replacement);
          }
        }
        console.log(message);
        break;
    }

    instructions = input.shift();
  }
  console.log(`You have a new text message: ${message}`);
}

decodeMessage([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal',
]);
console.log('-------');
decodeMessage([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal',
]);
