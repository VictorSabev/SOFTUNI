// Task 9 - Dungeonest Dark

function game(input) {
  const maxHealth = 100;
  let currentHealth = maxHealth;
  let healing = 0;
  const initialCoin = 0;
  let currentCoin = initialCoin;
  let income = 0;
  let monsterName = '';
  let damage = 0;
  let roomCounter = 0;

  //Chat GPT
  let array = input[0].split('|');    
  const arrayStrings = array.map((item) => item.split(' ')[0]); 
  const arrayNumbers = array.map((item) => Number(item.split(' ')[1])); 
  //Chat GPT

  for (let discovery = 0, value = 0; discovery < arrayStrings.length, value < arrayNumbers.length; discovery++, value++) {
    roomCounter++;
    switch (arrayStrings[discovery]) {
      case 'potion':
        healing = arrayNumbers[value];
        if (currentHealth + healing > maxHealth) {
          healing = maxHealth - currentHealth;
          currentHealth = maxHealth;
          } else {
          currentHealth += healing;
        }
        console.log(`You healed for ${healing} hp.`);
        console.log(`Current health: ${currentHealth} hp.`);
        break;
      case 'chest':
        income = arrayNumbers[value];
        currentCoin += income;
        console.log(`You found ${income} coins.`);
        break;
      default:
        monsterName = arrayStrings[discovery];
        damage = arrayNumbers[value];
        if (currentHealth - damage <= 0) {
          console.log(`You died! Killed by ${monsterName}.`);
          console.log(`Best room: ${roomCounter}`);
          return;
        } else {
          currentHealth -= damage;
          console.log(`You slayed ${monsterName}.`);
        }
        break;
    }
  }

  if (currentHealth > 0) {
    console.log("You've made it!");
    console.log(`Coins: ${currentCoin}`);
    console.log(`Health: ${currentHealth}`);
  }
}

game(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
console.log('------------');
game(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);
