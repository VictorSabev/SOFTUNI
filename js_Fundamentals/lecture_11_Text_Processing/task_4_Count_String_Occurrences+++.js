// Task 4 - Count String Occurrences

function countString(text, word) {
  let count = text.split(' ').filter((x) => x === word).length;
  console.log(count);
}

countString('This is a word and it also is a sentence', 'is');
countString(
  'softuni is great place for learning new programming languages',
  'softuni'
);
