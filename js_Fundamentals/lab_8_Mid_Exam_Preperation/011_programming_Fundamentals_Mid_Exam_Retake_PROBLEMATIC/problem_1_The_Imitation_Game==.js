// Problem 1 - The Imitation Game

function enigma(input) {
  let encryptedMessage = input.shift().split('');
  let instructions = input.shift();

  while (instructions !== 'Decode') {
    let instructionsCopy = instructions.split('|');
    let command = instructionsCopy.shift();
    let firstParameter = instructionsCopy.shift();
    let secondParameter = instructionsCopy.shift();

    switch (command) {
      case 'Move':
        let moveIndex = Number(firstParameter);
        let movingElements = encryptedMessage.splice(0, moveIndex);
        encryptedMessage.push(...movingElements);
        break;
      case 'Insert':
        let index = Number(firstParameter);
        encryptedMessage.splice(index, 0, secondParameter);
        break;
      case 'ChangeAll':
        let changedElements = [];
        encryptedMessage.forEach((x) => {
          // there is a potential edge case in the code. It occurs when using the ChangeAll command to replace all occurrences of a character in the encryptedMessage array. when using forEach method to iterate over the array and replace the matching characters. However, since you are modifying the array while iterating over it, it can lead to unexpected behavior.
          if (x === firstParameter) {
            changedElements.push(secondParameter);
          } else {
            changedElements.push(x);
          }
        });
        encryptedMessage = changedElements;
        break;
    }
    instructions = input.shift();
  }
  console.log(`The decrypted message is: ${encryptedMessage.join('')}`);
}

enigma(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);
enigma(['owyouh', 'Move|2', 'Move|3', 'Insert|3|are', 'Insert|9|?', 'Decode']);
