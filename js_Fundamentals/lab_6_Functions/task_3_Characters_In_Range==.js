// Task 3 - Characters in Range

function charactersInRange(firstChar, secondChar) {
  let rangeStart = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
  let rangeEnd = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
  let resulString = '';

  for (let currentChar = rangeStart + 1; currentChar < rangeEnd; currentChar++) {
    let singleChar = String.fromCharCode(currentChar);

    if (currentChar + 1 === rangeEnd) {
      resulString += `${singleChar}`;
    } else {
      resulString += `${singleChar} `;
    }
  }
  console.log(resulString);
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');
