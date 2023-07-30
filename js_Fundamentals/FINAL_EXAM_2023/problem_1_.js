// Problem 1 - Decrypting Commands

function decryption(input) {
  let text = input.shift();

  let instructions = input.shift();

  while (instructions !== 'Finish') {
    instructions = instructions.split(' ');
    let command = instructions.shift();

    switch (command) {
      case 'Replace':
        const currentChar = instructions[0];
        const newChar = instructions[1];
        while (text.includes(currentChar)) {
          text = text.replace(currentChar, newChar);
        }
        console.log(text);
        break;

      case 'Cut':
        const startIndex = +instructions[0];
        const endIndex = +instructions[1];
        if (
          startIndex >= 0 &&
          startIndex < text.length &&
          endIndex >= 0 &&
          endIndex < text.length
        ) {
          let subString = text.substring(startIndex, endIndex + 1);
          text = text.replace(subString, '');
          console.log(text);
        } else {
          console.log('Invalid indices!');
        }
        break;

      case 'Make':
        const letterCase = instructions[0];
        let tempText = '';

        if (letterCase === 'Upper') {
          for (const letter of text) {
            tempText += letter.toUpperCase();
          }
        } else if (letterCase === 'Lower') {
          for (const letter of text) {
            tempText += letter.toLowerCase();
          }
        }
        text = tempText;
        console.log(text);
        break;

      case 'Check':
        const string = instructions[0];
        if (text.includes(string)) {
          console.log(`Message contains ${string}`);
        } else {
          console.log(`Message doesn't contain ${string}`);
        }
        break;

      case 'Sum':
        {
          const startIndex = +instructions[0];
          const endIndex = +instructions[1];
          if (
            startIndex >= 0 &&
            startIndex < text.length &&
            endIndex >= 0 &&
            endIndex < text.length
          ) {
            let subString = text.substring(startIndex, endIndex + 1);
            let result = 0;
            for (const char of subString) {
              result += char.charCodeAt();
            }
            console.log(result);
          } else {
            console.log('Invalid indices!');
          }
        }
        break;
    }

    instructions = input.shift();
  }
}

decryption([
  'ILikeSoftUni',
  'Replace I We',
  'Make Upper',
  'Check SoftUni',
  'Sum 1 4',
  'Cut 1 4',
  'Finish',
]);
console.log('--------');
decryption([
  'HappyNameDay',

  'Replace p r',

  'Make Lower',

  'Cut 2 23',

  'Sum -2 2',

  'Finish',
]);
