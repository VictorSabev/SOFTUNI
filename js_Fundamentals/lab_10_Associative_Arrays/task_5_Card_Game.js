// Task 5 - Card Game

function cardGame(input) {
  let pokerStars = {};

  for (let draw of input) {
    draw = draw.split(': ');

    let name = draw.shift(); // geeting the name of the player to store as an object key
    let cardsDrawn = draw.shift().split(', '); // getting an array of the cards drawn

    if (pokerStars.hasOwnProperty(name)) {
      pokerStars[name] = pokerStars[name].concat(cardsDrawn); // if the entry exists merge the two arrays
    } else {
      pokerStars[name] = cardsDrawn;
    }
  }

  for (let entry in pokerStars) {
    let columnOfCards = pokerStars[entry];

    let cardsSet = new Set(); // creating a Set to sotre only the unique drawn cards
    columnOfCards.forEach((card) => {
      cardsSet.add(card); // for each element in the cards drown array we add the unique ones into a Set
    });
    columnOfCards = Array.from(cardsSet); // convert the Set back into an array`

    let result = 0; // setting a resul var to sum and store the value of the cards

    for (let card of columnOfCards) {
      card = card.split('');

      let cardColor = card.pop();
      switch (cardColor) {
        case 'S':
          cardColor = 4;
          break;
        case 'H':
          cardColor = 3;
          break;
        case 'D':
          cardColor = 2;
          break;
        case 'C':
          cardColor = 1;
          break;
      }

      let cardValue = card.join('');
      switch (cardValue) {
        case 'J':
          cardValue = 11;
          break;
        case 'Q':
          cardValue = 12;
          break;
        case 'K':
          cardValue = 13;
          break;
        case 'A':
          cardValue = 14;
          break;
      }
      result += cardValue * cardColor;
    }
    pokerStars[entry] = result;
  }

  for (const key in pokerStars) {
    console.log(`${key}: ${pokerStars[key]}`);
  }
}

cardGame([
  'Peter: 2C, 4H, 9H, AS, QS',

  'Tomas: 3H, 10S, JC, KD, 5S, 10S',

  'Andrea: QH, QC, QS, QD',

  'Tomas: 6H, 7S, KC, KD, 5S, 10C',

  'Andrea: QH, QC, JS, JD, JC',

  'Peter: JD, JD, JD, JD, JD, JD',
]);

console.log('-----------');

cardGame([
  'John: 2C, 4H, 9H, AS, QS',

  'Slav: 3H, 10S, JC, KD, 5S, 10S',

  'Alex: 6H, 7S, KC, KD, 5S, 10C',

  'Thomas: QH, QC, JS, JD, JC',

  'Slav: 6H, 7S, KC, KD, 5S, 10C',

  'Thomas: QH, QC, JS, JD, JC',

  'Alex: 6H, 7S, KC, KD, 5S, 10C',

  'Thomas: QH, QC, JS, JD, JC',

  'John: JD, JD, JD, JD',
]);
