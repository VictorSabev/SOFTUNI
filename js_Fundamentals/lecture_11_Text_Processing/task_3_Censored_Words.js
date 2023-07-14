// Task 3 - Censored Words

function censorWords(text, word) {
  while (text.includes(word)) {
    text = text.replace(word, '*'.repeat(word.length));
  }
  console.log(text);
}

censorWords('A small sentence with some words', 'small');
censorWords('Find the hidden word', 'hidden');
