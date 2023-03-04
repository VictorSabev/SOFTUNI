// Zadacha 6 - Vowels Sum

function Demo(input) {
  let word = input[0];
  let letter;
  let sum = 0;
  const letterValue = { a: 1, e: 2, i: 3, o: 4, u: 5 };

  for (let i = 0; i < word.length; i++) {
    letter = word[i];

    if (letter in letterValue) {
      sum += letterValue[letter];
    }
    /* switch (letter) {
      case 'a':
        sum += 1;
        break;
      case 'e':
        sum += 2;
        break;
      case 'i':
        sum += 3;
        break;
      case 'o':
        sum += 4;
        break;
      case 'u':
        sum += 5;
        break;

    } */
  }

  console.log(sum);
}

Demo(['hello']);
Demo(['hi']);
Demo(['bamboo']);
Demo(['beer']);
