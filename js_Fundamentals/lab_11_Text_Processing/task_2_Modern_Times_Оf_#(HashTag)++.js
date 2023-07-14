// Task 2 - Modern Times of #(HashTag)

function findHashTag(text) {
  let textArr = text.split(' ').filter((word) => word.startsWith('#'));
  for (let word of textArr) {
    let targetWord = word.substring(1);
    let wordCopy = '';
    for (const letter of targetWord) {
      let testLetter = letter.toLowerCase();
      if (testLetter.charCodeAt() < 97 || testLetter.charCodeAt() > 122) {
        break;
      } else {
        wordCopy += letter;
      }
    }
    if (wordCopy !== '') {
      console.log(wordCopy);
    }
  }
}

findHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
findHashTag(
  'The symbol # is known #variously in English-speaking #regions as the #number sign'
);
