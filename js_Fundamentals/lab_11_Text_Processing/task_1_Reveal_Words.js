// Task 1 - Reveal Words

function theImitationGame(words, text) {
  let testSubj = text;
  let converteWordLength = '';
  let wordsArr = words.split(', ');
  for (let word of wordsArr) {
    for (let i = 0; i < word.length; i++) {
      converteWordLength += '*';
    }
    testSubj = testSubj.replace(converteWordLength, word);
    converteWordLength = '';
  }
  console.log(testSubj);
}

theImitationGame(
  'great',
  'softuni is ***** place for learning new programming languages'
);
theImitationGame(
  'great, learning',
  'softuni is ***** place for ******** new programming languages'
);
