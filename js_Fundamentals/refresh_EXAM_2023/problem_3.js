// Problem 3 - The Pianist

function songList(input) {
  const numberOfPieces = input.shift();

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
    let pieceName = instructions.shift();
    let firstParameter = instructions.shift();
    let secondParameter = instructions.shift();

    switch (command) {
      case 'Add':
        if (dataBase.hasOwnProperty(pieceName)) {
          console.log(`${pieceName} is already in the collection!`);
        } else {
          dataBase[pieceName] = {
            composer: firstParameter,
            key: secondParameter,
          };
          console.log(
            `${pieceName} by ${firstParameter} in ${secondParameter} added to the collection!`
          );
        }
        break;

      case 'Remove':
        if (dataBase.hasOwnProperty(pieceName)) {
          delete dataBase[pieceName];
          console.log(`Successfully removed ${pieceName}!`);
        } else {
          console.log(
            `Invalid operation! ${pieceName} does not exist in the collection.`
          );
        }
        break;
      case 'ChangeKey':
        if (dataBase.hasOwnProperty(pieceName)) {
          dataBase[pieceName].key = firstParameter;
          console.log(`Changed the key of ${pieceName} to ${firstParameter}!`);
        } else {
          console.log(
            `Invalid operation! ${pieceName} does not exist in the collection.`
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

songList([
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
songList([
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
