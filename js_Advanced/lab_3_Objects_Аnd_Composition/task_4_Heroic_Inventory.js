// Task 4 - Heroic Inventory

function inventory(heroes) {
  let resultArray = [];
  for (let hero of heroes) {
    let [heroName, heroLevel, ...items] = hero.split(' / ');

    items = items.join(', ').split(', ');
   
    let heroInfo = {
      name: heroName,
      level: Number(heroLevel),
      items: items,
    };

    resultArray.push(heroInfo);
  }

  console.log(JSON.stringify(resultArray));
}

inventory([
  'Isacc / 25 / Apple, GravityGun',

  'Derek / 12 / BarrelVest, DestructionSword',

  'Hes / 1 / Desolator, Sentinel, Antara',
]);
