// Task 6 - Word Occurrences

function wordOccurrences(input) {
  let dataBase = {};

  for (let entry of input) {
    let word = entry;
    if (dataBase[word]) {
      dataBase[word]++;
    } else {
      dataBase[word] = 1;
    }
  }

  let occurrencesArray = Object.entries(dataBase);
  occurrencesArray.sort((a, b) => b[1] - a[1]);

  for (let [word, count] of occurrencesArray) {
    console.log(`${word} -> ${count} times`);
  }
}

wordOccurrences([
  'Here',
  'is',
  'the',
  'first',
  'sentence',

  'Here',
  'is',
  'another',
  'sentence',
  'And',

  'finally',
  'the',
  'third',
  'sentence',
]);
console.log('-------------');
wordOccurrences(['dog', 'bye', 'city', 'dog', 'dad', 'boys', 'ginger']);
