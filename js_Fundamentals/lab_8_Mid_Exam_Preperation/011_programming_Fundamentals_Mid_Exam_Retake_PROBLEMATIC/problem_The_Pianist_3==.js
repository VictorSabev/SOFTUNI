// Problem 3 - The Pianist

function pianoPlayer(input) {
  const initialIndex = Number(input.shift());
  let currentList = input.splice(0, initialIndex);
  currentList = currentList.join(',').split(/[,|]/);
  let instructions = input.shift().split('|');
  let command = instructions.shift();

  while (command !== 'Stop') {
    let piece = instructions.slice(0, 1).shift();
    let secondElement = instructions.slice(1, 2).shift();
    let key = instructions.slice(2, 3).shift();

    switch (command) {
      case 'Add':
        if (currentList.includes(piece)) {
          console.log(`${piece} is already in the collection!`);
        } else {
          currentList.push(piece, secondElement, key);
          console.log(`${piece} by ${secondElement} in ${key} added to the collection!`);
        }
        break;
      case 'Remove':
        if (currentList.includes(piece)) {
          let removedItemIndex = currentList.indexOf(piece);
          currentList.splice(removedItemIndex, 3);
          console.log(`Successfully removed ${piece}!`);
        } else {
          console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
        break;
      case 'ChangeKey':
        if (currentList.includes(piece)) {
          let changeItemIndex = currentList.indexOf(piece);
          currentList.splice(changeItemIndex + 2, 1, secondElement);
          console.log(`Changed the key of ${piece} to ${secondElement}!`);
        } else {
          console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
        break;
    }

    instructions = input.shift().split('|');
    command = instructions.shift();
  }

  for (let l = 0; l < currentList.length; l += 3) {
    let finalPiece = currentList[l];
    let finalComposer = currentList[l + 1];
    let finalKey = currentList[l + 2];

    console.log(`${finalPiece} -> Composer: ${finalComposer}, Key: ${finalKey}`);
  }
}

pianoPlayer([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop',
]);
console.log('----------');
pianoPlayer([
  '4',
  'Eine kleine Nachtmusik|Mozart|G Major',
  'La Campanella|Liszt|G# Minor',
  'The Marriage of Figaro|Mozart|G Major',
  'Hungarian Dance No.5|Brahms|G Minor',
  'Add|Spring|Vivaldi|E Major',
  'Remove|The Marriage of Figaro',
  'Remove|Turkish March',
  'ChangeKey|Spring|C Major',
  'Add|Nocturne|Chopin|C# Minor',
  'Stop',
]);
