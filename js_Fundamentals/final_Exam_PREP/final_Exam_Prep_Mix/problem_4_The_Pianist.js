// Problem 4 - The Pianist

function pianistTask(input) {
  const numberOfPieces = +input.shift();
  let dataBase = {};

  for (let i = 0; i < numberOfPieces; i++) {
    let currentPiece = input.shift();
    let [piece, composer, key] = currentPiece.split('|');
    dataBase[piece] = {
      composer,
      key,
    };
  }

  let instructions = input.shift();

  while (instructions !== 'Stop') {
    instructions = instructions.split('|');
    let command = instructions.shift();
    const piece = instructions.shift();

    switch (command) {
      case 'Add':
        let composer = instructions[0];
        let key = instructions[1];
        if (dataBase.hasOwnProperty(piece)) {
          console.log(`${piece} is already in the collection!`);
        } else {
          dataBase[piece] = {
            composer,
            key,
          };
          console.log(
            `${piece} by ${composer} in ${key} added to the collection!`
          );
        }
        break;

      case 'Remove':
        if (dataBase.hasOwnProperty(piece)) {
          delete dataBase[piece];
          console.log(`Successfully removed ${piece}!`);
        } else {
          console.log(
            `Invalid operation! ${piece} does not exist in the collection.`
          );
        }
        break;

      case 'ChangeKey':
        const newKey = instructions[0];
        if (dataBase.hasOwnProperty(piece)) {
          dataBase[piece].key = newKey;
          console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
          console.log(
            `Invalid operation! ${piece} does not exist in the collection.`
          );
        }
        break;
    }

    instructions = input.shift();
  }

  for (const piece in dataBase) {
    console.log(
      `${piece} -> Composer: ${dataBase[piece].composer}, Key: ${dataBase[piece].key}`
    );
  }
}

pianistTask([
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
pianistTask([
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
