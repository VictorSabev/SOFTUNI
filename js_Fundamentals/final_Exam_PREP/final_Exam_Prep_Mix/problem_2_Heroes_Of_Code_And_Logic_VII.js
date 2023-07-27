// Problem 2 - Heroes of Code and Logic VII

function heroesGame(input) {
  const numberOfHeroes = input.shift();
  let dataBase = {};

  for (let i = 0; i < numberOfHeroes; i++) {
    let currentHero = input.shift();
    let [hero, health, mana] = currentHero.split(' ');
    dataBase[hero] = {
      health: Number(health),
      mana: Number(mana),
    };
  }

  let instructions = input.shift();

  while (instructions !== 'End') {
    instructions = instructions.split(' - ');
    const command = instructions.shift();
    const hero = instructions.shift();

    switch (command) {
      case 'CastSpell':
        let manaNeeded = +instructions[0];
        let spellName = instructions[1];

        if (manaNeeded <= dataBase[hero].mana) {
          dataBase[hero].mana -= manaNeeded;
          console.log(
            `${hero} has successfully cast ${spellName} and now has ${dataBase[hero].mana} MP!`
          );
        } else {
          console.log(`${hero} does not have enough MP to cast ${spellName}!`);
        }
        break;

      case 'TakeDamage':
        let damage = +instructions[0];
        let attacker = instructions[1];

        if (damage >= dataBase[hero].health) {
          console.log(`${hero} has been killed by ${attacker}!`);
          delete dataBase[hero];
        } else {
          dataBase[hero].health -= damage;
          console.log(
            `${hero} was hit for ${damage} HP by ${attacker} and now has ${dataBase[hero].health} HP left!`
          );
        }
        break;

      case 'Recharge':
        let rechargeAmount = Number(instructions[0]);

        if (dataBase[hero].mana + rechargeAmount > 200) {
          rechargeAmount = 200 - dataBase[hero].mana;
          dataBase[hero].mana = 200;
        } else {
          dataBase[hero].mana += rechargeAmount;
        }

        console.log(`${hero} recharged for ${rechargeAmount} MP!`);
        break;

      case 'Heal':
        let healAmount = +instructions[0];

        if (dataBase[hero].health + healAmount > 100) {
          healAmount = 100 - dataBase[hero].health;
          dataBase[hero].health = 100;
        } else {
          dataBase[hero].health += healAmount;
        }
        console.log(`${hero} healed for ${healAmount} HP!`);
        break;
    }

    instructions = input.shift();
  }
  for (hero in dataBase) {
    console.log(
      `${hero}\n  HP: ${dataBase[hero].health}\n  MP: ${dataBase[hero].mana}`
    );
  }
}

heroesGame([
  '2',
  'Solmyr 85 120',
  'Kyrre 99 50',
  'Heal - Solmyr - 10',
  'Recharge - Solmyr - 50',
  'TakeDamage - Kyrre - 66 - Orc',
  'CastSpell - Kyrre - 15 - ViewEarth',
  'End',
]);
console.log('---------');
heroesGame([
  '4',
  'Adela 90 150',
  'SirMullich 70 40',
  'Ivor 1 111',
  'Tyris 94 61',
  'Heal - SirMullich - 50',
  'Recharge - Adela - 100',
  'CastSpell - Tyris - 1000 - Fireball',
  'TakeDamage - Tyris - 99 - Fireball',
  'TakeDamage - Ivor - 3 - Mosquito',
  'End',
]);
