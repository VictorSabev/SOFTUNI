// Problem 1 - The imitation game

function decoding(input) {
  let inputMod = input.slice();
  let encryptedMesage = inputMod.shift();

  let instructions = inputMod.shift();

  while (instructions !== 'Decode') {
    instructions = instructions.split('|');
    let command = instructions.shift();
    let firstParameter = instructions.shift();
    let secondParameter = instructions.shift();

    switch (command) {
      case 'Move':
        let numberOfLetters = Number(firstParameter);
        let tempText1 = encryptedMesage.substring(0, numberOfLetters);
        let tempText2 = encryptedMesage.substring(numberOfLetters);
        encryptedMesage = tempText2 + tempText1;
        break;

      case 'Insert':
        let index = Number(firstParameter);
        let value = secondParameter;
        let tempArr = encryptedMesage.split('');
        tempArr.splice(index, 0, value);
        encryptedMesage = tempArr.join('');
        break;

      case 'ChangeAll':
        let substring = firstParameter;
        let replacement = secondParameter;
        while (encryptedMesage.includes(firstParameter)) {
          encryptedMesage = encryptedMesage.replace(substring, replacement);
        }

        break;
    }

    instructions = inputMod.shift();
  }
  console.log(`The decrypted message is: ${encryptedMesage}`);
}

decoding(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);

decoding([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode',
]);
