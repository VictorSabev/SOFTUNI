// Task 1 - Value of a String

function valueOfAString(input) {
  let string = input[0];
  let instructions = input[1];

  let targetCharsSum = 0;

  for (const element of string) {
    let currentChar = element.charCodeAt();

    if (instructions === 'UPPERCASE') {
      if (currentChar >= 65 && currentChar <= 90) {
        targetCharsSum += currentChar;
      }
    } else if (instructions === 'LOWERCASE') {
      if (currentChar >= 97 && currentChar <= 122) {
        targetCharsSum += currentChar;
      }
    }
  }

  console.log(`The total sum is: ${targetCharsSum}`);
}

valueOfAString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
valueOfAString(['AC/DC', 'UPPERCASE']);
