// Zadacha 1 - Old Books

function Demo(input) {
  let wantedBook = input[0];
  let index = 1;
  let nextBook = input[index];

  while (nextBook !== 'No More Books') {
    if (nextBook === wantedBook) {
      console.log(`You checked ${index - 1} books and found it.`);
      break;
    }
   
    index++;
    nextBook = input[index];
  }

  if (nextBook === 'No More Books') {
    console.log('The book you search is not here!');
    console.log(`You checked ${index - 1} books.`);
  }
}

Demo(['Troy', 'Stronger', 'Life Style', 'Troy']);
Demo([
  'The Spot',
  'Hunger Games',
  'Harry Potter',
  'Torronto',
  'Spotify',
  'No More Books',
]);
Demo([
  'Bourne',
  'True Story',
  'Forever',
  'More Space',
  'The Girl',
  'Spaceship',
  'Strongest',
  'Profit',
  'Tripple',
  'Stella',
  'The Matrix',
  'Bourne',
]);
