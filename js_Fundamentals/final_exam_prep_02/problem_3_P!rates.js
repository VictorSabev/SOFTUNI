// Problem 3 - P!rates

function thePirateLifeForMe(input) {
  let command = input.shift();
  let plunderBase = {};

  while (command !== 'Sail') {
    let [town, population, gold] = command.split('||');
    population = Number(population);
    gold = Number(gold);
    if (plunderBase.hasOwnProperty(town)) {
      plunderBase[town].population += population;
      plunderBase[town].gold += gold;
    } else {
      plunderBase[town] = {
        population,
        gold,
      };
    }

    command = input.shift();
  }

  command = input.shift();

  while (command !== 'End') {
    command = command.split('=>');
    let action = command.shift();
    let town = command.shift();

    switch (action) {
      case 'Plunder':
        let peopleKilled = Number(command[0]);
        let goldStollen = Number(command[1]);
        plunderBase[town].population -= peopleKilled;
        plunderBase[town].gold -= goldStollen;
        console.log(
          `${town} plundered! ${goldStollen} gold stolen, ${peopleKilled} citizens killed.`
        );
        if (plunderBase[town].population <= 0 || plunderBase[town].gold <= 0) {
          delete plunderBase[town];
          console.log(`${town} has been wiped off the map!`);
        }
        break;

      case 'Prosper':
        let goldIncome = Number(command[0]);
        if (goldIncome < 0) {
          console.log('Gold added cannot be a negative number!');
        } else {
          plunderBase[town].gold += goldIncome;
          console.log(
            `${goldIncome} gold added to the city treasury. ${town} now has ${plunderBase[town].gold} gold.`
          );
        }
        break;
    }
    command = input.shift();
  }
  let checkEmptyArr = Object.keys(plunderBase);
  if (checkEmptyArr.length > 0) {
    console.log(
      `Ahoy, Captain! There are ${checkEmptyArr.length} wealthy settlements to go to:`
    );
    for (const town in plunderBase) {
      console.log(
        `${town} -> Population: ${plunderBase[town].population} citizens, Gold: ${plunderBase[town].gold} kg`
      );
    }
  } else {
    console.log(
      'Ahoy, Captain! All targets have been plundered and destroyed!'
    );
  }
}

thePirateLifeForMe([
  'Tortuga||345000||1250',
  'Santo Domingo||240000||630',
  'Havana||410000||1100',
  'Sail',
  'Plunder=>Tortuga=>75000=>380',
  'Prosper=>Santo Domingo=>180',
  'End',
]);

thePirateLifeForMe([
  'Nassau||95000||1000',
  'San Juan||930000||1250',
  'Campeche||270000||690',
  'Port Royal||320000||1000',
  'Port Royal||100000||2000',
  'Sail',
  'Prosper=>Port Royal=>-200',
  'Plunder=>Nassau=>94000=>750',
  'Plunder=>Nassau=>1000=>150',
  'Plunder=>Campeche=>150000=>690',
  'End',
]);
