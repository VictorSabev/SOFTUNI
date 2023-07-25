// Problem 3 - Plant Discovery

function plantsRating(input) {
  let n = Number(input.shift());
  let dataBase = {};

  for (let i = 0; i < n; i++) {
    let plantInfo = input.shift();
    let [plantName, rarity] = plantInfo.split('<->');
    dataBase[plantName] = [rarity];
  }

  let instructions = input.shift();

  while (instructions !== 'Exhibition') {
    instructions = instructions.split(' ');
    const command = instructions[0];
    const plantName = instructions[1];
    const newData = instructions[3];

    if (dataBase.hasOwnProperty(plantName)) {
      switch (command) {
        case 'Rate:':
          const rating = Number(newData);
          dataBase[plantName].push(rating);
          break;
        case 'Update:':
          const newRarityScore = newData;
          dataBase[plantName][0] = newRarityScore;
          break;
        case 'Reset:':
          dataBase[plantName] = [dataBase[plantName][0]];
          break;
      }
    } else {
      console.log('error');
    }
    instructions = input.shift();
  }

  console.log('Plants for the exhibition:');

  for (const key in dataBase) {
    let resultArr = dataBase[key];
    let rarity = resultArr[0];
    let avgRating = 0;

    if (resultArr.length > 1) {
      for (let i = 1; i < resultArr.length; i++) {
        avgRating += resultArr[i];
      }
      avgRating = avgRating / (resultArr.length - 1);
    }

    console.log(`- ${key}; Rarity: ${rarity}; Rating: ${avgRating.toFixed(2)}`);
  }
}

plantsRating([
  '3',

  'Arnoldii<->4',

  'Woodii<->7',

  'Welwitschia<->2',

  'Rate: Woodii - 10',

  'Rate: Welwitschia - 7',

  'Rate: Arnoldii - 3',

  'Rate: Woodii - 5',

  'Update: Woodii - 5',

  'Reset: Arnoldii',

  'Exhibition',
]);

console.log('-----------');

plantsRating([
  '2',

  'Candelabra<->10',

  'Oahu<->10',

  'Rate: Oahu - 7',

  'Rate: Candelabra - 6',

  'Exhibition',
]);
