// Task 2 - Armies

function theDictatotr(input) {
  let dictatorsPool = {};
  for (let element of input) {
    if (element.includes('arrives')) {
      const dictatorName = element.split(' arrives')[0];
      dictatorsPool[dictatorName] = {
        armies: [],
        totalArmyCount: 0,
      };
    } else if (element.includes(':')) {
      let [dictatorName, army] = element.split(': ');
      let [armyName, armyCount] = army.split(', ');

      if (dictatorsPool.hasOwnProperty(dictatorName)) {
        dictatorsPool[dictatorName].armies.push({
          name: armyName,
          count: Number(armyCount),
        });
        dictatorsPool[dictatorName].totalArmyCount += Number(armyCount);
      }

    } else if (element.includes('+')) {
      let [dictatorName, army] = element.split(': ');
      let [armyName, armyCount] = army.split(', ');

      if (dictatorsPool.hasOwnProperty(dictatorName)) {
        dictatorsPool[dictatorName].armies.push({
          name: armyName,
          count: Number(armyCount),
        });
        dictatorsPool[dictatorName].totalArmyCount += Number(armyCount);
      }

    } else if (element.includes('defeated')) {
      element = element.split(' ');
      element.pop();
      let defeatedDictator = element.join(' ');
      delete dictatorsPool[defeatedDictator];
    }
  }
}

theDictatotr([
  'Rick Burr arrives',
  'Fergus: Wexamp, 30245',
  'Rick Burr: Juard, 50000',
  'Findlay arrives',
  'Findlay: Britox, 34540',
  'Wexamp + 6000',

  'Juard + 1350',
  'Britox + 4500',
  'Porter arrives',
  'Porter: Legion,55000',
  'Legion + 302',
  'Rick Burr defeated',
  'Porter: Retix, 3205',
]);

console.log('--------------');

theDictatotr([
  'Rick Burr arrives',
  'Findlay arrives',
  'Rick Burr: Juard, 1500',
  'Wexamp arrives',
  'Findlay: Wexamp, 34540',
  'Wexamp + 340',
  'Wexamp: Britox, 1155',
  'Wexamp: Juard, 43423',
]);
