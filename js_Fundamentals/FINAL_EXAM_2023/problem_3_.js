// Problem 3 - Degustation Party

function degustationParty(input) {
  let dataBase = {};
  let instructions = input.shift();
  let dislikedMealsCount = 0;

  while (instructions !== 'Stop') {
    const [command, guest, meal] = instructions.split('-');

    switch (command) {
      case 'Like':
        if (!dataBase.hasOwnProperty(guest)) {
          dataBase[guest] = [meal];
        } else {
          if (!dataBase[guest].includes(meal)) {
            dataBase[guest].push(meal);
          }
        }

        break;

      case 'Dislike':
        if (!dataBase.hasOwnProperty(guest)) {
          console.log(`${guest} is not at the party.`);
        } else {
          if (dataBase[guest].includes(meal)) {
            console.log(`${guest} doesn't like the ${meal}.`);
            let removeIndex = dataBase[guest].indexOf();
            dataBase[guest].splice(removeIndex, 1);
            dislikedMealsCount++;
          } else {
            console.log(
              `${guest} doesn't have the ${meal} in his/her collection.`
            );
          }
        }
        break;
    }

    instructions = input.shift();
  }

  for (const guest in dataBase) {
    console.log(`${guest}: ${dataBase[guest].join(', ')}`);
  }

  console.log(`Unliked meals: ${dislikedMealsCount}`);
}

degustationParty([
  'Like-Krisi-shrimps',
  'Like-Krisi-soup',
  'Like-Penelope-dessert',
  'Like-Misho-salad',
  'Stop',
]);
degustationParty([
  'Like-Krisi-shrimps',

  'Dislike-Vili-carp',

  'Dislike-Krisi-salad',

  'Stop',
]);
degustationParty(['Like-Katy-fish', 'Dislike-Katy-fish', 'Stop']);
