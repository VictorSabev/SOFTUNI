// Task 5 - Inventory

function inventory(input) {
  let heroList = input.slice();

  // sort. method by chat GPT
  // heroList.sort((a, b) => {
  //   const aNum = parseInt(a.split(' / ')[1]);
  //   const bNum = parseInt(b.split(' / ')[1]);
  //   return aNum - bNum;
  // });

  let heroes = [];

  for (i of heroList) {
    let [heroName, level, inventory] = i.split(' / ');
    let heroInfo = {
      hero: heroName,
      level: Number(level),
      items: inventory,
    };
    heroes.push(heroInfo); // lecturer solution we push each object into an array which is later sorted
  }

  heroes.sort((a, b) => a.level - b.level); // sorting according to level

  heroes.forEach((x) => {
    console.log(`Hero: ${x.hero}`);
    console.log(`level => ${x.level}`);
    console.log(`items => ${x.items}`);
  });
}

inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
console.log('---------');
inventory(['Batman / 2 / Banana, Gun', 'Superman / 18 / Sword', 'Poppy / 28 / Sentinel, Antara']);
