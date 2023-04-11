// Zadacha 4 - PC Game Shop

function Demo(input) {
  let soldGames = Number(input[0]);
  let gameName;

  let heartStoneCounter = 0;
  let forniteCounter = 0;
  let overwatchCounter = 0;
  let othersCounter = 0;

  for (let i = 1; i <= soldGames; i++) {
    gameName = input[i];
    if (gameName === 'Hearthstone') {
      heartStoneCounter++;
    } else if (gameName === 'Fornite') {
      forniteCounter++;
    } else if (gameName === 'Overwatch') {
      overwatchCounter++;
    } else {
      othersCounter++;
    }
  }

  let avgHeartStone = (heartStoneCounter / soldGames) * 100;
  let avgFornite = (forniteCounter / soldGames) * 100;
  let avgOverwatch = (overwatchCounter / soldGames) * 100;
  let avgOthers = (othersCounter / soldGames) * 100;

  console.log(`Hearthstone - ${avgHeartStone.toFixed(2)}%`);
  console.log(`Fornite - ${avgFornite.toFixed(2)}%`);
  console.log(`Overwatch - ${avgOverwatch.toFixed(2)}%`);
  console.log(`Others - ${avgOthers.toFixed(2)}%`);
}

Demo(['4', 'Hearthstone', 'Fornite', 'Overwatch', 'Counter-Strike']);
Demo(['3', 'Hearthstone', 'Diablo 2', 'Star Craft 2']);
