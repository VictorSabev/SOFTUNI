// Problem 1 - The Imitation Game

function decode(input) {
  let message = input.shift();

  let tempMessage = '';

  let instructions = input.shift();

  while (instructions !== 'Decode') {
    instructions = instructions.split('|');
    let command = instructions.shift();

    switch (command) {
      case 'Move':
        let n = Number(instructions[0]);
        let lettersToMove = message.substring(0, n);
        tempMessage = message.replace(lettersToMove, '');
        tempMessage += lettersToMove;
        message = tempMessage;
        break;

      case 'Insert':
        let insertIndex = Number(instructions[0]);
        let insertValue = instructions[1];

        tempMessage = message.split('');
        tempMessage.splice(insertIndex, 0, insertValue);
        message = tempMessage.join('');
        break;

      case 'ChangeAll':
        let changeTarget = instructions[0];
        let changeValue = instructions[1];
        tempMessage = [];
        for (let char of message) {
          if (char === changeTarget) {
            tempMessage.push(changeValue);
          } else {
            tempMessage.push(char);
          }
        }
        message = tempMessage.join('');
        break;
    }

    instructions = input.shift();
  }
  console.log(`The decrypted message is: ${message}`);
}

decode(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);
decode(['owyouh', 'Move|2', 'Move|3', 'Insert|3|are', 'Insert|9|?', 'Decode']);
